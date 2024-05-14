import React, {useContext} from 'react';
import {ModalContext} from "../../context/ModalProvider";
import {ModalWindow} from "../../components/modalWindow/ModalWindow";


function AboutPage() {

    const {modal, closeModal} = useContext(ModalContext);

    return (
        <div>
            {
                modal &&
                (
                    <div className='modal'>
                        <ModalWindow/>
                        <button onClick={closeModal} className='modalCloseBtn'>close</button>
                    </div>
                )
            }
        </div>
    );
}

export default AboutPage;