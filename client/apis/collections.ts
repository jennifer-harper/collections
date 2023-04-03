//API CLIENT//
import request from 'superagent'
import { CollectionData } from '../../models/Collections'
const collUrl = '/api/v1/collections'

export function fetchCollections() {
    return request
    .get(collUrl) // call internal api here
    .then((res) => {return res.body})
    .catch((err) => {return err.message})
}

// export function getANoteCS(id:number) {
//     return request
//     .get(`/api/v1/collections/${id}`) // call internal api here
//     .then((res) => {return res.body})
//     .catch((err) => {return err.message})
// }



export function delCollectionAPI(id:number){
    return request
    .delete(`/api/v1/collections/${id}`)
    .then((res) => {return res.body})
}


export function updateCollectionAPI(id:number, obj:CollectionData): Promise<CollectionData> {
    return request
      .patch(`/api/v1/collections/${id}`)
      .send(obj)
      .then((res) => {
        return res.body;
      })
  }


  export function makeNewAPI(newThing: CollectionData){
    return request
    .post(collUrl)
    .send(newThing)
    .then((res) => {return res.body})
}