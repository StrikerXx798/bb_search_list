import {Button, ButtonGroup} from "@material-ui/core";
import React from "react";


export const Pages = () => {
    return (
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
            <Button>Результаты поиска</Button>
            <Button>Закладки</Button>
        </ButtonGroup>
    )
}