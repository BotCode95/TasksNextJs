import { FC, useEffect, useReducer } from 'react';
import { EntriesContext,entriesReducer } from './';
import { Entry } from '../../interfaces/entry';
import {v4 as uuidv4} from 'uuid'
import entriesApi from '../../apis/entriesApi';
import {EntryModel} from '../../models/';
export interface EntriesState {
   entries: Entry[];
}


const ENTRIES_INITIAL_STATE : EntriesState = {
   entries: [],
}

export const EntriesProvider: FC = ({children}) => {

  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)
  const addNewEntry = (description : string) => {
    const NewEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: 'pending'
    }
    dispatch({type: 'AddEntry', payload: NewEntry})
  }

  const updateEntry = (entry: Entry) => {
    console.log(entry)
    dispatch({type: 'EntryUpdate', payload: entry})
  }

  const refreshEntries = async() => {
    const {data} = await entriesApi.get<Entry[]>('/entries');
    dispatch({
      type: 'RefreshData', 
      payload: data
    })
  }

  useEffect(() => {
    refreshEntries()
  }, [])
  
  
  return (
    <EntriesContext.Provider value={{
        entries: state.entries,
        addNewEntry,
        updateEntry
    }}>
       {children}
    </EntriesContext.Provider>
  )
}