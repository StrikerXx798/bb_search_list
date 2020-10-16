import React, {useCallback, useEffect} from "react";
import {Character} from "./Character";
import {useDispatch, useSelector} from "react-redux";
import {changeCharactersFavorite, CharactersListDomainType, fetchCharactersList} from "./redux/characters-reducer";
import {AppRootStateType} from "./redux/store";
import {Grid, Paper} from "@material-ui/core";
import './App.css';


export const CharactersList = React.memo(function () {
    const characters = useSelector<AppRootStateType, Array<CharactersListDomainType>>(state => state.characters)

    const dispatch = useDispatch()

    useEffect(() => {
        const thunk = fetchCharactersList()
        dispatch(thunk)
    }, [dispatch])

    const changeCharacterFavorite = useCallback(function (id: number, favoriteList: boolean) {
        const action = changeCharactersFavorite(id, favoriteList)
        dispatch(action)
    }, [dispatch])

    return (
        <div className='container'>
            {
                characters.map(ch => {
                    return <Grid key={ch.char_id}>
                        <Paper elevation={3} style={{margin: '10px'}}>
                            <Character
                                characters={ch}
                                changeCharacterFavorite={changeCharacterFavorite}
                            />
                        </Paper>
                    </Grid>
                })
            }
        </div>
    )
})