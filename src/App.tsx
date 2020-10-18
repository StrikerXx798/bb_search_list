import React, {useEffect} from 'react';
import './App.css';
import {SearchBar} from "./SearchBar";
import {Pages} from "./Pages";
import {CharactersList} from "./CharactersList";
import {useDispatch} from "react-redux";
import {fetchCharactersList} from "./redux/characters-reducer";
import { Route } from 'react-router-dom';


const App = React.memo( function () {
    const dispatch = useDispatch()

    useEffect(() => {
        const thunk = fetchCharactersList()
        dispatch(thunk)
    }, [dispatch])

    return (
        <div className="App">
            <SearchBar/>
            <Pages/>
            <Route path='/' render={() => <CharactersList/>}/>
        </div>
    );
})

export default App;
