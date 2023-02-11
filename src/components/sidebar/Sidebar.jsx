import css from './Sidebar.module.css'
import { Link, useLocation } from 'react-router-dom'
import {sideBarElements} from '../constants'


const func = () => {

}

const CustomLink = (props) => {
    const location = useLocation()
        console.log(location)
        
        
    

    return (
        
        <Link className={`${css.link} ${location.pathname === props.to ? css.active : ''}`} to={props.to}>
            
            <img
                width='20px'
                src={props.icon} 
                alt={'Home'}/>
                {props.title}
        </Link>
        
    )
}


function Sidebar() {

    const render = sideBarElements.map((el) => (
    <CustomLink key={el.title} {...el} />))

    return (
        
        <aside className={css.wrapper}>
            <h1 className={css.instagram}>Instagram</h1>
            {render}
        </aside>
    )
}

export default Sidebar