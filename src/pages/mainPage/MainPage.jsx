import React from 'react';
import {useContext} from "react";
import {ModalContext} from "../../context/ModalProvider";

function MainPage() {

    const {openModal, closeModal} = useContext(ModalContext);

    return (
        <div>
            <button onClick={openModal}>открыть модальное окно</button>
            <button onClick={closeModal}>закрыть модальное окно</button>
        </div>
    );
}

export default MainPage;