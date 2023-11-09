import { HttpsProxyAgent } from "https-proxy-agent";
export default class Eiyuu {
    private gelbooruURL;
    private danbooruURL;
    private hypnohubURL;
    private konachanURL;
    private lolibooruURL;
    private rule34URL;
    private realbooruURL;
    private safebooruURL;
    private tbibURL;
    private xbooruURL;
    private yandereURL;
    private searchElements;
    private useragent;
    private searchSortings;
    private searchSortingsMoebooruBased;
    private followRedirects;
    private httpsProxyAgent?;
    /**
     * Eiyuu
     * @param useragent custom useragent
     * @param followRedirects enable HTTP redirect following
     * @param httpsProxyAgent custom https proxy agent
    */
    constructor(useragent?: string, followRedirects?: boolean, httpsProxyAgent?: HttpsProxyAgent<string>);
    /**
     * Search arbitrary query on danbooru.
     * @param query The query to search.
     * @example
     * ```js
     * search.danbooru("amber").then(res => { console.log(res); });
     * ```
     * https://danbooru.donmai.us/tags?commit=Search&search%5Bhide_empty%5D=yes&search%5Bname_or_alias_matches%5D=
     */
    danbooru(query: string): Promise<string[]>;
    /**
     * Search arbitrary query on gelbooru.
     * @param query The query to search.
     * @example
     * ```js
     * search.gelbooru("amber").then(res => { console.log(res); });
     * ```
     * https://gelbooru.com/index.php?page=tags&s=list&tags=
     */
    gelbooru(query: string): Promise<string[]>;
    /**
     * Search arbitrary query on hypnohub.
     * @param query The query to search.
     * @example
     * ```js
     * search.hypnohub("erza").then(res => { console.log(res); });
     * ```
     * https://hypnohub.net/index.php?page=tags&s=list&tags=
     */
    hypnohub(query: string): Promise<string[]>;
    /**
     * Search arbitrary query on konachan.
     * @param query The query to search.
     * @example
     * ```js
     * search.konachan("amber").then(res => { console.log(res); });
     * ```
     * https://konachan.com/tag?name=
     */
    konachan(query: string): Promise<string[]>;
    /**
     * Search arbitrary query on lolibooru.
     * @param query The query to search.
     * @example
     * ```js
     * search.lolibooru("kanna").then(res => { console.log(res); });
     * ```
     * https://lolibooru.moe/tag?name=
     */
    lolibooru(query: string): Promise<string[]>;
    /**
     * Search arbitrary query on rule34.
     * @param query The query to search.
     * @example
     * ```js
     * search.rule34("lisa").then(res => { console.log(res); });
     * ```
     * https://rule34.xxx/index.php?page=tags&s=list&tags=
     */
    rule34(query: string): Promise<string[]>;
    /**
     * Search arbitrary query on realbooru.
     * @param query The query to search.
     * @example
     * ```js
     * search.realbooru("anri").then(res => { console.log(res); });
     * ```
     * https://realbooru.com/index.php?page=tags&s=list&tags=
     */
    realbooru(query: string): Promise<string[]>;
    /**
     * Search arbitrary query on safebooru.
     * @param query The query to search.
     * @example
     * ```js
     * search.safebooru("scathach").then(res => { console.log(res); });
     * ```
     * https://safebooru.org/index.php?page=tags&s=list&tags=
     */
    safebooru(query: string): Promise<string[]>;
    /**
     * Search arbitrary query on tbib.
     * @param query The query to search.
     * @example
     * ```js
     * search.tbib("erza").then(res => { console.log(res); });
     * ```
     * https://tbib.org/index.php?page=tags&s=list&tags=
     */
    tbib(query: string): Promise<string[]>;
    /**
     * Search arbitrary query on xbooru.
     * @param query The query to search.
     * @example
     * ```js
     * search.xbooru("amber").then(res => { console.log(res); });
     * ```
     * https://xbooru.com/index.php?page=tags&s=list&tags=
     */
    xbooru(query: string): Promise<string[]>;
    /**
     * Search arbitrary query on yandere.
     * @param query The query to search.
     * @example
     * ```js
     * search.yandere("eula").then(res => { console.log(res); });
     * ```
     * https://yande.re/tag?name=
     */
    yandere(query: string): Promise<string[]>;
}
