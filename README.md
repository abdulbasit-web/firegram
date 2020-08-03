firegram
Starter & final course files for the FireGram tutorial (React, Firebase & Framer Motion) on Brad Traversy's YouTube channel.

Link to video - https://www.youtube.com/watch?v=vUe91uOx7R0&t=652s

main code

const [images, setImages] = useState([])
const [image, setImage] = useState(null)

useEffect(() => {
db.collection('images')
.orderBy('timestamp', 'desc')
.onSnapshot(snapshot => {
setImages(snapshot.docs.map(doc => doc.data()))
})
}, [])

function handleChange(e) {
if (e.target.files[0]) setImage(e.target.files[0])
}

function uploadImage() {
//add the image to firebase store
const uploadTask = storage.ref(`images/${image.name}`).put(image)

    uploadTask.on(
      'state_changed',
      snapshot => {
        //progress function ...
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      },
      error => {
        //error function ...
        console.log(error)
        alert(error.message)
      },
      () => {
        //complete function
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            db.collection('images').add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              url,
            })
          })
      }
    )

    setImage(null)

}

return (
<div className='App'>
<input type='file' onChange={handleChange} />
<button disabled={!image} onClick={uploadImage}>
Upload
</button>
<Title />
{images.map(image => (
<img
style={{width: '500px', height: 'auto', objectFit: 'contain'}}
src={image.url}
key={image.url}
alt=''
/>
))}
</div>
)
}

export default App
