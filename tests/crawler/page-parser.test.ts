import { PageParser } from "../../src/lib/crawler/page-parser";

describe('PageParser', () => {
    describe('parse', () => {
        it('should parse the correct number of images URL from an HTML code', () => {
            const parser = new PageParser();
            const pageParserResult = parser.parse("<html><body><img src='image1.png'><img src='image2.png'></body></html>");
            expect(pageParserResult.images.length).toBe(2);
            expect(pageParserResult.images).toContain("image1.png");
            expect(pageParserResult.images).toContain("image2.png");
        })
        it('should not parse empty images', () => {
            const parser = new PageParser();
            const pageParserResult = parser.parse("<html><body><img src='image1.png'><img src='image2.png'><img src=''><img><img src></body></html>");
            expect(pageParserResult.images.length).toBe(2);
            expect(pageParserResult.images).toContain("image1.png");
            expect(pageParserResult.images).toContain("image2.png");
        })
        it('should parse the correct number of words from HTML code', () => {
            const parser = new PageParser();
            const pageParserResult = parser.parse("<html><head><title>Title test</title></head><body>This is a simple text with 8 words.</body></html>");
            expect(pageParserResult.wordCount).toBe(8);
        })
    });
});
