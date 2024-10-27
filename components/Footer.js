import Image from "next/image"
import { faFacebook, faTwitter, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Footer(props) {
    // get the current year
    const [year, setYear] = useState(0)
    useEffect(() => {
        setYear(new Date().getFullYear())
    }, [])

    return (
        <footer className="flex flex-col md:flex-row items-center bg-gray-800 text-white text-sm p-6 justify-center space-y-2" id={props.id}>
            <div className="flex justify-center w-full md:w-auto space-x-2 border-b pb-4 md:pb-0 md:pr-4 md:border-r md:border-b-0 border-white">
                <Image width={0} height={0} sizes="100vw" src="/sslg.png" alt="SSLG Logo" className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full" />
                <Image width={0} height={0} sizes="100vw" src="/system.png" alt="SYSTEM Logo" className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full" />
            </div>
            <div className="flex flex-col md:pl-4 space-y-4 text-center md:text-left">
                {/* SSLG Links */}
                <div className="space-y-2">
                    <span className="font-bold">SSLG Socials</span>
                    <div className="flex flex-row space-x-2 justify-center md:justify-start">
                        <Link href="https://www.facebook.com/starsciSSLG">
                            <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
                        </Link>
                        <Link href="https://www.instagram.com/sslgstarsci">
                            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                        </Link>
                        <Link href="https://twitter.com/sslgstarsci">
                            <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
                        </Link>
                        <Link href="https://www.tiktok.com/@sslgstarsci">
                            <FontAwesomeIcon icon={faTiktok} className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
                {/* Contact */}
                <div>
                    <span className="font-bold">&copy; {year} Made with ❤️ by the SYSTEM Club and SSLG</span>
                </div>

            </div>
        </footer>
    )
}