"use client";

import Link from "next/link";
import Image from "next/image"
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";

export function Footer() {
    // get the current year
    const [year, setYear] = useState(0)
    useEffect(() => {
        setYear(new Date().getFullYear())
    }, [])

    return (
        <footer
            className="flex flex-col md:flex-row items-center bg-gray-800 text-white text-sm p-6 justify-center space-y-2">
            <div
                className="flex justify-center w-full md:w-auto space-x-2 border-b pb-8 mb-8 md:pb-0 md:mb-0 md:pr-4 md:border-r md:border-b-0 border-white">
                <Image width={0} height={0} sizes="100vw" src="/assets/logo.png"
                       alt="SRSTHS Logo"
                       className="w-16 h-16 object-cover rounded-full"/>
                <Image width={0} height={0} sizes="100vw"
                       src="/assets/system.png" alt="SYSTEM Logo"
                       className="w-16 h-16 object-cover rounded-full"/>
            </div>
            <div
                className="flex flex-col md:pl-4 space-y-4 text-center md:text-left">
                {/* SSLG Links */}
                <div className="space-y-2">
                    <span className="font-bold">Contact SRSTHS</span>
                    <div
                        className="flex flex-row space-x-2 justify-center md:justify-start">
                        <Link href="https://www.facebook.com/starsciSSLG">
                            <FontAwesomeIcon icon={faFacebook}
                                             className="w-6 h-6"/>
                        </Link>
                        <Link href="tel:+639087051053">
                            <FontAwesomeIcon icon={faPhone}
                                             className="w-6 h-6"/>
                        </Link>
                        <Link href="mailto:307902@deped.gov.ph">
                            <FontAwesomeIcon icon={faEnvelope}
                                             className="w-6 h-6"/>
                        </Link>
                    </div>
                </div>
                {/* Contact */}
                <div>
                    <span className="font-bold">&copy; {year} Made with ❤️ by the SYSTEM Club</span>
                </div>
            </div>
        </footer>
    )
}