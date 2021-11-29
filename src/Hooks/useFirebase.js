import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut,onAuthStateChanged,updateProfile  } from "firebase/auth";
import initializeAuthentication from "../pages/Login/Login/Firebase/firebase.init";

initializeAuthentication();
const useFrirebase = () => {
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)
    const [authError,setAuthError] = useState('')

    const auth = getAuth();


    const registerUser = (email, password,name,history) => {
      setLoading(true)
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      setAuthError('')
      const newUser = {email, displayName: name}
      saveUser(email,name)
      setUser(newUser)
      updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
      history.replace('/')
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
    } ,[auth])
    const logout = () => {
      setLoading(true)
      signOut(auth).then(() => {
        
      }).catch((error) => {
        
      })
      .finally(()=> setLoading(false))
    }

    const saveUser = (email,displayName) => {
      const user = {email, displayName}
      fetch('https://fierce-brushlands-25826.herokuapp.com/users', {
        method:"POST",
        headers: {
          'content-type':'application/json'
        },
        body: JSON.stringify(user)
      })
      .then()
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