import React from "react";
import styles from "./CompanyInfo.module.css";

const CompanyInfo = () => {
  return (
    <div className={styles.copmanyInfoContainer}>
      <div className={styles.companyInfo}>
        <p>
          <span>Company:</span> Geeksynergy Technologies Pvt Ltd
        </p>
        <p>
          <span>Address:</span> Sanjayanagar, Bengaluru-56
        </p>
        <a href="tel:XXXXXXXXX09">
          <span>Phone:</span> XXXXXXXXX09
        </a>
        <a href="mailto:XXXXXX@gmail.com">
          <span>Email:</span> XXXXXX@gmail.com
        </a>
      </div>
    </div>
  );
};

export default CompanyInfo;
