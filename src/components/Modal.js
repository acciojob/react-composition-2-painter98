import React from "react";

function Modal({showModal}){
    return (
        <div className="model-overlay">
            <button className='model-close' onClick={()=>showModal(false)}>Close</button>
            <p>This is the content of the modal.</p>
        </div>
    )
}
export default Modal;