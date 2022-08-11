import React from 'react'
import '../Styles/Modal.css'

function Modal({closeModal}) {
  return (
    <div className='modal' >
      <h1>modal</h1>
      <button className='modal-close-btn' onClick={()=> closeModal(false)} > X </button>
    </div>
  )
}

export default Modal