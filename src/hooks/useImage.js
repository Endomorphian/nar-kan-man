import { useState, useEffect } from 'react'
import { projectStorage } from '../firebase/config';
import "firebase/storage";

export const useImage = ( img ) => {

  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    const func = async () => {
      try {
        var storageRef = projectStorage.ref()
        var spaceRef = storageRef.child(img)

        await spaceRef.getDownloadURL().then((location) =>{
        setUrl(location)
        setLoading(false)
      })
      } catch(err) {
        setError(err.message)
        console.log(err.message)
      }
      
    }
  
    func()
  }, [img])

  return (
    { url, loading, error }
  )
}
