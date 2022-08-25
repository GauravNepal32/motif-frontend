import { createContext,useContext,useState,useEffect } from "react";
const GlobalVariable=createContext(null);

export const GlobalProvider=({children})=>{
    const baseURL="https://newmotifapi.elscript.co"
    return(
        <GlobalVariable.Provider value={({baseURL})}>
            {children}
        </GlobalVariable.Provider>
    )
}

export const useGlobal=()=>{
    return(useContext(GlobalVariable))
}
