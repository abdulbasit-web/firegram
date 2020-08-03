import React, {useState} from 'react'
import ProgressBar from './ProgressBar'

function UploadForm() {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  const types = ['image/jpeg', 'image/png']

  function handleChange(e) {
    let selected = e.target.files[0]
    //only update the state when we have files selcted
    //check if we have files and valid  types
    if (selected && types.includes(selected.type)) {
      setFile(e.target.files[0])
      setError(null)
    } else {
      setFile(null)
      setError('Please select an image file (png or jpeg)')
    }
  }

  return (
    <div>
      <form action=''>
        <label>
          <input type='file' onChange={handleChange} />
          <span>+</span>
        </label>
        <div className='output'>
          {error && <div className='error'>{error}</div>}
          {file && <div className=''>{file.name}</div>}
          {/* we send setFile function <ProgressBa/> becouse we to remeve the pregress bar by setting the file to null  */}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
    </div>
  )
}

export default UploadForm
