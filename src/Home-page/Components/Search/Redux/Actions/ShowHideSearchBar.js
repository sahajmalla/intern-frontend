import { HIDE_SEARCH_BAR, SHOW_SEARCH_BAR } from "../../../../../root-redux/actions/type";

export function showSearchBar() {
    return {
        type: SHOW_SEARCH_BAR,
    }
}

export function hideSearchBar() {
    return {
        type: HIDE_SEARCH_BAR,
    }
}