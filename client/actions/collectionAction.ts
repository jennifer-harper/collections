//Actions

import type { ThunkAction } from '../store' // For TS type
import {CollectionData} from '../../models/Collections'
import { fetchCollections, makeNewAPI, delCollectionAPI, updateCollectionAPI} from '../apis/collections'


export const REQUEST_COLLECTION = 'ADD_COLLECTION'
export const RECEIVE_COLLECTION = 'RECEIVE_COLLECTION'
export const ADD_NEW_COLLECTION = 'ADD_NEW_COLLECTION'
export const DEL_COLLECTION ='DEL_COLLECTION'
export const UPDATE_COLLECTION = 'UPDATE_COLLECTION'

export type CollectionsActions =
  |{ type: typeof REQUEST_COLLECTION, payload: null }
  |{ type: typeof RECEIVE_COLLECTION, payload: CollectionData[]}
  |{ type: typeof ADD_NEW_COLLECTION, payload: CollectionData}
  |{type: typeof DEL_COLLECTION, payload: number}
  |{ type: typeof UPDATE_COLLECTION, payload: CollectionData}

// ACTION CREATORS
export function getAllCollections(): CollectionsActions { 
  return {
    type: REQUEST_COLLECTION,
    payload:  null    
  }
}

// receive an array of objects
export function receiveAllCollections(collection: CollectionData[]): CollectionsActions{
  return {
    type: RECEIVE_COLLECTION,
    payload:collection
  }
}

//giving one object, not an array
export function addNewCollections(collection: CollectionData): CollectionsActions{
  return {
    type: ADD_NEW_COLLECTION,
    payload:collection
  }
}

export function updateCollectionsACT(collection: CollectionData): CollectionsActions{
  return {
    type: UPDATE_COLLECTION,
    payload:collection
  }
}

export const delCollectionACT = (id: number) => ({
  type: DEL_COLLECTION,
  payload: id,
});




//////////////////////////////////////////
export function fetchAllCollections(): ThunkAction{
  return(dispatch) => {
    //this is defined on this page
    // dispatch(getAllCollections())

     //fetch from is api client
    return fetchCollections()
      .then((anything) => {
        //this is defined on this page
        dispatch(receiveAllCollections(anything))
      })
      .catch((err) => {
        return err.message
      })
  }
}

export function delCollections(id: number): ThunkAction{
  // console.log('hi there')
  return(dispatch) => {
     //fetch from is api client
    return delCollectionAPI(id)
      .then(() => {
        //function on this page
        // console.log('Item deleted successfully!');
        dispatch(delCollectionACT(id))
      })
      .catch((err) => {
        // console.log('Error deleting item:', err);
        return err.message
      })
  }
}



export function addNewAction(item: CollectionData): ThunkAction {
  return (dispatch) => {
    //fetch from is api client
    return makeNewAPI(item)
    .then((anything) => {
      //this is defined on this page
      // dispatch(addNewCollections(anything[0]))
      dispatch(addNewCollections(anything))
    })

    .catch((err) => {
      return err.message
    })
  }
}

export function updateCollectionAction(id: number, item: CollectionData): ThunkAction {
  return (dispatch) => {
    //fetch from is api client
    return updateCollectionAPI(id, item)
    .then((anything) => {
      // console.log('anything', anything[0]);
      // const collection = anything[0]
      //this is defined on this page
      dispatch(updateCollectionsACT(anything))
    })

    .catch((err) => {
      return err.message
    })
  }
}







