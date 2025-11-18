import * as React from "react"
import styled from "styled-components"
import { Container } from "react-bootstrap"

import fortnetLogo from "../images/fortnet-with-subtitle.svg";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Footer>
      <Container>
        <div className="footer-content">
          <div className="footer-section">
            <img src={fortnetLogo} alt="FortNet" className="footer-logo" />
          </div>
          <div className="footer-section">
            <p className="footer-text">
              PRIN 2022 Research Project funded by the European Union – Next Generation EU,
              Mission 4 Component 1
            </p>
            <p className="footer-copyright">
              © 2023 – {currentYear} FortNet Project • All rights reserved
            </p>
          </div>
          <div className="footer-section">
            <h5 className="footer-heading">Partners</h5>
            <p className="footer-text">
              <a
                href="https://site.unibo.it/fortnetproject/"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Bologna University
              </a>
              <br />
              P.I.: Enrico Giorgi
              <br />
              Dept. of History and Cultures, Piazza San Giovanni in Monte 2, Bologna
            </p>
            <p className="footer-text">
              <a
                href="https://lad.saras.uniroma1.it/ricerca/fortnet-project-prin-2022/"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Sapienza University of Rome
              </a>
              <br />
              Head of research unit: Julian Bogdani
              <br />
              Dept. of SARAS, Faculty of Humanities and Philosopy, Piazzale Aldo Moro 5, Roma
            </p>
          </div>
        </div>
        <img
            src="/pnrr-bar-logo.jpg"
            alt="FortNet Project"
            className="shadow-lg"
          />
      </Container>
      
    </Footer>
  )
}

const Footer = styled.footer`
  background-color: #f8fafc;
  border-top: 1px solid #e2e8f0;
  margin-top: 5rem;
  padding: 3rem 0 2rem;

  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 3rem;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  .footer-section {
    flex: 1;
  }

  .footer-logo {
    width: auto;
    max-width: 80%;
    margin-bottom: 1.5rem;
  }

  .footer-heading {
    font-size: 1rem;
    font-weight: 600;
    color: #0f172a;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .footer-text {
    font-size: 0.9rem;
    color: #475569;
    line-height: 1.6;
    margin-bottom: 0.75rem;
    
    strong {
      color: #0f172a;
      font-weight: 600;
    }
  }

  .footer-link {
    color: #2563eb;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;
    
    &:hover {
      color: #1d4ed8;
      opacity: 1;
    }
  }

  .footer-links {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    flex-wrap: wrap;
  }

  .footer-separator {
    color: #cbd5e1;
  }

  .footer-copyright {
    font-size: 0.875rem;
    color: #94a3b8;
    margin: 0.5rem 0 0 0;
  }
`

export default FooterSection
