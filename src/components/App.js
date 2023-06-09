
import React,{useState} from "react";
import './../styles/App.css';
import Modal from './Modal.js';

const App = () => {
  let [showModal,SetShowModal] = useState(false);

  function modaling(){
    SetShowModal(true);
  }

  return (
    <div >
        {/* Do not remove the main div */}
        <button onClick={modaling}>Show Modal</button>
        <div className="modal modal-overlay" onClick={()=>{SetShowModal(false)}}>{showModal?<Modal showModal={SetShowModal}/>:''}</div>
    </div>
  )
}

export default App
