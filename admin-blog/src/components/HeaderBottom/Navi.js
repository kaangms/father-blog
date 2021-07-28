import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,

  
} from "reactstrap";
import logo from "../../images/Logo/logo.png";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
   

 <Navbar color="red" light expand="md">
        <NavbarBrand href="/anasayfa">
          {" "}
          <img src={logo} alt="Logo" />
        </NavbarBrand>
        

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>           
          <NavItem >
              <NavLink href="/">Anasayfa</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Çözümler
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/1212" >
                Yönetim
                </DropdownItem>
                <DropdownItem href="/1212" >
                Stratejik Yönetim
                </DropdownItem>
              
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/blog">
                Blog
              </NavLink>
            </NavItem>
                     
            <NavItem>
              <NavLink href="/akademik-yazilar">
                Akademik Yazılar
              </NavLink>
            </NavItem>
            <NavItem >
              <NavLink href="/hakkinda">Hakkında</NavLink>
            </NavItem>
    
           
              <NavItem>
              <NavLink href="/iletisim">
                İletişim
              </NavLink>
            </NavItem>
          </Nav>
        
        </Collapse>
     
      </Navbar>

    
     
      <hr/>
    </div>
  );
};

export default Navi;
