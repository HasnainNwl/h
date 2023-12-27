import { useState } from "react";
import Button from "../../components/Button"
import Textfield from "./Textfield"
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "./userslice";
const EditUser = () => {
    const params = useParams();
    const users = useSelector(store => store.users)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const existingUser = users.filter(user => user.id === params.id);
    const {name, email} = existingUser[0];
    const [values, SetValues] = useState({
            name,
            email
    })
    const handleEditUser = ()=> {
        SetValues({name:'', email:''});
        dispatch(editUser({
            id: params.id,
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
    <Button onclick={handleEditUser}>Edit</Button>

</div>
  )
}

export default EditUser