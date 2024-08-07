import {Header} from "@/components/Header";
import {Logo} from "@/components/Logo";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClockRotateLeft, faHandshake, faScrewdriverWrench} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import {Card, CardContent} from "@/components/ui/card";

type HeroButtonProps = {
    children: React.ReactNode;
    href: string;
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
        <>
            <div className="flex flex-col min-h-screen">
                <Header/>
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
            </div>
            <section
                className="w-full px-4 py-8 container bg-white dark:bg-slate-800 text-black dark:text-white flex flex-col gap-8">
                <div className="flex flex-col items-center gap-4">
                    <h2 className="text-2xl font-semibold">Announcements</h2>
                    <div className="flex flex-col gap-4 w-full">
                        {announcements.map((announcement, index) => (
                            <Card key={index} className="p-4">
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <div className="flex justify-center">
                                            <Image src="/assets/logo.png" alt="Placeholder" objectFit="cover"
                                                   className="h-32 w-auto md:h-24" width={0} height={0} sizes="100vw"/>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-xl font-semibold text-center md:text-left">{announcement.title}</h3>
                                            <p className="text-center md:text-left">{announcement.excerpt}</p>
                                        </div>
                                    </div>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex flex-col gap-4 items-center">
                        <h2 className="text-2xl font-semibold">The Satellite</h2>
                        <p className="text-lg text-center">To be a premier educational institution that nurtures and
                            empowers
                            students to become responsible, productive, and ethical citizens with the skills and
                            knowledge
                            to
                            meet the challenges of a rapidly changing world.</p>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <h2 className="text-2xl font-semibold">Pararayos</h2>
                        <p className="text-lg text-center">We value academic excellence, creativity, innovation,
                            integrity,
                            leadership, and teamwork. We are committed to providing a safe, supportive, and inclusive
                            environment that fosters intellectual curiosity, social responsibility, and lifelong
                            learning.</p>
                    </div>
                </div>
            </section>
        </>
    );
}
