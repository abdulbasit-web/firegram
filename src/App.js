import React, {useState, useEffect} from 'react'
import firebase from 'firebase'
import Title from './components/Title'
import {db, storage} from './firebase'
import UploadForm from './components/UploadForm'
import ImageGrid from './components/ImageGrid'
import Modal from './components/Modal'

function App() {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className='App'>
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  )
}

export default App
