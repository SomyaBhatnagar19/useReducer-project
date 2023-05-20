//it is not a component

import React from "react";

//creates a context object
//takes a state it can be string, object etc
//here we take an object that takes the log in state
const AuthContext = React.createContext({
    isLoggedIn: false
});

export default AuthContext;