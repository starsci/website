"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Brand from "@/components/Brand";
import NavbarCollapsible from "@/components/NavbarCollapsible";
import NavbarLink from "@/components/NavbarLink";
import NavbarDropdown from "@/components/NavbarDropdown";
import NavbarDropdownLink from "@/components/NavbarDropdownLink";
import NavbarLinks from "@/components/NavbarLinks";

function Header() {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [newsExpanded, setNewsExpanded] = useState(false);

  function toggleServicesExpanded() {
    setServicesExpanded(!servicesExpanded);
  }

  function toggleNewsExpanded() {
    setNewsExpanded(!newsExpanded);
  }

  return (
    /* navbar that stretches across the top of the page, fixed on
           desktop */
    <Navbar>
      <Brand
        src="/logo.png"
        title="Santa Rosa Science and Technology High School"
      />
      <NavbarCollapsible>
        <NavbarLinks>
          <NavbarLink href="/announcements">Announcements</NavbarLink>
          <NavbarDropdown
            title="News"
            onClick={toggleNewsExpanded}
            isExpanded={newsExpanded}
          >
            <NavbarDropdownLink href="http://localhost">
              Ang Pararayos
            </NavbarDropdownLink>
            <NavbarDropdownLink href="http://localhost">
              The Satellite
            </NavbarDropdownLink>
          </NavbarDropdown>
          <NavbarLink href="/clubs">Clubs</NavbarLink>
          <NavbarDropdown
            title="Services"
            onClick={toggleServicesExpanded}
            isExpanded={servicesExpanded}
          >
            <NavbarDropdownLink href="/services/for-students">
              For Students
            </NavbarDropdownLink>
            <NavbarDropdownLink href="/services/registrar">
              Registrar
            </NavbarDropdownLink>
            <NavbarDropdownLink href="/services/guidance-counseling">
              Guidance Counseling
            </NavbarDropdownLink>
          </NavbarDropdown>
        </NavbarLinks>
        {/* separator for mobile */}
        <hr className="block lg:hidden w-full border-white my-4" />
        <NavbarLinks alignLinks="right">
          <NavbarLink href="/about">About</NavbarLink>
          <NavbarLink href="/contact">Contact</NavbarLink>
        </NavbarLinks>
      </NavbarCollapsible>
    </Navbar>
  );
}

export default Header;
