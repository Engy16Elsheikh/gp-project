import { createContext, useRef } from "react";

export const RefsContext = createContext(
  {
    refs:{},
    executeScroll:()=>null
  }
);


export const RefsProvider = ({ children }) => {
    const refs={
     aboutRef:useRef(),
     servicesRef:useRef(),
     contactRef:useRef(),
    }
    const executeScroll = (ref) => refs[ref].current.scrollIntoView()
    const value = {refs ,executeScroll}
    return( 
      <RefsContext.Provider value={value}>
        {children}
      </RefsContext.Provider>
    );
};