import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://www.breakingbadapi.com/api/',
})

// api
export const BreakingBadAPI = {
    getCharactersList() {
        const promise = instance.get<CharactersType[]>('characters');
        return promise;
    },
}


// types

export type CharactersType = {
    char_id: number,
    name: string,
    birthday: string,
    occupation: Array<string>,
    img: string,
    status: string,
    nickname: string,
    appearance: Array<number>,
    portrayed: string,
    category: Array<string> | string,
    better_call_saul_appearance: Array<number>
}