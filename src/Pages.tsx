import {Button, ButtonGroup} from "@material-ui/core";
import React, {useCallback} from "react";

type PropsType = {
    setFavoriteList: (favoriteList: boolean) => void
}

export const Pages = React.memo(function (props:PropsType) {

    const onFavoriteClickHandler = useCallback(() => props.setFavoriteList(true), [])
    const onAllClickHandler = useCallback(() => props.setFavoriteList(true && false), [])


    return (
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
            <Button onClick={onAllClickHandler}>Результаты поиска</Button>
            <Button onClick={onFavoriteClickHandler}>Закладки</Button>
        </ButtonGroup>
    )
})