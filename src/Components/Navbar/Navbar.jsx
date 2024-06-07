import React, { useState } from "react";
import styles from "./Navbar.module.css";
import CompanyInfo from "../CompanyInfo/CompanyInfo";

const Navbar = () => {
  const [showCompanyInfo, setShowCompanyInfo] = useState(false);

  return (
    <>
      <div className={styles.nabContainer}>
        <div className={styles.logo}>
          <img src="../../../assest/m.png" />
        </div>
        <button
          onClick={() => setShowCompanyInfo(!showCompanyInfo)}
          className={styles.companyBtn}
        >
          Company Info
        </button>
      </div>
      {showCompanyInfo && <CompanyInfo />}
    </>
  );
};

export default Navbar;
