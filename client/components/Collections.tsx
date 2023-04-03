import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { fetchAllCollections, addNewAction } from '../actions/collectionAction'
import { useEffect, useState, ChangeEvent, FormEvent } from 'react'
import ACollection from './ACollection'
import {CollectionData} from '../../models/Collections'

function Collections() {

  const dispatch = useAppDispatch()

  //look in reducers index.ts
  const collections = useAppSelector((state) => state.something) 


  const [formData, setNewCollection] = useState({} as CollectionData)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewCollection({
      ...formData,
      [e.target.id]: e.target.value,
    
    })
    console.log(formData)
  }

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewCollection({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(addNewAction(formData))
  }

  useEffect(() => {
    dispatch(fetchAllCollections())
  },[dispatch])  
  

  return (
    <>
      <div className="note-wrapper">   
        {collections.map((note, i) => (
          <ACollection key={i} note={note} />
        ))}
      </div>

      <div className="form-wrapper gallery">
        <div>
          <h1>My Collection</h1>
          <h2>Add a new note</h2>
          <form onSubmit={handleSubmit}>                
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />

                <label htmlFor="content">Content</label>
                <textarea
                  rows={5}
                  id="content"
                  value={formData.content}
                  onChange={handleTextareaChange}
                  required
                />

                <label htmlFor="category">Category</label>
                <input
                type="text"
                id="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              />
              <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Collections



