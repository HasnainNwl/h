import { useState } from "react";
import Button from "../../components/Button"
import Textfield from "./Textfield"
import { useNavigate } from "react-router";
const EditUser = () => {
    const navigate = useNavigate();
    const [values, SetValues] = useState({
            name:'',
            email:''
    })
    const handleEditUser = ()=> {
        SetValues({name:'', email:''});

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
    <Button onclick={handleEditUser}>Edit</Button>

</div>
  )
}

export default EditUser