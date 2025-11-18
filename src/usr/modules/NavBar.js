import * as React from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import styled from "styled-components"
import { withPrefix } from "gatsby"

const StickyMenu = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
`;

function FN_Navbar() {
  
  return (
    <StickyMenu>
      <Menu>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href={withPrefix(`/`)}>FortNet Project</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
            <Nav>
              <NavDropdown title="About" id="nav-dropdown">
                <NavDropdown.Item href={withPrefix('/objectives/')}>Objectives</NavDropdown.Item>
                <NavDropdown.Item href={withPrefix('/methodology/')}>Methodology</NavDropdown.Item>
                <NavDropdown.Item href={withPrefix('/deliverables/')}>
                  Deliverables
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href={withPrefix('/people/')}>Peolpe</NavDropdown.Item>
              </NavDropdown>
              
              <NavDropdown title="Activities" id="nav-dropdown">
                <NavDropdown.Item href={withPrefix('/field-research/')}>Field research</NavDropdown.Item>
                <NavDropdown.Item href={withPrefix('/team-meetings/')}>Team meetings</NavDropdown.Item>
                <NavDropdown.Item href={withPrefix('/workshop-and-conferences/')}>Workshop and conferences</NavDropdown.Item>
                <NavDropdown.Item href={withPrefix('/lectures-and-presentations/')}>Lectures and presentations</NavDropdown.Item>
                <NavDropdown.Item href={withPrefix('/public-engagement/')}>Public engagement</NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Item>
                <Nav.Link title="Fortnet Atlas" href={withPrefix('/atlas/')}>
                  Fortnet Atlas
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link title="Fortnet Atlas" href={withPrefix('/bibliography-geo-viewer/')}>
                  Bibliography Geo-viewer
                </Nav.Link>
              </Nav.Item>
              
              <Nav.Item>
                <Nav.Link title="Fortnet Atlas" href={withPrefix('/contacts/')}>
                  Contacts
                </Nav.Link>
              </Nav.Item>

            </Nav>
          </Container>
        </Navbar>
      </Menu>
    </StickyMenu>
  )
}

//style
const Menu = styled.div`
  .bg-body-tertiary {
    background-color: #ececec !important;
  }
`
export default FN_Navbar
