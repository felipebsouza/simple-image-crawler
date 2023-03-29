import { HttpClient } from "../../src/lib/crawler/http-client";
import { PageParser, PageParseResult } from "../../src/lib/crawler/page-parser";
import { Crawler } from "../../src/lib/crawler/crawler";

describe('Crawler', () => {
    const mockedSiteUrl = 'https://site.com';
    const mockedHtmlData = '<html><body><h1>Test Page</h1></body></html>';
    const mockedImagesUrls = ['https://site.com/image1.jpg', 'https://site.com/image2.jpg'];
    const mockedWordCount = 3;

    const mockHttpClient: HttpClient = {
      get: jest.fn().mockResolvedValue({
        data: mockedHtmlData
      })
    };
    const mockPageParser: PageParser = {
      parse: jest.fn().mockReturnValue({
        images: mockedImagesUrls,
        wordCount: mockedWordCount
      })
    };
    const crawler = new Crawler(mockHttpClient, mockPageParser);
  
    describe('crawl', () => {
      it('should call httpClient.get with the provided url', async () => {
        await crawler.crawl(mockedSiteUrl);
        expect(mockHttpClient.get).toHaveBeenCalledWith(mockedSiteUrl);
      });
  
      it('should call pageParser.parse with the response data', async () => {
        await crawler.crawl(mockedSiteUrl);
        expect(mockPageParser.parse).toHaveBeenCalledWith(mockedHtmlData);
      });
  
      it('should return the result from pageParser.parse', async () => {
        const result = await crawler.crawl(mockedSiteUrl);
        expect(result).toEqual({
          images: mockedImagesUrls,
          wordCount: mockedWordCount
        });
      });
    });
  });