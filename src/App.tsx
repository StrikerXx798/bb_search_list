import React, {useCallback} from 'react';
import './App.css';
import {SearchBar} from "./SearchBar";
import {Pages} from "./Pages";
import {CharactersList} from "./CharactersList";
import {useDispatch} from "react-redux";
import {changeFavoriteFilter} from "./redux/characters-reducer";


const App = React.memo( function () {
    const dispatch = useDispatch()

    const searchCharacters = useCallback(function (name: string) {
        const action = searchCharacters(name)
        dispatch(action)
    }, [dispatch])

    const setFavoriteList = useCallback(function (favoriteList: boolean) {
        const action = changeFavoriteFilter(favoriteList)
        dispatch(action)
    }, [dispatch])

    return (
        <div className="App">
            <SearchBar
                searchCharacters={searchCharacters}
            />
            <Pages
                setFavoriteList={setFavoriteList}
            />
            <CharactersList/>
        </div>
    );
})

export default App;
