import React from "react";

function Modal({showModal}){
    return (
        <>
            <button className='modal-close' onClick={()=>showModal(false)}>Close</button>
            <p>This is the content of the modal.</p>
        </>
    )
}
export default Modal;