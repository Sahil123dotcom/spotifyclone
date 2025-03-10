import React from 'react'
import Routes from './routes/Index'
import { ToastContainer } from 'react-toastify';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className='flex items-start min-h-scree'>
      <ToastContainer />
           <Sidebar/>
          
           <div className='pt-8 pl-5 sm:pt-12 sm:pl-12'>
      <Routes/>
      </div>
    </div>
   
  )
}

export default App