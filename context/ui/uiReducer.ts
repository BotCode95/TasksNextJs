import { UIState } from '.';

type UIActionType = 
| { type: 'UI-OpenSidebar'} 
| { type: 'UI-CloseSidebar'} 
| { type: 'UI-Adding', payload: boolean} 
| { type: 'UI-StartDragging'} 
| { type: 'UI-EndDragging'} 


export const uiReducer = (state: UIState, action: UIActionType):UIState => {
    switch (action.type) {
      case 'UI-OpenSidebar':
         return {
           ...state,
             sidemenuOpen: true
         }
      case 'UI-CloseSidebar':
         return {
           ...state,
           sidemenuOpen: false
         }
      case 'UI-Adding':
         return {
           ...state,
           isAdding: action.payload
         }
      case 'UI-StartDragging':
         return {
           ...state,
           isDragging: true
         }
      case 'UI-EndDragging':
         return {
           ...state,
           isDragging: false
         }
       default:
         return state
    }
}