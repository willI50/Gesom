
import './App.css';
import {BrowserRouter , Routes,Route,} from 'react-router-dom';

import Homepage from './Composants/HomePage';

import CreateOM from './Composants/CreateOM';
import Navbar from './Composants/elements/Navbar';
import Notification from './Composants/Notification';

function App() {
 
  return( 
    

     
      
    
<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<Homepage/>} />
<Route path="/CreateOM" element={<CreateOM/>} />

<Route path="/Notifications" element={<Notification/>} />






</Routes>

</BrowserRouter>


   )

}

export default App;
