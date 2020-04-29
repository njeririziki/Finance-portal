import React ,{useEffect,useState} from 'react';
import Firebase from './config'

const AuthContext = React.createContext();
 const  AuthProvider =({children}) => {
     const [user,setUser] = useState(null);

   useEffect(() => {
       Firebase.auth().onAuthStateChanged(setUser)
   },[]);
   
   return(
       <AuthContext.Provider value ={{user}}>
           {children}
       </AuthContext.Provider>
   )
 }

 export default AuthContext;
 export {AuthProvider};