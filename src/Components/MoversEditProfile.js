import React, { useEffect, useState } from 'react'
import MoversNav from './MoversNav'
import img from '../Images/profileEdit.jpg'
import axiosInstance from '../BaseUrl';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function MoversEditProfile() {

    const [value,setValue] = useState({});
  const navigate=useNavigate();


  const id=localStorage.getItem("moversId")


  useEffect(() => {


    axiosInstance.post(`/viewMovrById/${id}`)
    .then((res)=>{
    // console.log(res.data.desig);
    setValue(res.data.data)
    
  })
  }, []);

  const updatefcn=(e)=>{
    e.preventDefault();

    axiosInstance.post(`/editMoverById/${id}`,value)
    .then((response)=>{
      console.log(response);
      if (response.data.status==200) {
        toast.success('Profile Updated')
        navigate('/movers-profile')
      }

    })
    .catch((err)=>{
      console.log(err);
    })
  }

  const changefn = (e)=>{
setValue({...value, [e.target.name]:e.target.value})
  }

  return (
    <div>
        <MoversNav/>
      <div className="container-fluid py-5">
        <div className="container"  >
        <div className="border-start border-5 border-primary ps-5 mb-5">
                        <h6 className="text-primary text-uppercase">update</h6>
                        <h1 className="display-5 text-uppercase mb-0">Edit Profile</h1>
                    </div>
            <div className="row gx-5">
                <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight:'400px'}} >
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded" src={img} style={{objectFit:'contain', height:'400px', width:'100px'}} alt='' />
                    </div>
                </div>
                <div className="col-lg-7" style={{paddingTop:'2rem'}}>
                <form onSubmit={updatefcn} >
                        <div className="row g-3">
                            <div className="col-12">
                                <input type="text" className="form-control bg-light border-0 px-4" placeholder="Your Name" style={{height:'55px'}} value={value.name} name="name" onChange={changefn}   id='name' />
                                {/* {errors.name && touched.name && (<p className="error">{errors.name}</p>)} */}
                            </div>
                            <div className="col-6" style={{marginBottom:'1rem'}} >
                                <input type="email" className="form-control bg-light border-0 px-4" placeholder="Your Email" style={{height:'55px'}} value={value.email} name="email" onChange={changefn}  id='email'/>
                                {/* {errors.email && touched.email && (<p className="error">{errors.email}</p>)} */}

                            </div>
                            {/* <div className="col-6" style={{marginBottom:'1rem'}} >
                            <input type="text" className="form-control bg-light border-0 px-4" style={{height:'55px'}} value={value.gender} name="gender" onChange={changefn}  id='gender' disabled />


                            </div> */}
                            <div className="col-6" style={{marginBottom:'1rem'}} >
                                <input type="number" className="form-control bg-light border-0 px-4" placeholder="Phonenumber" style={{height:'55px'}} value={value.contact} name="contact" onChange={changefn}   id='contact'/>
                                {/* {errors.contact && touched.contact && (<p className="error">{errors.contact}</p>)} */}

                            </div>
                            {/* <div className="col-6" style={{marginBottom:'1rem'}}>
                                <input type="password" className="form-control bg-light border-0 px-4" placeholder="Password" style={{height:'55px'}}  id='password'/>

                            </div>
                             */}
                            <div className="col-6">
                                <input type='text' className="form-control bg-light border-0 px-4 py-3" placeholder="City" style={{height:'55px'}} value={value.city} name="city" onChange={changefn} id='city'/>
                                {/* {errors.city && touched.city && (<p className="error">{errors.city}</p>)} */}

                            </div>
                            <div className="col-6">
                                <input type='text' className="form-control bg-light border-0 px-4 py-3" placeholder="District" style={{height:'55px'}} value={value.district} name="district" onChange={changefn} id='district'/>
                                {/* {errors.district && touched.district && (<p className="error">{errors.district}</p>)} */}

                            </div>
                            <div className="col-6">
                                <input type='number' className="form-control bg-light border-0 px-4 py-3" placeholder="Pincode" style={{height:'55px'}} value={value.pincode} name="pincode" onChange={changefn} id='pincode'/>
                                {/* {errors.pincode && touched.pincode && (<p className="error">{errors.pincode}</p>)} */}

                            </div>
                            <div className="col-6">
                                <input type='text' className="form-control bg-light border-0 px-4 py-3" placeholder="Pincode" style={{height:'55px'}} value={value.regno} name="regno" onChange={changefn} id='regno'/>
                                {/* {errors.pincode && touched.pincode && (<p className="error">{errors.pincode}</p>)} */}

                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Update Profile</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default MoversEditProfile
