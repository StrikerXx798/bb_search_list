import React, {useEffect} from "react";
import {Character} from "./Character";
import {useDispatch, useSelector} from "react-redux";
import {CharactersListDomainType, fetchCharactersList} from "./redux/characters-reducer";
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

    return (
        <div className='container'>
            {
                characters.map(ch => {
                    return <Grid key={ch.char_id}>
                        <Paper elevation={3} style={{margin: '10px'}}>
                            <Character
                                characters={ch}
                            />
                        </Paper>
                    </Grid>
                })
            }
        </div>
    )
})