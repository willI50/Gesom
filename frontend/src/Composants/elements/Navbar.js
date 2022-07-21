
import logo from '../../logo2.png'
import 'boosted/dist/css/boosted.min.css';
import 'boosted';
import {NavLink} from 'react-router-dom'

const Navbar=()=>{

    return (
        <div className=''>
        <header role="banner">
       <nav class="navbar navbar-dark bg-dark navbar-expand-md">
           <div class="ml-3 ">
               <div class="navbar-brand ml-5" ><img src={logo} alt="Back to homepage" style={{"width":"60px","height":"60px"}} title="Back to homepage"/>
              
               <div class=" ml-2  navbar-collapse justify-content-between collapse"  id="collapsing-navbar ">
                   <ul class="navbar-nav" >
                   <NavLink to='/'>   <li class="nav-item active " ><div class="nav-link" href="#" aria-current="page">Home</div></li></NavLink> &emsp;
                       <NavLink to='CreateOM'>  <li class="nav-item"><div class="nav-link" href="#">Creer un  OM  </div></li></NavLink> &emsp;
                       <NavLink to='Notifications'><li class="nav-item"><div href="#" class="nav-link"> Notifications</div></li></NavLink>&emsp;
                       {/* &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp; */}
               
                   </ul>
                  
               </div>
               
    
   </div>
           </div>
           <div className="col  mr-5"   align='right' style={{'paddingTop':'4%'}}   >
     <button type="text" class="dropdown-toggle text-primary" style={{"border":"none","backgroundColor":"black"}}  data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
       <div  style={{"color":"white"}}>Bienvenu William Omgba</div>
       <div class="dropdown-menu dropdown-menu-lg-right">
       <button class="dropdown-item" type="button">logout</button>
       
     </div>
     </button>
               </div>
       </nav>
   </header>
   
   
       </div>




    )
}
export default  Navbar;