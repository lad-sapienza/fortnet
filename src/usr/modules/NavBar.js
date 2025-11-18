import * as React from "react"
import { useState } from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import styled from "styled-components"
import { withPrefix } from "gatsby"

const StickyMenu = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
`

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  svg {
    width: 2rem;
    height: 2rem;
    transition: all 0.2s;
  }
`

function FN_Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleToggle = () => setMenuOpen(open => !open)
  return (
    <StickyMenu>
      <Menu>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href={withPrefix(`/`)}>FortNet Project</Navbar.Brand>
            <IconButton
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={handleToggle}
              aria-controls="basic-navbar-nav"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                // X icon
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </IconButton>
            <Navbar.Collapse id="basic-navbar-nav" in={menuOpen}>
              <Nav>
                <NavDropdown title="About" id="nav-dropdown">
                  <NavDropdown.Item href={withPrefix("/objectives/")}>
                    Objectives
                  </NavDropdown.Item>
                  <NavDropdown.Item href={withPrefix("/methodology/")}>
                    Methodology
                  </NavDropdown.Item>
                  <NavDropdown.Item href={withPrefix("/deliverables/")}>
                    Deliverables
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href={withPrefix("/people/")}>
                    Peolpe
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Activities" id="nav-dropdown">
                  <NavDropdown.Item href={withPrefix("/field-research/")}>
                    Field research
                  </NavDropdown.Item>
                  <NavDropdown.Item href={withPrefix("/team-meetings/")}>
                    Team meetings
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href={withPrefix("/workshop-and-conferences/")}
                  >
                    Workshop and conferences
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href={withPrefix("/lectures-and-presentations/")}
                  >
                    Lectures and presentations
                  </NavDropdown.Item>
                  <NavDropdown.Item href={withPrefix("/public-engagement/")}>
                    Public engagement
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Item>
                  <Nav.Link title="Fortnet Atlas" href={withPrefix("/atlas/")}>
                    Fortnet Atlas
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link
                    title="Fortnet Atlas"
                    href={withPrefix("/bibliography-geo-viewer/")}
                  >
                    Bibliography Geo-viewer
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link
                    title="Fortnet Atlas"
                    href={withPrefix("/contacts/")}
                  >
                    Contacts
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
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
