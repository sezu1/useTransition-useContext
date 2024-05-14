import {createContext, useState} from "react";


export const ModalContext= createContext(null)

export function ModalProvider ({children}) {

    const [modal, setModal] = useState(false);

    function openModal(){
        setModal(true);
    }

    function closeModal(){
        setModal(false);
    }

    const value = {
        modal,
        closeModal,
        openModal
    }

    return(
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )
}
