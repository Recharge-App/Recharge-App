import React, {createContext, useState, useContext} from 'react';
import { Alert } from 'react-native';
import { storeStringData, storeObjectData, getStringData, getObjectData } from '../Components/Storage';

//https://levelup.gitconnected.com/react-native-authentication-flow-the-simplest-and-most-efficient-way-3aa13e80af61


type AuthContextData = {
    authData?: AuthData;
    loading: boolean;
    signIn(data: AuthData): Promise<void>;
    signOut(): void;
  };
      
type AuthData = {
  email: string;
  password: string;
  authenticated?: boolean;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [authData, setAuthData] = useState<AuthData>();
  
  //The loading part will be explained in the persist step session
  const [loading, setLoading] = useState(true);

  const signIn = async (data: AuthData) => {
    //call the service passing credential (email and password).
    //In a real App this data will be provided by the user from some InputText components.
    /*
    const _authData = {
        email: '2002mihir@gmail.com',
        password: 'mihirsahu'
    };
    */

	// TODO: Get password salt:hash from database, check it with password, and add authenticated key to authData

    //Set the data in the context, so the App can be notified
    //and send the user to the AuthStack
    setAuthData({
		"email": data.email,
		"password": data.password,
		"authenticated": data.email === "2002mihir@gmail.com" && data.password === "password",
	  });

    /*
    if (authData?.authenticated == false) {
      Alert.alert("Wrong username or password!");
    }
    */

    // TODO: Then store the cookie on the device with Async Storage
  };

  const signOut = async () => {
    //Remove data from context, so the App can be notified
    //and send the user to the AuthStack
    setAuthData(undefined);
  };

  return (
    //This component will be used to encapsulate the whole App,
    //so all components will have access to the Context
    <AuthContext.Provider value={{authData, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};


export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
  
    return context;
}
