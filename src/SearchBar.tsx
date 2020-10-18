import React, {useCallback, useState} from 'react';
import {Button, TextField} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import {useDispatch} from "react-redux";
import {searchCharacters} from "./redux/characters-reducer";

export const SearchBar = React.memo(function () {
    const dispatch = useDispatch()

    const [search, setSearch] = useState('')
    let [error, setError] = useState<string | null>(null)

    const searchCharacter = useCallback(function (name: string) {
        const action = searchCharacters(name)
        dispatch(action)
    }, [dispatch])

    let addItemHandler = () => {
        if (search.trim() !== "") {
            searchCharacter(search);
            setSearch("");
        } else {
            setError("Please say my name!!!");
        }
    }

    let changeHandler = (e:any)=> {
        setSearch(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: any) => {
        if (error !== null) {
            setError(null);
        }
        if (e.charCode === 13) {
            addItemHandler();
        }
    }

    return (
        <div>
            <SearchIcon/>
            <TextField onKeyPress={onKeyPressHandler} helperText={error} error={!!error} id="standard-basic" label="Поиск..." onChange={changeHandler} value={search}/>
            <Button variant="contained" color="primary" onClick={addItemHandler}>
                Найти
            </Button>
        </div>
    );
})