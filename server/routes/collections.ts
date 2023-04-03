//ROUTES//

import express from 'express'
//import all db functions - select, insert, patch, delete (crud)
import {getCollectionsBD, makeNewBD, delCollectionDB, updateCollectionBD} from '../db/connection'
const router = express.Router()


router.get('/', (req, res) => {
    getCollectionsBD()
      .then((data) => {
        res.json(data)
      })
      .catch((err) => {
        res.status(500).send(err.message)
      })
})

router.delete('/:id', (req,res) =>{
  delCollectionDB(+req.params.id)
  .then(() => {
    res.sendStatus(200)
  })
  .catch((err) => {
    res.status(500).send(err.message)
  })

})

router.patch('/:id', (req, res) => {
  const data = {
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
  }
  const id = Number(req.params.id)
  console.log(data, id)

  updateCollectionBD(id, data)
    .then((post) => {
      console.log('post', post[0])
    const xxx = post[0]
      res.json(xxx)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})


router.post('/', (req, res) => {
  makeNewBD(req.body)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

export default router