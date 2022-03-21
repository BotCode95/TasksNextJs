import { FC, useReducer } from 'react';
import { UIContext,uiReducer } from './';

export interface UIState {
  sidemenuOpen: boolean;
}


const UI_INITIAL_STATE : UIState = {
  sidemenuOpen: false,
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
  return (
    <UIContext.Provider value={{
       sidemenuOpen: state.sidemenuOpen,
       openSideMenu,
       closeSideMenu,
    }}>
       {children}
    </UIContext.Provider>
  )
}