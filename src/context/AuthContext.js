import { useEffect, useState, createContext, useContext } from "react";
import   { db, auth } from '../firebase/firebase';

const formatAuthUser = (user) => ({
    uid: user.uid,
    email: user.email,
    displayName: user.displayName
  });

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState('');
    const [loading, setLoading] = useState(true);
    const [myLoadedName , setmyLoadedName] = useState('');
    //const [userId, setUserId] = useState('');

    const authStateChanged = async (authState) => {
        if (!authState) {
            setCurrentUser(null);
            setLoading(false);
            return;
            }
        setLoading(true)
        var formattedUser = formatAuthUser(authState);
        setCurrentUser(formattedUser);    
        setLoading(false);
      };

    const signUp = async (email, password) => {
        const user = await auth.createUserWithEmailAndPassword(email, password);
        const uuid = user.user.uid;
        console.log('uudi#### ' + uuid);
        return uuid;
    }

    const signIn = (email, password) => {        
        const user = auth.signInWithEmailAndPassword(email, password);
        //const uuid = user.user.uid;
        //console.log('uudi#### ' + uuid);
               return user;
    }

    const signOut = () => {
        setCurrentUser(null);
        return auth.signOut();
        
    }
    
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(authStateChanged)
        return unsubscribe;
    },[]);

    useEffect(()=> {
        db.collection('usersCollection').doc(currentUser.uid).get().then(doc => {
        //console.log('$$$$$$$ ' + doc.data());
        const newData = doc.data();
        //setAuthUser(newData.first_name);
        console.log('##### ' + JSON.stringify(newData));            
        console.log('##### ' + newData.first_name);
        setmyLoadedName(newData.first_name);
        setLoading(false);
        });
    },[]);
  
const value = {        
        currentUser,
        /*myLoadedName,*/
        signIn,
        signUp,
        signOut,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}







