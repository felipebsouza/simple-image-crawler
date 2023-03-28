import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Crawler, CrawlerResult } from '../crawler/crawler';
import { HttpClient } from '../crawler/http-client';
import { PageParser, PageParseResult } from '../crawler/page-parser';

export interface ApiResponse {
    success: boolean;
    message: string;
    data?: PageParseResult;
}

async function isValidAuthToken(clientToken: string | string[]) {
    return clientToken === process.env.AUTH_TOKEN;
}

export default async function handler(request: VercelRequest, response: VercelResponse) {
    const { url, token } = request.body as { url?: string; token?: string } || {};

    if (!url) {
        let apiResponse: ApiResponse = { success: false, message: 'Missing "url" parameter in the body.'};
        response.status(400).send(apiResponse);
        return;
    }

    if (!token) {
        let apiResponse: ApiResponse = { success: false, message: 'Missing "token" parameter in the body.'};
        response.status(400).send(apiResponse);
        return;
    }

    const isAuthTokenValid = await isValidAuthToken(token);
    if (!isAuthTokenValid) {
        let apiResponse: ApiResponse = { success: false, message: 'Invalid token'};
        response.status(400).send(apiResponse);
        return;
    }

    const httpClient = new HttpClient();
    const pageParser = new PageParser();
    const crawler = new Crawler(httpClient, pageParser);

    try {
        const crawlerResult = await crawler.crawl(url);
        const apiResponse: ApiResponse = { success: true, message: '', data: crawlerResult };
        response.status(200).json(apiResponse);

    } catch(error) {
        const apiResponse: ApiResponse = { success: false, message: error.message };
        response.status(500).json(apiResponse);
    }
}
