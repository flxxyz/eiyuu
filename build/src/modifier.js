"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHostname = exports.htmlDecode = exports.request = void 0;
const agent_phin_1 = __importDefault(require("agent-phin"));
/**
 * Scrape request
 * @param {string} url - The url to scrape
 * @param {string} query - The query to scrape
 * @param {string} sort - The sorting method to use
 * @param {string} useragent - Custom user agent
 * @param {boolean} redirect - Apply redirects
 * @return {Promise<p.IResponse>} Phin response
 */
async function request(url, query, sort, useragent, redirect, agent) {
    const res = await (0, agent_phin_1.default)({
        url: url + query + sort,
        "headers": {
            "User-Agent": useragent
        },
        followRedirects: redirect,
        ...(agent ? { agent } : {}),
    });
    return res;
}
exports.request = request;
function htmlDecode(abc) {
    return abc
        .replace(/%28/g, "(")
        .replace(/%29/g, ")")
        .replace(/%2F/g, "/")
        .replace(/%3A/g, ":")
        .replace(/%27/g, "'");
}
exports.htmlDecode = htmlDecode;
function getHostname(url) {
    return new URL(url).hostname;
}
exports.getHostname = getHostname;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kaWZpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kaWZpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNERBQTJCO0FBRzNCOzs7Ozs7OztHQVFHO0FBQ0ksS0FBSyxVQUFVLE9BQU8sQ0FBQyxHQUFXLEVBQUUsS0FBYSxFQUFFLElBQVksRUFDcEUsU0FBaUIsRUFBRSxRQUFpQixFQUFFLEtBQStCO0lBQ3JFLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBQSxvQkFBQyxFQUFDO1FBQ2xCLEdBQUcsRUFBRSxHQUFHLEdBQUcsS0FBSyxHQUFHLElBQUk7UUFDdkIsU0FBUyxFQUFFO1lBQ1QsWUFBWSxFQUFFLFNBQVM7U0FDeEI7UUFDRCxlQUFlLEVBQUUsUUFBUTtRQUN6QixHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7S0FDNUIsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBWEQsMEJBV0M7QUFFRCxTQUFnQixVQUFVLENBQUMsR0FBVztJQUNwQyxPQUFPLEdBQUc7U0FDUCxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztTQUNwQixPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztTQUNwQixPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztTQUNwQixPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztTQUNwQixPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzFCLENBQUM7QUFQRCxnQ0FPQztBQUVELFNBQWdCLFdBQVcsQ0FBQyxHQUFXO0lBQ3JDLE9BQU8sSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDO0FBQy9CLENBQUM7QUFGRCxrQ0FFQyJ9