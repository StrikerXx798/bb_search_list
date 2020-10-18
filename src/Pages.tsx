import {Button, ButtonGroup} from "@material-ui/core";
import React, {useCallback} from "react";
import { Redirect } from "react-router-dom";
import {changeFavoriteFilter} from "./redux/characters-reducer";
import {useDispatch} from "react-redux";


export const Pages = React.memo(function () {
    const dispatch = useDispatch()

    const setFavoriteList = useCallback(function (favoriteList: boolean) {
        const action = changeFavoriteFilter(favoriteList)
        dispatch(action)
    }, [dispatch])

    const onFavoriteClickHandler = useCallback(() => setFavoriteList(true), [setFavoriteList])
    const onAllClickHandler = useCallback(() => <Redirect to={"/"} />, [])


    return (
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
            <Button onClick={onAllClickHandler}>Результаты поиска</Button>
            <Button onClick={onFavoriteClickHandler}>Закладки</Button>
        </ButtonGroup>
    )
})