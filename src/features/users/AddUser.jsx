import { useState } from "react"
import Button from "../../components/Button"
import Textfield from "./Textfield"
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "./userslice";


const AddUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [values, SetValues] = useState({
            name:'',
            email:''
    })
    const handleAddUser = ()=> {
        SetValues({name:'', email:''});
        dispatch(addUser({
        id:'3',
        name: values.name,
        email: values.email
        }))

        navigate('/')
    }
  return (
    <div className="mt-10 max-w-xl mx-auto">

        <Textfield 
        label="Name"
        inputProps={{type:'text', placeholder:'john Deo'}}
        value={values.name}
        onchange={(e)=> SetValues({...values, name: e.target.value})}
        />
        <br />
        <Textfield 
        label="Email"
        inputProps={{type:'email', placeholder:'jhondeo@gmail.com'}}
        value={values.email}
        onchange={(e)=> SetValues({...values, email: e.target.value})}
        />
        <Button onclick={handleAddUser}>Submit</Button>

    </div>
  )
}

export default AddUser