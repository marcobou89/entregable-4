import axios from "axios"
import { useState } from "react"
const urlBase="https://users-crud.academlo.tech/"

const useCrud = () => {
 
    const [apiData, setApiData] = useState()

    const getApi=(path)=>{
        const url = `${urlBase}${path}`
        axios.get(url)
        .then(res=>setApiData(res.data))
        .catch(err=>console.log(err));
    }

    const postApi=(path,data)=>{
      const url = `${urlBase}${path}/`
      axios.post(url,data)
      .then(res=>setApiData([...apiData,res.data]))
      .catch(err=>console.log(err))

    }

    const deleteApi=(path,id)=>{
        const url = `${urlBase}${path}/${id}/`
        axios.delete(url)
        .then(res=>setApiData(apiData.filter(user=>user.id!==id)))
        .catch(err=>console.log(err))

    }

    const pachApi=(path,id,data)=>{
        const url = `${urlBase}${path}/${id}/`
        axios.patch(url,data)
        .then(res=>setApiData(apiData.map(user=>user.id===id?data:user)))
        .catch(err=>console.log(err))


    }


    return[apiData,getApi,postApi, deleteApi,pachApi]
}

export default useCrud