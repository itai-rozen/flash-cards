import axios from 'axios'

const axiosApi = axios.create({ baseURL: 'https://61c76a769031850017547419.mockapi.io/flashcards'})

export default class Api {
    static getCards = () => axiosApi.get()

    static postCard = (cardObj) => axiosApi.post('/', cardObj)

    static  deleteCard =  id => axiosApi.delete(`/${id}`)

    static updateCard = (id, cardObj) => axiosApi.put(`/${id}`, cardObj)
}