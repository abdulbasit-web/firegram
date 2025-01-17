import React from 'react'
import useFirestore from '../hooks/useFirestore'
import {motion} from 'framer-motion'

function ImageGrid({setSelectedImg}) {
  const {docs} = useFirestore('images')

  return (
    <div className='imageGrid'>
      {docs &&
        docs.map(doc => (
          <motion.div
            layout
            whileHover={{opacity: 1}}
            className='imageGrid__imageWrap'
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt=''
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 1}}
            />
          </motion.div>
        ))}
    </div>
  )
}

export default ImageGrid
