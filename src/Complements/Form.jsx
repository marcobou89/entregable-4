import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const Form = ({addUser,stateUpgrade,setStateUpgrade,upgradeUser,isShow,setIsShow,setTitle, title}) => {


const { register, handleSubmit, reset } = useForm()

useEffect(() => {
    reset(stateUpgrade)
}, [stateUpgrade])


const submit=(data)=>{

    if(stateUpgrade){
        upgradeUser("users",stateUpgrade.id,data)
        setStateUpgrade()
    
                  

    }else{
        addUser("users", data)
        
    }
    setIsShow(false) 
    reset(
{
            first_name:"",
            last_name:"",
            email:"",
            password:"",
            date:"",
            image_url:""

        }
    )
}

const handleClose=()=>{

    setIsShow(false); 
    reset(
{
            first_name:"",
            last_name:"",
            email:"",
            password:"",
            date:"",
            image_url:""

        }
    )
}


  return (
    <div className={`form ${isShow && 'active'}`}>
        <fieldset className={`fieldset ${isShow && 'active'}`}>
            <form onSubmit={handleSubmit(submit)}> 
            
                <div className='div_label'>

              <div className='div_heade_form'>
                {
                title? <h1>Actualizar Usuario</h1> :<h1>Nuevo Usuario</h1>
                }
                <button className='button_x' onClick={handleClose} type="button">X</button>
                </div>      
                
                    <label htmlFor="first_name">Nombre</label>
                    <input {...register("first_name")} type="text" id="first_name" placeholder='Ingresar Nombre' required />
                </div>

                <div className='div_label'>
                    <label htmlFor="last_name">Apellido</label>
                    <input {...register("last_name")} type="text" id="last_name" placeholder='Ingresar Apellido' required />
                </div>

                <div className='div_label'>
                    <label htmlFor="email">Correo</label>
                    <input {...register("email")} type="email" id="email" placeholder='Ingresar Email' />
                </div>

                <div className='div_label'>
                    <label htmlFor="password">Contraseña</label>
                    <input {...register("password")} type="password" id="password" placeholder='Ingresar Contraseña' min={1} max={25} />
                </div>

                <div className='div_label'>
                    <label htmlFor="birthday">Cumpleaños</label>
                    <input {...register("birthday")} type="date" id="birthday" />
                </div>

                <div className='div_label'>
                    <label htmlFor="image_url">Imagen</label>
                    <input {...register("image_url")} type="text" id="image_url" /*pattern="https://.*" size="30" required*//>
                </div>



                <button className='button_enviar'>{title? "Actualizar" : "Crear Usuario"}</button> 

            </form>
        </fieldset>
        
    </div>
  )
}

export default Form