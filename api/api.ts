import axios,{AxiosResponse} from 'axios';
import { CharacterType } from '../models/character.interface'

const instance = axios.create({
    baseURL:"https://last-airbender-api.herokuapp.com/api/v1/",
    timeout:1500
})


const responseBody =(response:AxiosResponse) => response.data;

const requests = {
    get: (url: string) => instance.get(url).then(responseBody)
}

export const Character = {
    getCharacter: () : Promise<CharacterType[]> => requests.get('characters'),
}