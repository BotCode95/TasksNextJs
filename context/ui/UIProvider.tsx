import { FC, useReducer } from 'react';
import { UIContext,uiReducer } from './';

export interface UIState {
  sidemenuOpen: boolean;
  isAdding: boolean;
  isDragging: boolean;
}


const UI_INITIAL_STATE : UIState = {
  sidemenuOpen: false,
  isAdding: false,
  isDragging: false
}

export const UIProvider: FC = ({children}) => {

  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const openSideMenu = () => {
      dispatch({
          type: 'UI-OpenSidebar'
      })
  }

  const closeSideMenu = () => {
    dispatch({
        type: 'UI-CloseSidebar'
    })
  }
  const setIsAddingEntry = (isAdding : boolean) => {
    dispatch({type: 'UI-Adding', payload: isAdding})
  }

 

  const startDragging = () => {
    dispatch({
      type: 'UI-StartDragging'
    })
  }

  const endDragging = () => {
    dispatch({
      type: 'UI-EndDragging'
    })
  }
  return (
    <UIContext.Provider value={{
       sidemenuOpen: state.sidemenuOpen,
       isAdding: state.isAdding,
       isDragging: state.isDragging,
       openSideMenu,
       closeSideMenu,
       setIsAddingEntry,
       startDragging,
       endDragging
    }}>
       {children}
    </UIContext.Provider>
  )
}