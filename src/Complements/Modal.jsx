import React from 'react'


const Modal = ({modal,setModal,user,deleteUser}) => {
    const handleErrase = () => {
        deleteUser("users",user.id)
        setModal(false)
    }

    const handleClose =()=>{
        setModal(false)
    }
    


  return (
    <div className={`modal ${modal && 'active'}`}>
        
        <div className={`modal_div ${modal && 'active'}`}>
        <h1>Deseas eliminar el registro?</h1>
        <span><button className='eliminar' onClick={handleErrase}>Eliminar</button></span><span><button className='cerrar' onClick={handleClose}>Cancelar</button></span>  
    </div>      
    </div>
  )
}

export default Modal