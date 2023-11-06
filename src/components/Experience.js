import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="experience-item">
        <h3>Accenture (Infra Managed Service Associate)</h3>
        <p>April 2022 - Present (1 year 7 months)</p>
        <p>
        In my role here, I've been at the forefront of designing and developing software solutions that precisely align with business requirements. I've crafted implementation and integration approaches for applications, ensuring seamless functionality. Additionally, I've taken charge of primary support for application releases into production, meticulously planning and scheduling deployments. Whenever defects or performance issues arise within Service Level Agreements, I've been quick to coordinate and resolve them, ensuring minimal downtime. My dedication to enhancing system performance is evident through my thorough analysis, design, building, and testing of new components.
        </p>
      </div>
      <div className="experience-item">
        <h3>Village IT Services Private Limited (Cloud Support Associate)</h3>
        <p>March 2019 - March 2022 (3 years 1 month)</p>
        <p>
        During my time at Village IT Services, I specialized in deploying and managing web and mobile projects on AWS cloud infrastructure. I not only provided exceptional technical support but also optimized resource utilization, resulting in cost savings and improved project performance. Meticulous planning was a cornerstone of my approach, leading to flawless project execution. I stayed ahead of cloud technology advancements and actively contributed to fostering innovation in cloud-supported development.
        </p>
      </div>
    </section>
  );
};

export default Experience;
