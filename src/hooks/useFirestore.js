import React, {useState, useEffect} from 'react'
import {db} from '../firebase'

function useFirestore(collection) {
  const [docs, setDocs] = useState([])

  useEffect(() => {
    const unsubscribe = db
      .collection(collection)
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setDocs(
          snapshot.docs.map(doc => {
            const obj = doc.data()
            return {...obj, id: doc.id}
          })
        )
      })

    return () => unsubscribe()
  }, [collection])

  return {docs}
}

export default useFirestore
