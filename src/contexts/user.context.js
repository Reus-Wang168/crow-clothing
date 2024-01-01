import {createContext,useState,useEffect} from 'react'

import  {createUserDocumentFromAuth,onAuthStateChangedListener} from '../utils/firebase/firebase.utils'
export const UserContext = createContext({
    setCurrentUser: ()=>null,
    currentUser:null,
})

export const UserProvider =({children})=>{

    const[currentUser,setCurrentUser] =useState(null)

    const value={currentUser,setCurrentUser}

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;


    useEffect(()=>{
        const  unSubcrible = onAuthStateChangedListener((user)=>{
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user)

        });

        return unSubcrible;
    },[]);



    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}