import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut,onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../pages/Login/Login/Firebase/firebase.init";

initializeAuthentication();
const useFrirebase = () => {
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)
    const [authError,setAuthError] = useState('')

    const auth = getAuth();


    const registerUser = (email, password) => {
      setLoading(true)
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      setAuthError('')
    })
    .catch((error) => {   
      setAuthError(error.message)
    })
      .finally(() => setLoading(false)) 
    }
    const loginUser = (email,password,location,history) => {
      setLoading(true)
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => { 
        const destination = location?.state?.from || '/'
        history.replace(destination)
        setAuthError('')
      })
      .catch((error) => {
        setAuthError(error.message)
      });
    }
    useEffect( () => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } else {
          setUser({})
        }
        setLoading(false)
      });
      return () => unsubscribe;
    } ,[])
    const logout = () => {
      setLoading(true)
      signOut(auth).then(() => {
        
      }).catch((error) => {
        
      })
      .finally(()=> setLoading(false))
    }
    return{
      user,
      registerUser,
      logout,
      loading,
      authError,
      loginUser,
    }
}
export default useFrirebase;