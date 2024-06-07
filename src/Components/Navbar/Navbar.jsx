import React, { useState } from "react";
import styles from "./Navbar.module.css";
import CompanyInfo from "../CompanyInfo/CompanyInfo";
import Button from "../Button/Button"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const [showCompanyInfo, setShowCompanyInfo] = useState(false);

  return (
    <>
      <div className={styles.nabContainer}>
        <div className={styles.logo}>
          <img src="../../../assest/m.png" />
        </div>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap: "1rem"}}>
        <Button title="SignUp" onclickBtn={()=> navigate("/")} />
        <Button title="Login" onclickBtn={()=> navigate("/login")} />
        
        <button
          onClick={() => setShowCompanyInfo(!showCompanyInfo)}
          className={styles.companyBtn}
        >
          Company Info
        </button>
        </div>
      </div>
      {showCompanyInfo && <CompanyInfo />}
    </>
  );
};

export default Navbar;
