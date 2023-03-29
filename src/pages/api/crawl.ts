import { Crawler } from '@/lib/crawler/crawler';
import { HttpClient } from '@/lib/crawler/http-client';
import { PageParser, PageParseResult } from '@/lib/crawler/page-parser';
import type { NextApiRequest, NextApiResponse } from 'next'

export interface ApiResponse {
    success: boolean;
    message: string;
    data?: PageParseResult;
}

async function isValidAuthToken(clientToken: string | string[]) {
    return clientToken === process.env.AUTH_TOKEN;
}

export default async function handler(request: NextApiRequest, response: NextApiResponse<ApiResponse>) {
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
        const apiResponse: ApiResponse = { success: false, message: (error as Error).message };
        response.status(500).json(apiResponse);
    }
}
