import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills and Tools</h2>
      <div className="skill-list">
        <div className="skill-category">
          <h3>Cloud Services</h3>
          <div className="skill-item">
            <span role="img" aria-label="AWS">
              🛡️
            </span>
            AWS
          </div>
          <div className="skill-item">
            <span role="img" aria-label="Azure">
              🌐
            </span>
            Azure
          </div>
        </div>
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <div className="skill-item">
            <span role="img" aria-label="Java">
              ☕
            </span>
            Java
          </div>
          <div className="skill-item">
            <span role="img" aria-label="Python">
              🐍
            </span>
            Python
          </div>
          <div className="skill-item">
            <span role="img" aria-label="JavaScript">
              📜
            </span>
            JavaScript
          </div>
        </div>
        <div className="skill-category">
          <h3>DevOps and Tools</h3>
          <div className="skill-item">
            <span role="img" aria-label="Linux">
              🐧
            </span>
            Linux
          </div>
          <div className="skill-item">
            <span role="img" aria-label="Jenkins">
              🚀
            </span>
            Jenkins
          </div>
          <div className="skill-item">
            <span role="img" aria-label="CICD">
              🛠️
            </span>
            CI/CD
          </div>
          <div className="skill-item">
            <span role="img" aria-label="Docker">
              🐳
            </span>
            Docker
          </div>
          <div className="skill-item">
            <span role="img" aria-label="Kubernetes">
              ⛵
            </span>
            Kubernetes
          </div>
          <div className="skill-item">
            <span role="img" aria-label="Ansible">
              🚀
            </span>
            Ansible
          </div>
          <div className="skill-item">
            <span role="img" aria-label="Terraform">
              🌍
            </span>
            Terraform
          </div>
          <div className="skill-item">
            <span role="img" aria-label="Prometheus">
              📊
            </span>
            Prometheus
          </div>
          <div className="skill-item">
            <span role="img" aria-label="Grafana">
              📊
            </span>
            Grafana
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
