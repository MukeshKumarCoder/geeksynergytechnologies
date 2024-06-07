import React, { useState } from "react";
import styles from "./Navbar.module.css";
import CompanyInfo from "../CompanyInfo/CompanyInfo";
import Button from "../Button/Button"
import { useNavigate } from "react-router-dom";
import Logo from "../../../assest/m.png"

const Navbar = ({isLogin}) => {
  const navigate = useNavigate()
  const [showCompanyInfo, setShowCompanyInfo] = useState(false);

  return (
    <>
      <div className={styles.nabContainer}>
        <div className={styles.logo}>
          <img src={Logo} />
        </div>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap: "1rem"}}>
        <Button title="SignUp" onclickBtn={()=> navigate("/")} />
        <Button title="Login" onclickBtn={()=> navigate("/login")} />
        {isLogin ? <Button title="DashBord" onclickBtn={()=> navigate("/movies")} />:<Button title="DashBoard" onclickBtn={()=> navigate("/login")} /> }
       
        
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
