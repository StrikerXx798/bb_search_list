import React, {ChangeEvent, useState} from 'react';
import {Button, TextField} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

type PropsType = {
    searchCharacters: (name: string) => void
}

export const SearchBar = React.memo(function (props:PropsType) {

    return (
        <div>
            <SearchIcon/>
            <TextField id="standard-basic" label="Поиск..."/>
            <Button variant="contained" color="primary">
                Найти
            </Button>
        </div>
    );
})