import axios,{AxiosResponse} from 'axios';
import { CharacterType } from '../models/character.interface';
import { RandomType } from '../models/random.interface';

const instance = axios.create({
    baseURL:"https://last-airbender-api.herokuapp.com/api/v1/",
})


const responseBody =(response:AxiosResponse) => response.data;

const requests = {
    get: (url: string) => instance.get(url).then(responseBody)
}

export const Character = {
    getCharacter: () : Promise<CharacterType[]> => requests.get('characters'),
    getAvatar:():Promise<any> => requests.get('characters/avatar'),
    getRandomCharacter:(count:number):Promise<RandomType[]> => requests.get(`characters/random?count=${count}`),
    getSingleCharacter:(_id:string | string[]):Promise<RandomType> => requests.get(`characters/${_id}`),
}