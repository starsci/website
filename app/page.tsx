import {Logo} from "@/components/Logo";
import {Button} from "@/components/ui/button";
import {Page} from "@/components/Page";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faClockRotateLeft, faFileSignature, faGraduationCap, faHandHoldingHand,
    faHandshake,
    faScrewdriverWrench
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

import {UrlObject} from "node:url";
import {ScrollArea} from "@/components/ui/scroll-area";
import {
    getAngPararayos,
    getAnnouncements,
    getTheSatellite, News, NewsWithoutThumbnail
} from "@/functions/news";
import Image from "next/image";

type HeroButtonProps = {
    children: React.ReactNode;
    href: string;
}

type NewsListProps = {
    news: (News | NewsWithoutThumbnail)[];
    withThumbnail?: boolean;
    href: string;
}

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

function NewsList({news, withThumbnail = true, href}: NewsListProps) {
    return (
        <div>
            <ScrollArea className="h-80 mb-4">
                {news.map((news, index) => (
                    <div key={index}
                         className="flex flex-col lg:flex-row gap-4 mb-4">
                        {withThumbnail && 'thumbnail' in news &&
                            <Image src={news.thumbnail} alt={news.title}
                                   width={0} height={0}
                                   className="object-contain w-full lg:w-1/3 h-auto mb-auto"
                                   sizes="100vw"/>}
                        <div className="flex flex-col">
                            <h3 className="text-lg leading-6">
                                <Link className="hover:underline"
                                      href={`/news/${news.slug}`}>
                                    {news.title}
                                </Link>
                            </h3>
                            <h4 className="text-sm text-neutral-400">{news.date.toLocaleDateString()}</h4>
                            <p className="text-sm line-clamp-2 md:line-clamp-3">
                                {news.body}
                            </p>
                        </div>
                    </div>
                ))}
            </ScrollArea>
            <Link href={href}
                  className="text-md hover:underline font-semibold gap-x-2 flex items-center">
                Read More
                <FontAwesomeIcon icon={faArrowRight}/>
            </Link>
        </div>
    );
}

export default function Home() {
    const announcements = getAnnouncements();
    const theSatellite = getTheSatellite();
    const angPararayos = getAngPararayos();

    return (
        <Page>
            <main
                className="flex-grow flex-shrink-0 flex bg-gradient-to-tr from-brand-blue-darker to-brand-red-darker">
                <div
                    className="flex-grow">
                    <div
                        className="flex flex-col gap-4 mx-auto justify-center items-center text-white p-10 w-full lg:w-2/3">
                        <Logo height={128} width={128}/>
                        <h1 className="text-4xl text-center mt-6">
                            Empowering Tomorrow&apos;s Leaders
                        </h1>
                        <p className="text-lg text-center mb-6">
                            Discover boundless opportunities for growth and
                            exploration at Santa Rosa Science and Technology
                            High School. Our institution in Santa Rosa, Laguna,
                            is dedicated to fostering innovation and nurturing
                            young minds to become the trailblazers of the future
                            in science and technology. Join us in shaping a
                            world where possibilities are limitless.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <Button size="lg"
                                    className="w-full text-white transition-colors bg-brand-blue-default hover:bg-brand-blue-darker">
                                <Link href="/services"
                                      className="flex items-center">
                                    <FontAwesomeIcon icon={faScrewdriverWrench}
                                                     className="mr-3 h-6 w-6"/>
                                    Explore Our Services
                                </Link>
                            </Button>
                            <HeroButton href="/contact">
                                <FontAwesomeIcon icon={faHandshake}
                                                 className="mr-3 h-6 w-6"/>
                                Get in Touch
                            </HeroButton>
                            <HeroButton href="/about">
                                <FontAwesomeIcon icon={faClockRotateLeft}
                                                 className="mr-3 h-6 w-6"/>
                                About Us
                            </HeroButton>
                        </div>
                    </div>
                </div>
            </main>
            <section
                className="px-8 py-14 w-full text-white flex flex-col gap-4">
                <h2 className="text-2xl text-center font-semibold">
                    School Services
                </h2>
                <p className="text-lg text-center lg:w-1/2 md:mx-auto">
                    Discover the wide range of services we offer to support our
                    students&apos; academic and personal growth.
                </p>
                <div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8 mt-8 place-items-center">
                    <div className="flex flex-col gap-2 w-2/3 lg:w-full">
                        <FontAwesomeIcon className="h-12 w-12 mx-auto"
                                         icon={faFileSignature}/>
                        <h3 className="text-xl font-semibold text-center">Registrar
                            Services</h3>
                        <p className="text-center">Learn more about our
                            registrar services, including
                            enrollment, records, and more.</p>
                    </div>
                    <div className="flex flex-col gap-2 w-2/3 lg:w-full">
                        <FontAwesomeIcon className="h-12 w-12 mx-auto"
                                         icon={faHandHoldingHand}/>
                        <h3 className="text-xl font-semibold text-center">Counseling
                            Services</h3>
                        <p className="text-center">
                            Explore our counseling services, including
                            guidance, mental health, and more.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 w-2/3 lg:w-full">
                        <FontAwesomeIcon className="h-12 w-12 mx-auto"
                                         icon={faGraduationCap}/>
                        <h3 className="text-xl font-semibold text-center">
                            Academic Services
                        </h3>
                        <p className="text-center">
                            Discover our academic services, including
                            tutoring, scholarships, and more.
                        </p>
                    </div>
                </div>
            </section>
            <hr className="border-t border-neutral-700"/>
            <section
                className="px-8 py-14 w-full text-white flex flex-col gap-8">
                <div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-10 container">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-semibold">Announcements</h2>
                        <hr className="border-t border-neutral-500"/>
                        <NewsList news={announcements}
                                  href="/news/announcements"
                                  withThumbnail={false}/>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-semibold">The
                            Satellite</h2>
                        <hr className="border-t border-neutral-500"/>
                        <NewsList news={theSatellite}
                                  href="/news/the-satellite"/>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-semibold">Ang
                            Pararayos</h2>
                        <hr className="border-t border-neutral-500"/>
                        <NewsList news={angPararayos}
                                  href="/news/ang-pararayos"/>
                    </div>
                </div>
            </section>
        </Page>
    );
}
