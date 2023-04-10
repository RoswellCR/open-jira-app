import {FC, PropsWithChildren, useReducer} from 'react';
import { EntriesContext, EntriesReducer } from './';
import { Entry } from '../../interfaces';


export interface EntriesState {
   entries: Entry[];
}
 const genID = ()=>{
     const min = 100;
     const max = 10000;
     return Math.floor(Math.random() * (max - min + 1) + min).toString();

 }

const  Entries_INITIAL_STATE: EntriesState = {
   entries: [
    {
        _id: genID(),
        description:"Pendiente : bla bla bla",
        status: 'pending', 
        createdAt: Date.now(),
    },
    {
        _id: genID(),
        description:"En progreso: ble ble ble",
        status: 'in-progress', 
        createdAt: Date.now()-1000000,
    },
    {
        _id: genID(),
        description:"Terminada:bli bli bli",
        status: 'finished', 
        createdAt: Date.now()-10000,
    }
   ],
}

export const EntriesProvider: FC<PropsWithChildren> = ({children}) =>{

   const [state, dispatch] = useReducer(EntriesReducer, Entries_INITIAL_STATE);

   return (
       <EntriesContext.Provider value={{
           ...state,
       }}>
           {children}
       </EntriesContext.Provider>
   )
}
