import React, { useState, useEffect } from "react";
import { api } from "../../../api/api";
import ShadowTitle from "../../../components/titles/shadowTitle";
import Title from "../../../components/titles/Title";
import swal from "sweetalert";
import "./FormGroup.scss"



const FormGroup = () => {
  const [inputData, setInputData] = useState({
    name: '',
    phone : '',
    email : '',
    location: '',
    ln_link: "",
    comment: "",
    category: 1
  })

  const handleSubmit = e => {
    
    e.preventDefault();
    api.post('/careers/',inputData)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    swal({
      title: "Thanks!",
      text: "Your request has been submitted!",
      icon: "success",
    });
    clearInput()
  } 
  const clearInput = () => {
    setInputData({
      name: '',
      phone : '',
      email : '',
      location: '',
      ln_link: "",
      comment: "",
      category: 1
    })
  }
  
    return (
      <div className="categoryPage container">
        <ShadowTitle text="Careers ." />
        <Title text="Category Executive" />
        <form autoComplete='off' onSubmit={handleSubmit} className="row mt-5">
          <div className="mb-3 col-lg-6 ">
            <label
              htmlFor="name"
              className="form-label text-white"
            >
              YOUR NAME
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="name"
              value={inputData.name}
              onChange={e=>setInputData({...inputData, name: e.target.value})}
            />
          </div>
          <div className="mb-3 col-lg-6">
            <label
              htmlFor="phone"
              className="form-label text-white"
            >
              PHONE
            </label>
            <input
              required
              type="tel"
              className="form-control"
              id="phone"
              value={inputData.phone}
              onChange={e=>setInputData({...inputData, phone: e.target.value})}
            />
          </div>
          <div className="mb-3 col-lg-6 mt-3">
            <label
              htmlFor="email"
              className="form-label text-white"
            >
              EMAIL
            </label>
            <input
              required
              type="email"
              className="form-control"
              id="email"
              value={inputData.email}
              onChange={e=>setInputData({...inputData, email: e.target.value})}
            />
          </div>
          <div className="mb-3 col-lg-6 mt-3">
            <label
              htmlFor="location"
              className="form-label text-white"
            >
              LOCATION
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="location"
              value={inputData.location}
              onChange={e=>setInputData({...inputData, location: e.target.value})}

            />
          </div>
          <div className="mb-3 col-lg-12 mt-3">
            <label
              htmlFor="link"
              className="form-label text-white"
            >
              LinkedIn profile LINK
            </label>
            <input
              required
              type="url"
              className="form-control"
              id="link"
              value={inputData.ln_link}
              onChange={e=>setInputData({...inputData, ln_link: e.target.value})}
            />
          </div>
          <div className="mb-3 col-lg-12 mt-3">
            <label
              htmlFor="comment"
              className="form-label text-white">
                    COMMENT
            </label>
            <textarea
              required
              className="form-control"
              id="comment"
              rows={3}
              value={inputData.comment}
              onChange={e=>setInputData({...inputData, comment: e.target.value})}
            ></textarea>
          </div>
          <div className="send">
          <button type="submit" className="cta my-5">
            <span className="hover-underline-animation"> SEND </span>
            <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
        </form>
        
      </div>
    );
  
};

export default FormGroup;