import BookmarkIcon from "@material-ui/icons/Bookmark";
import React, {ChangeEvent, useCallback} from "react";
import {CharactersListDomainType} from "./redux/characters-reducer";
import './App.css';
import {Checkbox, FormControlLabel} from "@material-ui/core";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

type PropsType = {
    characters: CharactersListDomainType,
    changeCharacterFavorite: (id: number, favoriteList: boolean) => void
}

export const Character = React.memo(function (props: PropsType) {

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked
        props.changeCharacterFavorite(props.characters.char_id, newIsDoneValue)
    }, [props]);


    return (
        <div className='container'>
            <div className='body'>
                <div className='left_side'>
                    <img src={props.characters.img} alt=""/>
                    <div>{props.characters.name}</div>
                    <div>{props.characters.portrayed}</div>
                </div>
                <div className='right_side'>
                    <div>{props.characters.birthday}</div>
                    <FormControlLabel
                        control={<Checkbox icon={<BookmarkBorderIcon color={'primary'}/>}
                                           checkedIcon={<BookmarkIcon color={'secondary'}/>}
                                           name="checkedH"
                                           onChange={onChangeHandler}
                        />}
                        label=""
                        checked={props.characters.favoriteList}
                    />
                </div>
            </div>
        </div>
    )
})

