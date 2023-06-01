
import React,{useState} from "react";
import './../styles/App.css';
import Modal from './Modal.js';

const App = () => {
  let [showModal,SetShowModal] = useState(false);

  function modaling(){
    SetShowModal(true);
  }

  return (
    <>
        {/* Do not remove the main div */}
        <button onClick={modaling}>Show Modal</button>
        {showModal?<Modal showModal={SetShowModal}/>:''}
    </>
  )
}

export default App
