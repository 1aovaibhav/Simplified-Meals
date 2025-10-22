
import LogIn from './components/LogIn'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Register'
import HomePage from './components/HomePage'
import BreakfastPage from './components/BreakfastPage'
import Layout from './components/Layout'
import LunchPage from './components/LunchPage'
import DinnerPage from './components/DinnerPage'
import MessHome from './components/MessHome'
import LogInMess from './components/LogInMess'
import RegisterMess from './components/RegisterMess'
import AnmolMess from './components/AnmolMess'
import KrishnaMess from './components/KrishnaMess'
import ShyamMess from './components/ShyamMess'
import RegisteredSuccess from './components/RegisteredSuccess'
import MyMess from './components/MyMess';
import UpdateMenu from './components/UpdateMenu';


function App() {




  
  return (
    <div className='bg-gray-950 h-screen w-[100%]'>
 


      <BrowserRouter basename="/Simplified-Meals">
        

      <Routes>
       
         <Route path='/' element={<HomePage />} />

        <Route path='/v1' element={<Layout />} >
              <Route path='breakfast' element={<BreakfastPage />} />
              <Route path='lunch' element={<LunchPage />} />
              <Route path='dinner' element={<DinnerPage />} />
              <Route path='messes' element={<MessHome />} />
              <Route path='anmolmess' element={<AnmolMess />} />
              <Route path='krishnamess' element={<KrishnaMess />} />
              <Route path='shyammess' element={<ShyamMess />} />
              <Route path="mymess" element={<MyMess/>} /> 
              
        </Route>

         <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/loginmess" element={<LogInMess />} />
        <Route path="/registermess" element={<RegisterMess />} />
        <Route path="/registered" element={<RegisteredSuccess />} />
        <Route path="/updatemenu" element={<UpdateMenu/>} />
     
      </Routes>
    </BrowserRouter>


    </div>
  )
}

export default App