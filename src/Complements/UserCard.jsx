import React, { useState } from 'react'
import Modal from './Modal'


const UserCard = ({user,deleteUser,setStateUpgrade,setIsShow, setTitle, title}) => {

    const [modal, setModal] = useState(false)

    const handleErrase = () => {
        setModal(true)  
        // deleteUser("users",user.id)
    }

    const handleUpgrade=()=>{
        setStateUpgrade(user)
        setIsShow(true)
        setTitle(true)
    }

  return (
    <div className='user_app'>
        <article>
            <Modal
            modal={modal}
            setModal={setModal}
            user={user}
            deleteUser={deleteUser}
            />
            <h2>{user.first_name} {user.last_name} #{user.id}</h2>
            <ul>
                <li><span className='span_title'>Correo</span><span className='span_content'>{user.email}</span></li>
                <li><span className='span_title'>🎁 Cumpleaños</span><span className='span_content'> {user.birthday}</span></li>
                
            </ul>
            <div className='content_button'>
            <button className='errase'  onClick={handleErrase}> <ion-icon name="trash-outline"></ion-icon> </button>
            <button className='edit' onClick={handleUpgrade}><ion-icon name="create-outline"></ion-icon></button>
            </div>
            

        </article>
    </div>
  )
}

export default UserCard