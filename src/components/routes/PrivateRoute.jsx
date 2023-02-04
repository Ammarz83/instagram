import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'

const PrivateRoute = (props) => {
    const navigate = useNavigate();
    
    useEffect(() => {
        if(!props.isAuth) {
            navigate('/Login')
        }
    }, [props.isAuth])

    if(!props.isAuth){
        return;
    }
    return props.children 
}

export default PrivateRoute