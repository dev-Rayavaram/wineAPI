import React from 'react'
const NavContext = React.createContext(null);
const NavProvider = NavContext.Provider;
const NavConsumer= NavContext.Consumer;

export{NavProvider,NavConsumer}