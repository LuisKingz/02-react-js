import {heroes} from '../Data/heroes'

export const getHeroebyId = (id) => heroes.find(heroe => heroe.id == id)
 
export const getHeroesbyOwner = (owner)=>heroes.filter((heroe)=>heroe.owner == owner);
