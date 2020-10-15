import {BreakingBadAPI, CharactersType} from "../api/bb_api";
import {Dispatch} from "redux";


const initialState: Array<CharactersListDomainType> = []

export const charactersReducer = (state: Array<CharactersListDomainType> = initialState, action: ActionsType): Array<CharactersListDomainType> => {
    switch (action.type) {
        case 'GET-CHARACTERS-LIST':
            return action.characters.map(ch => ({...ch, favoriteList: false}))
        case 'SEARCH-CHARACTERS':
            return [...state].filter(fch => fch.name.includes(action.name))
        case 'CHANGE-CHARACTERS-FAVORITE':
            return [...state].map(fl => fl.char_id === action.id ? action.favoriteList: {fl.favoriteList})
        default:
            return state
    }
}

// Types

export const getCharacters = (characters: Array<CharactersType>) => ({type: 'GET-CHARACTERS-LIST', characters} as const)
export const searchCharacters = (name: string) => ({type: 'SEARCH-CHARACTERS', name} as const)
export const changeCharactersFavorite = (id: number, favoriteList: boolean) => ({type: 'CHANGE-CHARACTERS-FAVORITE', favoriteList, id} as const)

type GetCharactersActionType = ReturnType<typeof getCharacters>
type SearchCharactersActionType = ReturnType<typeof searchCharacters>
type ChangeCharactersFavoriteActionType = ReturnType<typeof changeCharactersFavorite>

type ActionsType = GetCharactersActionType | SearchCharactersActionType | ChangeCharactersFavoriteActionType

export type CharactersListDomainType = CharactersType & {
    favoriteList: boolean
}

// Thunk

export const fetchCharactersList = () => {
    return (dispatch: ThunkDispatch) => {
        BreakingBadAPI.getCharactersList()
            .then((res) => {
            dispatch(getCharacters(res.data))
        })
    }
}

type ThunkDispatch = Dispatch<ActionsType | GetCharactersActionType>