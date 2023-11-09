import p from "agent-phin";
import { HttpsProxyAgent } from "https-proxy-agent";
/**
 * Scrape request
 * @param {string} url - The url to scrape
 * @param {string} query - The query to scrape
 * @param {string} sort - The sorting method to use
 * @param {string} useragent - Custom user agent
 * @param {boolean} redirect - Apply redirects
 * @return {Promise<p.IResponse>} Phin response
 */
export declare function request(url: string, query: string, sort: string, useragent: string, redirect: boolean, agent?: HttpsProxyAgent<string>): Promise<p.IResponse>;
export declare function htmlDecode(abc: string): string;
export declare function getHostname(url: string): string;
