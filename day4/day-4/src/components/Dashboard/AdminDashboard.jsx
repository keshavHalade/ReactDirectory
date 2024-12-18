import React from 'react'
import Header from '../Reusable/Header'
import AdminForm from '../Reusable/AdminForm'
import './AdminDashboard.css'
import ClientPanel from '../Reusable/ClientPanel'
import TaskChart from '../Reusable/TaskChart'

function AdminDashboard() {
  return (
    <div>
      <Header />
      <div className='admin-panal'>
        <AdminForm />
        <ClientPanel />
        <TaskChart />
      </div>
    </div>
  )
}

export default AdminDashboard
