import {useState, useEffect} from 'react'
import {storage, db} from '../firebase'
import firebase from 'firebase'

function useStorage(file) {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    //get a reffrece for where the file should save in firebase
    const storageRef = storage.ref(file.name)

    storageRef.put(file).on(
      'state_changed',
      snapshot => {
        const percentage = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        setProgress(percentage)
      },
      err => {
        setError(err)
      },
      //this function fire when the upload fully complete
      async () => {
        const url = await storageRef.getDownloadURL()
        db.collection('images').add({
          url,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setUrl(url)
      }
    )
  }, [file])

  return {url, progress, error}
}

export default useStorage
