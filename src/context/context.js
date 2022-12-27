import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();
const API_URL = "http://hn.algolia.com/api/v1/search?"

const AppProvider = ({ children }) => {

    const initialState = {
        isLoading: true,
        hits: [],
        page: 0,
        nbPages: 0,
        query: 'css'
    }


    const [state, dispatch] = useReducer(reducer, initialState);


    async function getValue(url) {
        dispatch({
            type: "SET_LOADING",

        })
        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            dispatch({
                type: "GET_NEWS",
                toLoad: {
                    hits: data.hits,
                    nbPages: data.nbPages,

                }
            })

        } catch (error) {

            console.log(error)
        }
    }

    function removeNews(post_id) {
        dispatch({
            type: "DELETE_NEWS",
            toLoad: {
                id: post_id
            }
        })
    }
    function searchPost(search_query) {
        dispatch({
            type: "SEARCH_NEWS",
            toLoad: search_query
        })
    }
    function goPrev() {
        dispatch({
            type: "GO_PREV"
        })
    }
    function goNext() {
        dispatch({
            type: "GO_NEXT"
        })
    }

    useEffect(() => {

        getValue(`${API_URL}query=${state.query}&page=${state.page}`)
    }, [state.query, state.page])

    return <AppContext.Provider value={{ ...state, removeNews, searchPost, goPrev, goNext }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }