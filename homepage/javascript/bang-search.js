import { bangs } from "./bang-array.js";
const SEARCH_PARAM = "q";
const BANG_PATTERN = /!(\S+)/i;
const BANG_CLEANUP_PATTERN = /!\S+\s*/i;
const DEFAULT_SEARCH = "g";
const defaultSearch = localStorage.getItem('defaultSearch') ?? DEFAULT_SEARCH;
/**
 * Processes a search query with optional bang syntax and returns a redirect URL
 * @returns The URL to redirect to, or null if invalid/empty query
 */
function bangRedirectURL() {
    try {
        const url = new URL(window.location.href);
        const query = url.searchParams.get(SEARCH_PARAM)?.trim() ?? "";
        if (!query) {
            console.warn("No search query provided");
            return null;
        }
        const match = query.match(BANG_PATTERN);
        const banger = match?.[1]?.toLowerCase();
        const searchBang = banger
            ? bangs.find((shortcut) => shortcut.shortcut === banger)
            : bangs.find((shortcut) => shortcut.shortcut === defaultSearch);
        if (!searchBang) {
            console.warn("No valid search bang found");
            return null;
        }
        const cleanQuery = query.replace(BANG_CLEANUP_PATTERN, "").trim();
        return searchBang.link.replace("{{{s}}}", encodeURIComponent(cleanQuery).replace(/%2F/g, "/"));
    }
    catch (error) {
        console.error("Error processing search:", error);
        return null;
    }
}
/**
 * Redirects the browser to the search URL if valid
 */
function redirectURL() {
    const searchURL = bangRedirectURL();
    if (!searchURL)
        return;
    window.location.replace(searchURL);
}
redirectURL();
