import React, { useEffect, useState } from "react";
import img1 from "../../Images/team-1.jpg";
import img2 from "../../Images/team-2.jpg";
import img3 from "../../Images/team-3.jpg";
import img4 from "../../Images/team-4.jpg";
import img5 from "../../Images/team-5.jpg";
import axiosInstance from "../../BaseUrl";
import star from '../Assets/star.json'
import Lottie from 'lottie-react'
import { useNavigate } from "react-router-dom";

function Companies() {

  const [value, setValue] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.post("/viewAllMovers").then((responce) => {
      console.log(responce);
      setValue(responce.data.data);
    });
  }, []);

  return (
    <div>
      
      <div class="container py-5">
  <div class="row g-5">
  {value.length?value.map((a) => {
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
                  <p class="m-2" style={{fontSize:'large'}}>
                    City : {a.city}<br />District : {a.district}<br />
                  </p>
                  <div class="d-flex mb-3 m-2">
                      <span style={{fontSize:'large'}} >Rating : {a.rating.toFixed(1)}</span><Lottie animationData={star} style={{height:'30px'}} />
                  </div>
                  <div class="d-flex justify-content-between">
                    {/* <button type="button" class="btn btn-danger" onClick={() => handleRemove(a._id)} >Remove</button> */}
                    <button type="button" class="btn btn-warning" onClick={()=>{navigate(`/single-packer-view/${a._id}`)}} >View</button>
                  </div>
                </div>
              </div>
           
        </div>
      </div>
    </div>
     );
    }) : <h1 style={{padding:'50px',textAlign:'center'}} >No movers found</h1>
} 
   
  </div>
</div>
    </div>
  );
}

export default Companies;
