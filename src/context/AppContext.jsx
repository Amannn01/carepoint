// import React, { createContext, useState } from "react";
import React from "react";
import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext =createContext()
    const AppContextProvide =(props)=>{
        const currencySymbol='₹ && $'
        const value={
            doctors
        }
        return (
            <AppContext.Provider value={value}>
                {props.children}
            </AppContext.Provider>
        )
    }
    export default AppContextProvide