const reducer = (state, action) => {
    switch (action.type) {
        case "GET_NEWS":
            return {
                ...state,
                hits: action.toLoad.hits,
                nbPages: action.toLoad.nbPages,
                isLoading: false
            }
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "DELETE_NEWS":
            return {
                ...state,
                hits: state.hits.filter((elem) => {
                    return elem.objectID !== action.toLoad.id
                })
            }
        case "SEARCH_NEWS":
            return {
                ...state,
                query: action.toLoad,
                page:0
            }
        case "GO_PREV":
            let pageNum = state.page - 1
            if (pageNum <= 0) {
                pageNum = 0
            }
            return {
                ...state,
                page: pageNum
            }
        case "GO_NEXT":
            let pageNumInc = state.page + 1
            if (pageNumInc >= state.nbPages) {
                pageNumInc = 0
            }
            return {
                ...state,
                page: pageNumInc
            }


        default:
            return state;
    }

}

export default reducer;