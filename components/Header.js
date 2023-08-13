'use client'

import {useState} from "react";

import Navbar from "@/components/Navbar";
import Brand from "@/components/Brand";
import NavbarCollapsible from "@/components/NavbarCollapsible";
import NavbarLink from "@/components/NavbarLink";
import NavbarDropdown from "@/components/NavbarDropdown";
import NavbarDropdownLink from "@/components/NavbarDropdownLink";
import NavbarLinks from "@/components/NavbarLinks";

function Header() {
    const [isServicesExpanded, toggleServicesExpansion] = useState(false);

    function toggleServices() {
        toggleServicesExpansion(!isServicesExpanded);
    }

    return (
        /* navbar that stretches across the top of the page, fixed on
           desktop */
        <Navbar>
            <Brand src="/logo.png"
                   title="Santa Rosa Science and Technology High School"/>
            <NavbarCollapsible>
                <NavbarLinks>
                    <NavbarLink href="/announcements">Announcements</NavbarLink>
                    <NavbarLink href="/articles">Articles</NavbarLink>
                    <NavbarLink href="/clubs">Clubs</NavbarLink>
                    <NavbarDropdown title="Services" onClick={toggleServices} isExpanded={isServicesExpanded}>
                        <NavbarDropdownLink href="/services/for-students">For
                            Students</NavbarDropdownLink>
                        <NavbarDropdownLink
                            href="/services/registrar">Registrar</NavbarDropdownLink>
                        <NavbarDropdownLink
                            href="/services/guidance-counseling">Guidance
                            Counseling</NavbarDropdownLink>
                    </NavbarDropdown>
                </NavbarLinks>
                {/* separator for mobile */}
                <hr className="block lg:hidden w-full border-white my-4"/>
                <NavbarLinks alignLinks="right">
                    <NavbarLink href="/about">About</NavbarLink>
                    <NavbarLink href="/contact">Contact</NavbarLink>
                </NavbarLinks>
            </NavbarCollapsible>
        </Navbar>
    );
}

export default Header;