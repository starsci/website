import {Header} from "@/components/Header";
import {Logo} from "@/components/Logo";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClockRotateLeft, faHandshake, faScrewdriverWrench} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import {Card, CardContent} from "@/components/ui/card";
import {UrlObject} from "node:url";
import {Footer} from "@/components/Footer";
import {Page} from "@/components/Page";

type HeroButtonProps = {
    children: React.ReactNode;
    href: string | UrlObject;
}

const announcements = [
    {
        "title": "Lorem Ipsum",
        "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies ultricies.",
    },
    {
        "title": "Dolor Sit Amet",
        "excerpt": "Dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies ultricies.",
    },
    {
        "title": "Consectetur Adipiscing",
        "excerpt": "Consectetur adipiscing elit. Nullam nec purus nec nunc ultricies ultricies.",
    },
]

function HeroButton({children, href}: HeroButtonProps) {
    return (
        <Button variant="outline" size="lg"
                className="w-full bg-transparent hover:bg-brand-blue-default hover:border-brand-blue-default hover:text-white">
            <Link href={href} className="flex items-center">
                {children}
            </Link>
        </Button>
    );
}

export default function Home() {
    return (
        <Page>
            <main
                className="flex-grow flex-shrink-0 flex bg-gradient-to-tr from-brand-blue-darker to-brand-red-darker">
                <div className="flex-1 flex flex-col gap-4 justify-center items-center text-white p-10 container">
                    <Logo height={128} width={128}/>
                    <h1 className="text-4xl md:text-6xl text-center mt-6">Empowering Tomorrow&apos;s Leaders</h1>
                    <p className="text-lg md:text-2xl text-center mb-6">Discover boundless opportunities for growth
                        and
                        exploration at Santa
                        Rosa Science and Technology High School.
                        Our institution in Santa Rosa, Laguna, is dedicated to fostering innovation and nurturing
                        young
                        minds to become the trailblazers of the future in science and technology. Join us in shaping
                        a
                        world
                        where possibilities are limitless.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <Button size="lg"
                                className="w-full text-white transition-colors bg-brand-blue-default hover:bg-brand-blue-darker">
                            <Link href="/services" className="flex items-center">
                                <FontAwesomeIcon icon={faScrewdriverWrench} className="mr-3 h-6 w-6"/>
                                Explore Our Services
                            </Link>
                        </Button>
                        <HeroButton href="/contact">
                            <FontAwesomeIcon icon={faHandshake} className="mr-3 h-6 w-6"/>
                            Get in Touch
                        </HeroButton>
                        <HeroButton href="/about">
                            <FontAwesomeIcon icon={faClockRotateLeft} className="mr-3 h-6 w-6"/>
                            About Us
                        </HeroButton>
                    </div>
                </div>
            </main>
            <section>
                <div className="px-8 py-14 w-full text-white flex flex-col gap-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 container">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl">Announcements</h2>
                            <hr className="border-t border-neutral-500"/>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl">The Satellite</h2>
                            <hr className="border-t border-neutral-500"/>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl">Ang Pararayos</h2>
                            <hr className="border-t border-neutral-500"/>
                        </div>
                    </div>
                </div>
            </section>
        </Page>
    );
}
