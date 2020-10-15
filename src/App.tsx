import React, {useCallback} from 'react';
import './App.css';
import {SearchBar} from "./SearchBar";
import {Pages} from "./Pages";
import {CharactersList} from "./CharactersList";
import {useDispatch} from "react-redux";


const App = React.memo( function () {
    const dispatch = useDispatch()

    const searchCharacters = useCallback(function (name: string) {
        const action = searchCharacters(name)
        dispatch(action)
    }, [dispatch])


    return (
        <div className="App">
            <SearchBar
                searchCharacters={searchCharacters}
            />
            <Pages/>
            <CharactersList/>
        </div>
    );
})

export default App;
