
import { HttpClient } from "./http-client";
import { PageParser, PageParseResult } from "./page-parser";

export interface CrawlerResult {
    images: string[];
    wordCount: number;
}

export class Crawler {
    constructor(private readonly httpClient: HttpClient, private readonly pageParser: PageParser) { }

    async crawl(url: string): Promise<PageParseResult> {
        const response = await this.httpClient.get(url);
        return this.pageParser.parse(response.data, url);
    }
}