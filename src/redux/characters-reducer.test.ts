import {CharactersListDomainType, getCharacters, charactersReducer, searchCharacters} from "./characters-reducer";

let startState: Array<CharactersListDomainType> = []

beforeEach(() => {
    startState = [
        {
            "char_id":1,
            "name":"Walter White",
            "birthday":"09-07-1958",
            "occupation":["High School Chemistry Teacher","Meth King Pin"],
            "img":"https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
            "status":"Presumed dead","nickname":"Heisenberg","appearance":[1,2,3,4,5],"portrayed":"Bryan Cranston",
            "category":"Breaking Bad",
            "better_call_saul_appearance":[1,2,3,4],
            favoriteList: false
        },
        {
            "char_id":2,
            "name":"Jesse Pinkman",
            "birthday":"09-24-1984",
            "occupation":["Meth Dealer"],
            "img":"https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441",
            "status":"Alive",
            "nickname":"Cap n' Cook",
            "appearance":[1,2,3,4,5],
            "portrayed":"Aaron Paul",
            "category":"Breaking Bad",
            "better_call_saul_appearance":[1,2,3,4],
            favoriteList: false
        },
        {
            "char_id":3,
            "name":"Skyler White",
            "birthday":"08-11-1970",
            "occupation":["House wife","Book Keeper","Car Wash Manager","Taxi Dispatcher"],
            "img":"https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg",
            "status":"Alive",
            "nickname":"Sky",
            "appearance":[1,2,3,4,5],
            "portrayed":"Anna Gunn",
            "category":"Breaking Bad",
            "better_call_saul_appearance":[2,3,4],
            favoriteList: false
        }
    ]
})

test('Characters should be fetch', () => {

    const action = getCharacters(startState)

    const endState = charactersReducer([], action)

    expect(endState.length).toBe(3)
})

test('Characters should be search', () => {

    const action = searchCharacters("Pinkman")

    const endState = charactersReducer(startState, action)

    expect(endState.length).toBe(1)
})