import React from 'react'
import { Link } from 'react-router-dom'

import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
    BsBookHalf, BsMenuButtonWideFill, GrUserAdmin}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> Admin
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>

            <li className='sidebar-list-item'>
             
            <Link to='/admin/servicelist' > 
         <BsFillArchiveFill className='icon'/> Service 
         </Link>
  
            </li>
          
            <li className='sidebar-list-item'>
            <Link to='/admin/users' > 
                    <BsPeopleFill className='icon'/> Users
               </Link>
            </li>
            <li className='sidebar-list-item'>
            <Link to='/admin/bookings' >
                    <BsBookHalf className='icon'/> Bookings
                    </Link>

            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> payment
                </a>
            </li>
          
        </ul>
    </aside>
  )
}

export default Sidebar



























