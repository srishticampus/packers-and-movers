import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import img from '../../Images/packerdetail.jpg'
import axiosInstance from "../../BaseUrl";

function AdminPackers() {
  const [packersDetails, setpackersDetails] = useState([]);

  useEffect(() => {
    axiosInstance.post("/viewPackers").then((responce) => {
      console.log(responce);
      setpackersDetails(responce.data.data);
    });
  }, []);

  const handleRemove = (id) => {
    axiosInstance.post(`/deletePackerById/${id}`)
      .then((res) => {
        console.log(res);
        if(res.data.status==200){
            alert('Removed')
            setpackersDetails(prevArray => prevArray.filter(item => item._id !== id));
            // window.location.reload()
        }else{
            // alert.warning('Employee Already Exist')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
        <Sidebar/>
    
      <div class="container py-5">
  <div class="row g-5">
  {packersDetails.length?packersDetails.map((a) => {
            return (
    <div class="col-lg-6">
      <div class="row">
        <div class="col-12">
          
              <div class="blog-item mb-5">
                <div class="bg-light overflow-hidden p-4">
                  <div class="d-flex mb-3">
                    <small class="me-3">
                      <i class="ri-mail-line m-2"></i>{a.email}
                    </small>
                    <small>
                      <i class="ri-phone-line m-2"></i>{a.contact}
                    </small>
                  </div>
                  <h5 class="text-uppercase m-2 mb-3">{a.name}</h5>
                  <p class="m-2">
                    {a.city}<br />{a.district}<br />{a.pincode}
                  </p>
                  <div  >
                    {/* <button type="button" class="btn btn-success">Approve</button> */}
                    <button type="button" class="btn btn-danger" onClick={() => handleRemove(a._id)} >Remove</button>
                  </div>
                </div>
              </div>
           
        </div>
      </div>
    </div>
     );
    }) : <h1 style={{padding:'50px',textAlign:'center'}} >No packer found</h1>
  }
   
  </div>
</div>


    </div>
  );
}

export default AdminPackers;
