import { getHeroebyId } from "./Base/08-exp";
// const promesa = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         const heroe = getHeroebyId(8);
//         //console.log(heroe);

//         resolve(heroe);
//         //reject("No se ha encontrado el heroe");
//     }, 5000);
// });

// promesa.then((heroe)=>{
//     console.log("heroe")
// }).catch( err => console.warn(err))

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroebyId(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("No se encontró el heroe");
      }
    }, 5000);
  });
};

getHeroeByIdAsync(1)
  .then(console.log)
  .catch(console.warn);

// console.log(`${1+1}`)
// const getUsuario =(username)=>({
//     uid: 'ABC123',
//     username: username
// });

// import { heroes } from "./Data/heroes";

// const user2 = getUsuario('Luis');
// console.log(user2);

// const alv=(valor)=>{
//     return [valor,()=>{console.log("Hola mundo")}];
// }

// //const arr = useState("Luis");
// const [nombre,setNombre] = alv("Luis");
// console.log(nombre)
// setNombre()

//import { heroes } from "./Data/heroes"
//import {heroes} from './Data/heroes'

// const getHeroebyId = (id) => heroes.find((heroe) => heroe.id == id);
// //return heroes.find(e => e.id==id);

// console.log(getHeroebyId(1));
// const getHeroesbyOwner = (owner)=>heroes.filter((heroe)=>heroe.owner == owner);
// console.log(getHeroesbyOwner('Marvel'));
