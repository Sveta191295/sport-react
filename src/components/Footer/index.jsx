import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import nike from "./images/nike.png";
import reebok from "./images/reebok.png";
import puma from "./images/puma.png";

import { NavLink } from "react-router-dom";
import "./styles.css";

const FooterPage = () => {
  const classnames = ({ isActive }) => isActive ? "nav_item active" : "nav_item";
  return (
    <MDBFooter className="page-footer font-small ">


      <div className="social-footer">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0 white-text">
                The brand portfolio
              </h6>
            </MDBCol>

            <MDBCol md="6" lg="7" className="text-center text-md-right brand-box">

              <div className="brand">
                <img src={nike} alt="nike" />
              </div>
              <div className="brand">
                <img src={reebok} alt="reebok" />
              </div>
              <div className="brand">
                <img src={puma} alt="puma" />
              </div>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>





      <MDBContainer className="">
        <MDBRow className="footer-info-row">
          <MDBCol md="3" lg="4" xl="3">
            <h6 className="text-uppercase font-weight-bold">
              <strong>SPORTSHOP</strong>
            </h6>
            <hr className="accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              Here you can use rows and columns here to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </MDBCol>
          <MDBCol md="3" lg="4" xl="3" >
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr className=" accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p className="your-account">
              <NavLink className={classnames} to="/registration">Your Account</NavLink>
            </p>
            <p>
              <a href="#!">Help</a>
            </p>
          </MDBCol>
          <MDBCol md="3" lg="4" xl="3" >
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr className=" accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <FontAwesomeIcon icon={faHome} /> Yerevan, Armenia
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> info@sportshop.am
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> + 374 77 777 777
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>



      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} SPORTSHOP | ALL RIGHTS RESERVED
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;