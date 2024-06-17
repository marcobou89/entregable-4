
import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import Form from './Complements/Form'
import UserCard from './Complements/UserCard'
import "./Complements/Form.css"
import "./Complements/UserCard.css"
import "./Complements/Modal.css"



function App() {

  const [ stateUpgrade, setStateUpgrade] = useState()
  const [isShow, setIsShow] = useState(false)
  
  const [title, setTitle] = useState()

  
  const [users,getUsers, addUser, deleteUser,upgradeUser]=useCrud()

  useEffect(() => {
    
  getUsers("users/")
    
  }, [])
  
  const handleOpen=()=>{

    setIsShow(true)
    setTitle(false)
  }



  return (
    <div className='app'>
      <div className='header'>
            <h1>Usuarios</h1>
            <button className='button_create' onClick={handleOpen} >➕Crear nuevo Usuario</button>
      </div>
      
      <Form
            addUser={addUser}
            stateUpgrade={stateUpgrade}
            setStateUpgrade={setStateUpgrade}
            upgradeUser={upgradeUser}
            setIsShow={setIsShow}
            isShow={isShow}
            setTitle={setTitle}
            title={title}
            />
      
      <div className='cards'>
        {
          users?.map(user=>(

            <UserCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setStateUpgrade={setStateUpgrade}
            setIsShow={setIsShow}
            setTitle={setTitle}
            title={title}
            />

          ))


        }
        </div>
    </div>
  )
}

export default App
