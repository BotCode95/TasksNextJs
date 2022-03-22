import { createContext } from "react";

export interface ContextProps {
    sidemenuOpen: boolean;
    isAdding: boolean;
    isDragging: boolean;

    //methods
    openSideMenu: () => void;
    closeSideMenu: () => void;
    setIsAddingEntry: (isAdding: boolean) => void
    startDragging: () => void
    endDragging: () => void
}

export const UIContext = createContext({} as ContextProps)