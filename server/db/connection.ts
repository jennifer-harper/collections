//DATABASE///
import knexFile from './knexfile'
import knex from 'knex'

import { CollectionData, UpdateData } from '../../models/Collections'

type Environment = 'production' | 'test' | 'development'

const environment = (process.env.NODE_ENV || 'development') as Environment
const config = knexFile[environment]
const connection = knex(config)


export function getCollectionsBD(db = connection): Promise<CollectionData[]> {
    return db('collections').select()
}



export function delCollectionDB(id: number, db = connection): Promise<number> {
    return db('collections').delete().where('id', id)
}


export function updateCollectionBD(
    id: number,
    data: UpdateData,
    db = connection
  ): Promise<UpdateData[]> {
    return db('collections')
      .where('id', id)
      .update(data)
      .returning(['id', 'title', 'content', 'category'])
  }

  export function makeNewBD (
    formData: CollectionData,
    db = connection
    ) : Promise<CollectionData> {
    return db('collections').insert(formData)
    .returning(['id', 'title', 'content', 'category'])
}


export default connection