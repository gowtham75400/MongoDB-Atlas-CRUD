import { useState } from "react"
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const AddUser = () => {


        const [user, setUser] = useState({
            fname:"",
            lname:"",
            email:"",
            password:"",
        })

        const nav = useNavigate()

        const handler = (e) => {
            const {id , value} = e.target
            setUser((prev) => ({...prev, 
                [id]: value}))

            console.log(id, user);
        }


        const add = async (e) => {
            e.preventDefault()
            await axios.post("https://localhost:6000/api/create" , user)
            .then((res ) =>   toast.success(res.data.msg,{position:'top-right'}))
            nav('/')
        }

    return (
        <div>
            <form>
                <label htmlFor="">FirstName : 
                    <input type="text" onChange={handler} id="fname" name="fname" placeholder="Enter Your FName"/>
                </label><br/>
                <label htmlFor="">Lastname : 
                    <input type="text" onChange={handler} id="Lname" name="Lname" placeholder="Enter Your LName"/>
                </label>
                <br/>
                <label htmlFor="">Email : 
                    <input type="text" onChange={handler} id="email" name="email" placeholder="Enter Your Email"/>
                </label><br/>
                <label htmlFor="">Password : 
                    <input type="text" onChange={handler} id="password" name="password" placeholder="Enter Your Password"/>
                </label><br/>
                <button onSubmit={add}>ADD USER</button>
            </form>
        </div>
    )

}
export default AddUser