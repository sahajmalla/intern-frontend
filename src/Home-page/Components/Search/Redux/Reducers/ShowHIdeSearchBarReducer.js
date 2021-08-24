import { HIDE_SEARCH_BAR, SHOW_SEARCH_BAR } from "../../../../../root-redux/actions/type"

const initialState = {
    showSearchBar: false
}

const ShowHideSearchBarState = (state = initialState, actions) => {

    switch (actions.type) {
        case SHOW_SEARCH_BAR: return { showSearchBar: true };
        case HIDE_SEARCH_BAR: return { showSearchBar: false };
        default : return state
    }
}

export default ShowHideSearchBarState