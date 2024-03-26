
import { useState } from 'react'
import './Admin.css'

import AdminNavbar from './AdminNavbar'
import Sidebar from './Sidebar'
import AdminHome from './AdminHome'
import { Route, Routes } from 'react-router-dom'

import User from '../Admin/User'
// import Order from './Order'
import TotalService from './TotalServices'
import ServiceList from '../Admin/ServiceList'
import ServiceForm from './ServiceForm'
import BookingList from './BookingList'
import BookingForm from './BookingForm'
import TotalUser from './TotalUser'
import TotalBooking from './TotalBooking'

function AdminApp() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <AdminNavbar OpenSidebar={OpenSidebar}/>
     
    
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Routes>
        
      
       <Route path='/admin/servicelist' element={<ServiceList/>}/>
       <Route path='/admin/serviceform' element={<ServiceForm/>}/>
       <Route path='/admin/totalservice' element={<TotalService />}/>
        <Route path='/admin/users' element={<User />}/>
        <Route path='/admin/totalbooking' element={<TotalUser />}/>
        <Route path='/admin/bookings' element={<BookingList/>} />
        <Route path='/admin/bookingform' element={<BookingForm/>}/>
        <Route path='/admin/totalbooking' element={<TotalBooking />}/>
      
      </Routes>
     <AdminHome/>
    </div>
  )
}

export default AdminApp