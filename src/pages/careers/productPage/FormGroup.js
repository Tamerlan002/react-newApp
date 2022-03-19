import React, { useState, useEffect } from "react";
import ShadowTitle from "../../../components/titles/shadowTitle";
import Title from "../../../components/titles/Title";
import { api } from "../../../api/api";
import swal from "sweetalert";
import "./FormGroup.scss";

const FormGroup = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    ln_link: "",
    comment: "",
    category: 2,
  });

  const handleClickSubmit = (e) => {
    e.preventDefault();
    api
      .post("/careers/", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      swal({
        title: "Thanks!",
        text: "Your request has been submitted!",
        icon: "success",
      });
    clearForm()
  };

  const clearForm = () => {
    setFormData({
      name: " ",
      phone: " ",
      email: " ",
      location: " ",
      ln_link: " ",
      comment: " ",
      category: 2,
    });
  };

  return (
    <div className="categoryPage container">
      <ShadowTitle text="Careers ." />
      <Title text="Product Designer" />
      <form
        autoComplete="off"
        onSubmit={handleClickSubmit}
        className="row mt-5 needs-validation"
      >
        <div className="mb-3 col-lg-6 ">
          <label htmlFor="name" className="form-label text-white">
            YOUR NAME
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="mb-3 col-lg-6">
          <label htmlFor="phone" className="form-label text-white">
            PHONE
          </label>
          <input
            required
            type="tel"
            className="form-control"
            id="phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>
        <div className="mb-3 col-lg-6 mt-3">
          <label htmlFor="email" className="form-label text-white">
            EMAIL
          </label>
          <input
            required
            type="email"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="mb-3 col-lg-6 mt-3">
          <label htmlFor="location" className="form-label text-white">
            LOCATION
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="location"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
          />
        </div>
        <div className="mb-3 col-lg-12 mt-3">
          <label htmlFor="ln_link" className="form-label text-white">
            LinkedIn profile LINK
          </label>
          <input
            required
            type="url"
            className="form-control"
            id="ln_link"
            value={formData.ln_link}
            onChange={(e) =>
              setFormData({ ...formData, ln_link: e.target.value })
            }
          />
        </div>
        <div className="mb-3 col-lg-12 mt-3">
          <label htmlFor="comment" className="form-label text-white">
            COMMENT
          </label>
          <textarea
            required
            className="form-control"
            id="comment"
            rows={3}
            value={formData.comment}
            onChange={(e) =>
              setFormData({ ...formData, comment: e.target.value })
            }
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
