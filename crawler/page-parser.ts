import { load } from 'cheerio';

export interface PageParseResult {
  images: string[];
  wordCount: number;
}

export class PageParser {
  parse(html: string): PageParseResult {
    const $ = load(html);
    const images = $('img')
                  .map((_, el) => $(el).attr('src') || '')
                  .get()
                  .filter(url => typeof url === 'string' && url !== '');
                  
    const words = $('body').text().match(/\b\w+\b/g) || [];
    return { images, wordCount: words.length };
  }
}