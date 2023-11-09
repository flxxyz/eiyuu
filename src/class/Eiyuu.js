"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio_1 = require("cheerio");
const modifier_1 = require("../modifier");
const defaults_1 = __importDefault(require("../defaults"));
const base_1 = __importDefault(require("../base"));
class Eiyuu {
    gelbooruURL;
    danbooruURL;
    hypnohubURL;
    konachanURL;
    lolibooruURL;
    rule34URL;
    realbooruURL;
    safebooruURL;
    tbibURL;
    xbooruURL;
    yandereURL;
    searchElements;
    useragent;
    searchSortings;
    searchSortingsMoebooruBased;
    followRedirects;
    httpsProxyAgent;
    /**
     * Eiyuu
     * @param useragent custom useragent
     * @param followRedirects enable HTTP redirect following
     * @param httpsProxyAgent custom https proxy agent
    */
    constructor(useragent, followRedirects, httpsProxyAgent) {
        this.useragent = useragent || defaults_1.default.useragent;
        this.followRedirects = followRedirects || defaults_1.default.followRedirects;
        this.httpsProxyAgent = httpsProxyAgent;
        this.searchElements = "table.highlightable";
        this.searchSortings = "*&sort=desc&order_by=index_count";
        this.searchSortingsMoebooruBased = "*&type=&order=count";
        this.gelbooruURL = base_1.default.GELBOORU;
        this.danbooruURL = base_1.default.DANBOORU;
        this.hypnohubURL = base_1.default.HYPNOHUB;
        this.konachanURL = base_1.default.KONACHAN;
        this.lolibooruURL = base_1.default.LOLIBOORU;
        this.rule34URL = base_1.default.RULE34;
        this.realbooruURL = base_1.default.REALBOORU;
        this.safebooruURL = base_1.default.SAFEBOORU;
        this.tbibURL = base_1.default.TBIB;
        this.xbooruURL = base_1.default.XBOORU;
        this.yandereURL = base_1.default.YANDERE;
    }
    /**
     * Search arbitrary query on danbooru.
     * @param query The query to search.
     * @example
     * ```js
     * search.danbooru("amber").then(res => { console.log(res); });
     * ```
     * https://danbooru.donmai.us/tags?commit=Search&search%5Bhide_empty%5D=yes&search%5Bname_or_alias_matches%5D=
     */
    async danbooru(query) {
        try {
            const res = await (0, modifier_1.request)(this.danbooruURL, `*${query}`, "*%2A&search%5Border%5D=count", this.useragent, this.followRedirects, this.httpsProxyAgent);
            const $ = (0, cheerio_1.load)(res.body);
            const gets = $("a").map((i, el) => $(el).attr("href")).get();
            const tags = gets.map(el => el.split("/posts?tags=")[1]).filter(el => el !== undefined);
            const replaced = tags.map(el => (0, modifier_1.htmlDecode)(el));
            return replaced;
        }
        catch (e) {
            const error = e;
            throw new Error(error);
        }
    }
    /**
     * Search arbitrary query on gelbooru.
     * @param query The query to search.
     * @example
     * ```js
     * search.gelbooru("amber").then(res => { console.log(res); });
     * ```
     * https://gelbooru.com/index.php?page=tags&s=list&tags=
     */
    async gelbooru(query) {
        try {
            const res = await (0, modifier_1.request)(this.gelbooruURL, `*${query}`, this.searchSortings, this.useragent, this.followRedirects, this.httpsProxyAgent);
            const $ = (0, cheerio_1.load)(res.body);
            const gets = $(this.searchElements).find("a").map((i, el) => $(el).attr("href")).get();
            const tags = gets.map(el => el.split("&tags=")[1]).filter(el => el !== undefined);
            const replaced = tags.map(el => (0, modifier_1.htmlDecode)(el));
            return replaced;
        }
        catch (e) {
            const error = e;
            throw new Error(error);
        }
    }
    /**
     * Search arbitrary query on hypnohub.
     * @param query The query to search.
     * @example
     * ```js
     * search.hypnohub("erza").then(res => { console.log(res); });
     * ```
     * https://hypnohub.net/index.php?page=tags&s=list&tags=
     */
    async hypnohub(query) {
        try {
            const res = await (0, modifier_1.request)(this.hypnohubURL, `*${query}`, this.searchSortings, this.useragent, this.followRedirects, this.httpsProxyAgent);
            const $ = (0, cheerio_1.load)(res.body);
            const gets = $(this.searchElements).find("a").map((i, el) => $(el).attr("href")).get();
            const tags = gets.map(el => el.split("&tags=")[1]).filter(el => el !== undefined);
            const replaced = tags.map(el => (0, modifier_1.htmlDecode)(el));
            return replaced;
        }
        catch (e) {
            const error = e;
            throw new Error(error);
        }
    }
    /**
     * Search arbitrary query on konachan.
     * @param query The query to search.
     * @example
     * ```js
     * search.konachan("amber").then(res => { console.log(res); });
     * ```
     * https://konachan.com/tag?name=
     */
    async konachan(query) {
        try {
            const res = await (0, modifier_1.request)(this.konachanURL, `*${query}`, this.searchSortingsMoebooruBased, this.useragent, this.followRedirects, this.httpsProxyAgent);
            const $ = (0, cheerio_1.load)(res.body);
            const gets = $("tbody").find("a").map((i, el) => $(el).attr("href")).get();
            const tags = gets.map(el => el.split("/post?tags=")[1]).filter(el => el !== undefined);
            const replaced = tags.map(el => (0, modifier_1.htmlDecode)(el));
            return replaced;
        }
        catch (e) {
            const error = e;
            throw new Error(error);
        }
    }
    /**
     * Search arbitrary query on lolibooru.
     * @param query The query to search.
     * @example
     * ```js
     * search.lolibooru("kanna").then(res => { console.log(res); });
     * ```
     * https://lolibooru.moe/tag?name=
     */
    async lolibooru(query) {
        try {
            const res = await (0, modifier_1.request)(this.lolibooruURL, `*${query}`, this.searchSortingsMoebooruBased, this.useragent, this.followRedirects, this.httpsProxyAgent);
            const $ = (0, cheerio_1.load)(res.body);
            const gets = $("tbody").find("a").map((i, el) => $(el).attr("href")).get();
            const tags = gets.map(el => el.split("/post?tags=")[1]).filter(el => el !== undefined);
            const replaced = tags.map(el => (0, modifier_1.htmlDecode)(el));
            return replaced;
        }
        catch (e) {
            const error = e;
            throw new Error(error);
        }
    }
    /**
     * Search arbitrary query on rule34.
     * @param query The query to search.
     * @example
     * ```js
     * search.rule34("lisa").then(res => { console.log(res); });
     * ```
     * https://rule34.xxx/index.php?page=tags&s=list&tags=
     */
    async rule34(query) {
        try {
            const res = await (0, modifier_1.request)(this.rule34URL, `*${query}`, this.searchSortings, this.useragent, this.followRedirects, this.httpsProxyAgent);
            const $ = (0, cheerio_1.load)(res.body);
            const gets = $(this.searchElements).find("a").map((i, el) => $(el).attr("href")).get();
            const tags = gets.map(el => el.split("&tags=")[1]).filter(el => el !== undefined);
            const replaced = tags.map(el => (0, modifier_1.htmlDecode)(el));
            return replaced;
        }
        catch (e) {
            const error = e;
            throw new Error(error);
        }
    }
    /**
     * Search arbitrary query on realbooru.
     * @param query The query to search.
     * @example
     * ```js
     * search.realbooru("anri").then(res => { console.log(res); });
     * ```
     * https://realbooru.com/index.php?page=tags&s=list&tags=
     */
    async realbooru(query) {
        try {
            const res = await (0, modifier_1.request)(this.realbooruURL, `*${query}`, this.searchSortings, this.useragent, this.followRedirects, this.httpsProxyAgent);
            const $ = (0, cheerio_1.load)(res.body);
            const gets = $(this.searchElements).find("a").map((i, el) => $(el).attr("href")).get();
            const tags = gets.map(el => el.split("&tags=")[1]).filter(el => el !== undefined);
            const replaced = tags.map(el => (0, modifier_1.htmlDecode)(el));
            return replaced;
        }
        catch (e) {
            const error = e;
            throw new Error(error);
        }
    }
    /**
     * Search arbitrary query on safebooru.
     * @param query The query to search.
     * @example
     * ```js
     * search.safebooru("scathach").then(res => { console.log(res); });
     * ```
     * https://safebooru.org/index.php?page=tags&s=list&tags=
     */
    async safebooru(query) {
        try {
            const res = await (0, modifier_1.request)(this.safebooruURL, `*${query}`, this.searchSortings, this.useragent, this.followRedirects, this.httpsProxyAgent);
            const $ = (0, cheerio_1.load)(res.body);
            const gets = $(this.searchElements).find("a").map((i, el) => $(el).attr("href")).get();
            const tags = gets.map(el => el.split("&tags=")[1]).filter(el => el !== undefined);
            const replaced = tags.map(el => (0, modifier_1.htmlDecode)(el));
            return replaced;
        }
        catch (e) {
            const error = e;
            throw new Error(error);
        }
    }
    /**
     * Search arbitrary query on tbib.
     * @param query The query to search.
     * @example
     * ```js
     * search.tbib("erza").then(res => { console.log(res); });
     * ```
     * https://tbib.org/index.php?page=tags&s=list&tags=
     */
    async tbib(query) {
        try {
            const res = await (0, modifier_1.request)(this.tbibURL, `*${query}`, this.searchSortings, this.useragent, this.followRedirects, this.httpsProxyAgent);
            const $ = (0, cheerio_1.load)(res.body);
            const gets = $(this.searchElements).find("a").map((i, el) => $(el).attr("href")).get();
            const tags = gets.map(el => el.split("&tags=")[1]).filter(el => el !== undefined);
            const replaced = tags.map(el => (0, modifier_1.htmlDecode)(el));
            return replaced;
        }
        catch (e) {
            const error = e;
            throw new Error(error);
        }
    }
    /**
     * Search arbitrary query on xbooru.
     * @param query The query to search.
     * @example
     * ```js
     * search.xbooru("amber").then(res => { console.log(res); });
     * ```
     * https://xbooru.com/index.php?page=tags&s=list&tags=
     */
    async xbooru(query) {
        try {
            const res = await (0, modifier_1.request)(this.xbooruURL, `*${query}`, this.searchSortings, this.useragent, this.followRedirects, this.httpsProxyAgent);
            const $ = (0, cheerio_1.load)(res.body);
            const gets = $(this.searchElements).find("a").map((i, el) => $(el).attr("href")).get();
            const tags = gets.map(el => el.split("&tags=")[1]).filter(el => el !== undefined);
            const replaced = tags.map(el => (0, modifier_1.htmlDecode)(el));
            return replaced;
        }
        catch (e) {
            const error = e;
            throw new Error(error);
        }
    }
    /**
     * Search arbitrary query on yandere.
     * @param query The query to search.
     * @example
     * ```js
     * search.yandere("eula").then(res => { console.log(res); });
     * ```
     * https://yande.re/tag?name=
     */
    async yandere(query) {
        try {
            const res = await (0, modifier_1.request)(this.yandereURL, `*${query}`, this.searchSortingsMoebooruBased, this.useragent, this.followRedirects, this.httpsProxyAgent);
            const $ = (0, cheerio_1.load)(res.body);
            const gets = $("tbody").find("a").map((i, el) => $(el).attr("href")).get();
            const tags = gets.map(el => el.split("/post?tags=")[1]).filter(el => el !== undefined);
            const replaced = tags.map(el => (0, modifier_1.htmlDecode)(el));
            return replaced;
        }
        catch (e) {
            const error = e;
            throw new Error(error);
        }
    }
}
exports.default = Eiyuu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWl5dXUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY2xhc3MvRWl5dXUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQ0FBK0I7QUFFL0IsMENBQWtEO0FBQ2xELDJEQUFtQztBQUNuQyxtREFBd0I7QUFFeEIsTUFBcUIsS0FBSztJQUNoQixXQUFXLENBQVM7SUFDcEIsV0FBVyxDQUFTO0lBQ3BCLFdBQVcsQ0FBUztJQUNwQixXQUFXLENBQVM7SUFDcEIsWUFBWSxDQUFTO0lBQ3JCLFNBQVMsQ0FBUztJQUNsQixZQUFZLENBQVM7SUFDckIsWUFBWSxDQUFTO0lBQ3JCLE9BQU8sQ0FBUztJQUNoQixTQUFTLENBQVM7SUFDbEIsVUFBVSxDQUFTO0lBRW5CLGNBQWMsQ0FBUztJQUN2QixTQUFTLENBQVE7SUFDakIsY0FBYyxDQUFTO0lBQ3ZCLDJCQUEyQixDQUFTO0lBQ3BDLGVBQWUsQ0FBVTtJQUN6QixlQUFlLENBQTJCO0lBRWxEOzs7OztNQUtFO0lBQ0YsWUFBbUIsU0FBa0IsRUFBRSxlQUF5QixFQUFFLGVBQXlDO1FBQ3pHLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxJQUFJLGtCQUFRLENBQUMsU0FBUyxDQUFDO1FBQ2pELElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxJQUFJLGtCQUFRLENBQUMsZUFBZSxDQUFDO1FBQ25FLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcscUJBQXFCLENBQUM7UUFDNUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxrQ0FBa0MsQ0FBQztRQUN6RCxJQUFJLENBQUMsMkJBQTJCLEdBQUcscUJBQXFCLENBQUM7UUFFekQsSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFDLENBQUMsUUFBUSxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsY0FBQyxDQUFDLFFBQVEsQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLGNB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