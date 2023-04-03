import { RECEIVE_COLLECTION , DEL_COLLECTION, ADD_NEW_COLLECTION, UPDATE_COLLECTION, CollectionsActions } from '../actions/collectionAction'
import {CollectionData} from '../../models/Collections'

//array of objects, collectionData is an object
const initialState = [] as CollectionData[]
// const initialState: CollectionData[] = [];



function theReducer( state = initialState, action:CollectionsActions) : CollectionData[] {
    const { type, payload } = action

    switch (type) {
      case RECEIVE_COLLECTION:
        return payload;

      case ADD_NEW_COLLECTION:
        // return [...state, payload]
        return state.concat(payload);

    case UPDATE_COLLECTION:
      console.log('state before update:', state);
      console.log('payload:', payload);
      

      return state.map((collection) => (collection.id === payload.id ? payload : collection))


      // return state.map(collection => {
      //   if (collection.id === payload.id) {
      //     console.log(collection.id);
      //     return {
      //       ...collection,
      //       title: payload.title,
      //       content: payload.content,
      //       category: payload.category
      //     };
      //   } else {
      //     return collection;
      //   }

      // })


      case DEL_COLLECTION:
        return state.filter((collections) => collections.id !== payload);

      default:
        return state;
    }
}


export default  theReducer
