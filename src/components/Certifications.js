import React from 'react';
import './Certifications.css';
import AWSBadge1 from '../badgeImages/aws-badge1.png'; 
import AWSBadge2 from '../badgeImages/aws-badge2.png'; 
import AWSBadge3 from '../badgeImages/aws-badge3.png'; 
import MicrosoftBadge1 from '../badgeImages/microsoft-badge1.png'; 
import MicrosoftBadge2 from '../badgeImages/microsoft-badge2.png'; 
import MicrosoftBadge3 from '../badgeImages/microsoft-badge3.png'; 
import OracleBadge1 from '../badgeImages/oracle-badge1.png'; 
import OracleBadge2 from '../badgeImages/oracle-badge2.png';
import OracleBadge3 from '../badgeImages/oracle-badge3.png';

const Certifications = () => {
  return (
    <section className="certifications">
      <h2>Certifications</h2>
      <ul className="badge-grid">
        <li>
          <img src={AWSBadge1} alt="AWS SysOps Administrator - Associate Badge" />
          <p>AWS SysOps Administrator - Associate 🛡️</p>
        </li>
        <li>
          <img src={AWSBadge2} alt="AWS Solutions Architect Associate Badge" />
          <p>AWS Solutions Architect Associate 🏗️</p>
        </li>
        <li>
          <img src={AWSBadge3} alt="AWS Certified DevOps Engineer – Professional Badge" />
          <p>AWS Certified DevOps Engineer – Professional ⚙️</p>
        </li>
        <li>
          <img src={MicrosoftBadge1} alt="Microsoft Certified: Azure Fundamentals Badge" />
          <p>Microsoft Certified: Azure Fundamentals 🌐</p>
        </li>
        <li>
          <img src={MicrosoftBadge2} alt="Microsoft Certified: Azure Administrator Associate Badge" />
          <p>Microsoft Certified: Azure Administrator Associate ⚙️</p>
        </li>
        <li>
          <img src={MicrosoftBadge3} alt="Microsoft Certified: DevOps Engineer Expert Badge" />
          <p>Microsoft Certified: DevOps Engineer Expert ⚙️</p>
        </li>
        <li>
          <img src={OracleBadge1} alt="Oracle Cloud Infrastructure 2023 Certified Foundations Associate Badge" />
          <p>Oracle Cloud Infrastructure 2023 Certified Foundations Associate ☁️</p>
        </li>
        <li>
          <img src={OracleBadge2} alt="Oracle Cloud Data Management 2023 Certified Foundations Associate Badge" />
          <p>Oracle Cloud Data Management 2023 Certified Foundations Associate 📊</p>
        </li>
        <li>
          <img src={OracleBadge3} alt="Oracle Cloud Infrastructure 2023 Certified Developer Professional Badge" />
          <p>Oracle Cloud Infrastructure 2023 Certified Developer Professional 🛠️</p>
        </li>
      </ul>
    </section>
  );
};

export default Certifications;
