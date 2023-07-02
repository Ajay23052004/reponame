import Logo from '../images/dog.png'
import Btn from './Btn.jsx';
function Header(){
    return (
        <div className="nav-bar main">
            <div className="logo">
            <img src={Logo} alt="Logo" />
            <h3>The Anim</h3>
            
          
            </div>
            <div>
                <ul className="menu-bar">
                    <a href="" ><li class="active">Home</li></a>
                    <a href=""><li>Services</li></a>
                   <a href=""><li>Project</li></a> 
                    <a href=""><li>Pricing</li></a>
                    <a href=""><li>Contact</li></a>
                </ul>
                
            </div>
            <Btn />
           
            
        </div>
    );
}



export default Header;