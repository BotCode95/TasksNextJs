import { EntriesState } from './';
import { Entry } from '../../interfaces/entry';

type EntriesActionType = 
| { type: 'AddEntry', payload: Entry} 
| { type: 'EntryUpdate', payload: Entry} 
| { type: 'RefreshData', payload: Entry[]} 


export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
    switch (action.type) {
      case 'AddEntry':
         return {
           ...state,
           entries: [...state.entries, action.payload]
         }
      case 'EntryUpdate': 
         return {
           ...state,
           entries: state.entries.map(entry => {
             if(entry._id === action.payload._id) {
               entry.status = action.payload.status
               entry.description = action.payload.description
             }
             return entry
           })
         }
      case 'RefreshData' :
        return {
          ...state,
          entries: [...action.payload]
        }
       default:
         return state
    }
}