import '../App.css';
import { SideMenuData } from './SideMenuData';
import {Routes,Route,Link, useNavigate} from 'react-router-dom';
import { FaBars, FaPowerOff } from 'react-icons/fa';
import Request from '../component/Request';

export default function SideMenu(){
    const navigate = useNavigate();
    function logout(): void {
        navigate('/');
    }

    return(
        <>
        <div className='fullLayout'>
            <div className="sidebar">
                <div className='top_section'>
                    <h1 className='logo'>Logo</h1>
                    <div className='bars'>
                        <FaBars/>
                    </div>
                    <div className='bars' onClick={()=> logout()}>
                        <FaPowerOff/>
                    </div>
                </div>
                <ul className='sidebarList'>
                    {SideMenuData.map((val,key)=>{
                        return (
                            
                            <li className='row' key={key} 
                            id={window.location.pathname == val.link ? "active" : ""}
                            >
                                {" "}
                                <div id="icon">{val.icon}</div>
                                <Link id="title" to={val.link}>{val.title}</Link>  
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='mainData'>
                <Routes>
                    <Route path='/Request' element={<Request/>}></Route>
                </Routes> 
            </div>
        </div>
        
        </>
    )
}

