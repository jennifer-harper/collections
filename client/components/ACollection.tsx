import {CollectionData}  from '../../models/Collections'
import { delCollections, updateCollectionAction } from '../actions/collectionAction'
import {useAppDispatch } from '../hooks/redux'
import { ChangeEvent, FormEvent, useState, useEffect } from 'react'

interface Props {
  note: CollectionData
}



function ACollection({ note }: Props) {

  const dispatch = useAppDispatch()
  const id = note.id
  const [formData, setNewCollection] = useState(note)

  const handleDel = (id:number) => {
    dispatch(delCollections(id))
  }


  useEffect(() => {
    // Update the local state with the new note prop whenever it changes
    setNewCollection(note);
  }, [note]);
 
/////////////////////////


 
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewCollection({
      ...formData,
      [e.target.id]: e.target.value,    
    })
  }

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewCollection({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }



  const handleSubmit = (e: FormEvent) => {
    console.log('handleSubmit is called');
    e.preventDefault()
    dispatch(updateCollectionAction(id, formData))
  }

////////////////////////////////////

  return (
    <div>

      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <p>Category: {note.category}</p>
      
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
              <button>Submit Changes</button>
          </form>

      <button className="del_button" onClick={() => handleDel(note.id)}>Delete</button>
    </div>
  )
}

export default ACollection