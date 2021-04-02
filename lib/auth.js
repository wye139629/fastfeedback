import firebase from './firebase'
import React, {useState, useEffect, useContext, createContext} from 'react';
import { createUser } from './db'

const authContext = createContext();

export function ProvideAuth({children}) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const handlerUser = (rawUserData) =>{
      if(rawUserData){
          const user = formatUser(rawUserData)
          createUser(user.uid, user)
          setUser(user)
          return user
      }else{
          setUser(null)
          return null
      }
    }

    const gitHubSignin = () => {
        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GithubAuthProvider())
            .then((response) => {
                setUser(response.user);
                return response.user;
            });
    };

    const signout = () => {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                setUser(false);
            });
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            handlerUser(user)
        });

        return () => unsubscribe();
    }, []);

    return {
        user,
        gitHubSignin,
        signout,
    };
}
const formatUser = (user) => {
    return {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        provider: user.providerData[0].providerId,
        photoUrl: user.photoURL
    }
}

const getFromQueryString = (key) => {
    return queryString.parse(window.location.search)[key];
};
