import { useState, useEffect } from 'react'
import { projectAuth, projectStorage, projectFirestore } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const signup = async (email, password, displayName, thumbnail) => {
    setError(null)
    setIsPending(true)
  
    try {
      // signup
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)

      if (!res) {
        throw new Error('Could not complete signup')
      }

      // upload user thumbnail
      const uploadPath =  `thumbnails/${res.user.uid}/${thumbnail.name}` // set image path
      const img = await projectStorage.ref(uploadPath).put(thumbnail) // upload image
      const imgUrl = await img.ref.getDownloadURL() // get the image url

      // add display name to user
      await res.user.updateProfile({ displayName, photoURL: imgUrl })

      // create user document
      await projectFirestore.collection('users').doc(res.user.uid).set({
        online: true, 
        displayName, 
        photoURL: imgUrl,
        age: "?",
        weight: "??",
        gender: "???",
        collections: { test1: true, test2: false},
        id: res.user.uid
      })

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
    } 
    catch(err) {
      if (!isCancelled) {
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { signup, error, isPending }
}