import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import '../AdminPanel/AdminPanel.css'

function AdminPanel() {
  return (
    <div>
      <Sidebar/>
      <section className='home' >
          <div className="row gx-5 m-5">
            <div className="col-lg-3 mb-5 mt-5 mb-lg-0">
              <div className='revenue__box'>
                <h5>Total Sales</h5>
                <span>3453</span>
              </div>
            </div>
            <div className="col-lg-3 mb-5 mt-5 mb-lg-0">
            <div className='order__box'>
                <h5>Total Orders</h5>
                <span>53</span>
              </div>
            </div>
            <div className="col-lg-3 mb-5 mt-5 mb-lg-0">
            <div className='products__box'>
                <h5>Total Products</h5>
                <span>34</span>
              </div>
            </div>
            <div className="col-lg-3 mb-5 mt-5 mb-lg-0">
            <div className='user__box'>
                <h5>Total Users</h5>
                <span>21</span>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}

export default AdminPanel
