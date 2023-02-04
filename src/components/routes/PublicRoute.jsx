import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'

const PublicRoute = (props) => {
    const navigate = useNavigate()

    useEffect(() => {
        if(props.isAuth) {
            navigate('/')
        }
    }, [props.isAuth])

    if(props.isAuth){
        return;
    }
    return props.parent 
}


export default PublicRoute