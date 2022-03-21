import { FC, useReducer } from 'react';
import { EntriesContext,entriesReducer } from './';
import { Entry } from '../../interfaces/entry';
import {v4 as uuidv4} from 'uuid'
export interface EntriesState {
   entries: Entry[];
}


const ENTRIES_INITIAL_STATE : EntriesState = {
   entries: [
       {
           _id: uuidv4(),
           description: "Pendiente: dasdasd adskkasd psapsapd aldeledflk gjhghjdj dhdhd",
           status: 'pending',
           createdAt: Date.now()
       },
       {
            _id: uuidv4(),
            description: "En Progreso: ffdasd adskkasd psapsapd aldeledflk gjhghjdj dhdhd",
            status: 'in-progress',
            createdAt: Date.now() -1000
        },  
        {
            _id: uuidv4(),
            description: "Terminada: gg dskkasd psapsapd aldeledflk gjhghjdj dhdhd",
            status: 'finished',
            createdAt: Date.now() - 10000
        }
   ],
}

export const EntriesProvider: FC = ({children}) => {

  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)
  return (
    <EntriesContext.Provider value={{
        entries: state.entries
    }}>
       {children}
    </EntriesContext.Provider>
  )
}