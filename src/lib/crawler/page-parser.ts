import { load } from 'cheerio';
import { is } from 'cheerio/lib/api/traversing';

export interface WordOccurrence {
  word: string;
  count: number;
}

export interface PageParseResult {
  images: string[];
  wordCount: number;
  mostFrequentWords: WordOccurrence[];
}

export class PageParser {
  private readonly mostFrequentWordsIndexSize = 10;

  parse(html: string, baseUrl: string): PageParseResult {
    const urlOrigin =  new URL(baseUrl).origin;

    const $ = load(html);
    const images = $('img')
                  .map((_, el) => {
                    const imageUrl = $(el).attr('src');
                    if (!imageUrl) {
                      return null;
                    }

                    const isRelativeUrl = !/^(https?:)?\/\//i.test(imageUrl);
                    return isRelativeUrl ? urlOrigin + imageUrl : imageUrl;
                  })
                  .get()
                  .filter(el => typeof el === 'string' && el !== '');
                  
    const words = $('body').text().match(/\b\w+\b/g) || [];

    const wordCounts: {[word: string]: number} = (words as string[]).reduce((counts: { [x: string]: number; }, word: string) => {
      const lowerCaseWord = word.toLocaleLowerCase();
      counts[lowerCaseWord] = counts[lowerCaseWord] ? counts[lowerCaseWord] + 1 : 1;
      return counts;
    }, {});
    
    const topWordCounts: WordOccurrence[] = Object.entries(wordCounts)
      .map(([word, count]) => ({ word, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, this.mostFrequentWordsIndexSize);

    return { images, wordCount: words.length, mostFrequentWords: topWordCounts };
  }
}