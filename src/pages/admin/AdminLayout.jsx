import React from 'react'
import Navbar from '../../components/admin/navbar/Navbar'
import Sidebar from '../../components/admin/sidebar/Sidebar'
import {Outlet} from 'react-router-dom'

function AdminLayout() {
  return (
    <div>
      <Navbar/>
      <div className='flex'>
      <Sidebar/>
      <div className="grow">
          <Outlet/>
      </div>
      </div>

    </div>
  )
}

export default AdminLayout
