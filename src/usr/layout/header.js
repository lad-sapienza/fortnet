import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Container } from "react-bootstrap"
import nextGenEu from "../images/nextGenEu.png"
import mur from "../images/mur.png"
import italiaDomani from "../images/italia-domani.png"
import uniboWhite from "../images/unibo-white.png"
import sapienzaWhite from "../images/sapienza-white.png"
import fortnetLogo from "../images/fortnet-logo.jpg"

const HeaderSection = () => (
  <Header>
    <Container>
      <div className="header-content">
        <Link to={"/"} className="logo-link">
          <img
            src={fortnetLogo}
            alt="FortNet Project"
            className="logo-image"
          />
        </Link>
        <div className="header-text">
          <h1 className="header-title">FortNet</h1>
          <p className="header-description">
            Fortification and population network in coastal Chaonia, Northern Epirus (Albania) between Iron Age and the Medieval period: a longue durée approach to the study of settlements, economic and defensive systems
          </p>
          <h2 className="text-light border-top mt-3 pt-1">PRIN 2022 Research Project</h2>
          <LogoBar>
            <img src={nextGenEu} alt="Programma della Communità Europea Next Generation EU" />
            <Divider />
            <img src={mur} alt="Ministero dell'Università e della Ricerca (MUR)" />
            <Divider />
            <img src={italiaDomani} alt="Agezia “Italia Domani” Piano Nazionale di Ripresa e Resilienza" />
            <Divider />
            <img src={uniboWhite} alt="Università di Bologna" />
            <Divider />
            <img src={sapienzaWhite} alt="Sapienza Università di Roma" />
          </LogoBar>
        </div>
      </div>
    </Container>
  </Header>
)

const LogoBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
  
  img {
    height: 50px;
    width: auto;
    object-fit: contain;
    
    @media (max-width: 768px) {
      height: 40px;
    }
  }
  
  @media (max-width: 768px) {
    justify-content: center;
    gap: 1rem;
  }
`

const Divider = styled.div`
  width: 2px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  
  @media (max-width: 768px) {
    height: 40px;
    display: none;
  }
`

const Header = styled.header`
  background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%);
  color: #ffffff;
  padding: 2.5rem 0;
  margin-bottom: 3rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  .header-content {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    
    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
      gap: 1.5rem;
    }
  }

  .logo-link {
    flex-shrink: 0;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.02);
      opacity: 1;
    }
  }

  .logo-image {
    max-width: 300px;
    width: 100%;
    height: auto;
    border-radius: 0.75rem;
    background-color: #ffffff;
    padding: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
    
    @media (max-width: 768px) {
      max-width: 250px;
    }
  }

  .header-text {
    flex: 1;
  }

  .header-title {
    font-family: 'Jost', 'Futura', 'Century Gothic', sans-serif;
    font-size: 3.5rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    letter-spacing: 0.05em;
    color: #ffffff;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  .header-description {
    font-size: 1.125rem;
    line-height: 1.6;
    margin: 0;
    color: rgba(255, 255, 255, 0.95);
    font-weight: 400;
    max-width: 700px;
    
    @media (max-width: 768px) {
      font-size: 1rem;
      br {
        display: none;
      }
    }
  }
`

export default HeaderSection
