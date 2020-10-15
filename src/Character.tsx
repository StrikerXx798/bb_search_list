import BookmarkIcon from "@material-ui/icons/Bookmark";
import React from "react";
import {CharactersListDomainType} from "./redux/characters-reducer";
import './App.css';
import {Checkbox, FormControlLabel} from "@material-ui/core";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

type PropsType = {
    characters: CharactersListDomainType
}

export const Character = React.memo(function (props: PropsType) {

    return (
        <div className='container'>
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
                                       name="checkedH"/>}
                    label=""
                    checked={props.characters.favoriteList}
                />

            </div>
        </div>
    )
})

