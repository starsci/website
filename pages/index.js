import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import {useElementSize} from "usehooks-ts";
import ButtonLink from "@/components/ButtonLink";
import Page from "@/components/Page";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBullhorn} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    const subheadingRef = useRef(null);
    const [headingRef, {width}] = useElementSize();

    return (
        <Page>
            <div
                className="relative flex flex-grow items-center justify-center pb-6 text-white">
                <div
                    className="lg:grid grid-flow-row auto-cols-max flex flex-col space-y-4 lg:space-x-4">
                    {/* logo */}
                    <div
                        className="flex flex-grow items-center justify-center">
                        <div className="h-32 w-32 relative">
                            <Image src="/logo.png" alt="logo" fill
                                   objectFit="cover"/>
                        </div>
                    </div>
                    {/* vertical line */}
                    <div className="hidden lg:flex flex-col flex-grow">
                        <div className="flex-grow w-[2px] bg-white"/>
                    </div>
                    {/* text */}
                    <div className="text-center sm:text-left">
                        <h1 className="text-4xl font-bold inline-block"
                            ref={headingRef}>Empowering
                            Tomorrow&apos;s Innovators</h1>
                        <p className="text-lg mt-2 leading-tight"
                           style={{maxWidth: width}}
                           ref={subheadingRef}>Discover boundless
                            opportunities for growth and exploration at
                            Santa Rosa Science and Technology High
                            School. Our institution in Santa Rosa,
                            Laguna, is dedicated to fostering innovation
                            and nurturing young minds to become the
                            trailblazers of the future in science and
                            technology. Join us in shaping a world where
                            possibilities are limitless.</p>
                    </div>
                    <div
                        className="flex justify-center lg:justify-start col-start-3">
                        <ButtonLink href="/announcements">
                            <FontAwesomeIcon icon={faBullhorn}
                                             className="mr-2"/>
                            Read Announcements
                        </ButtonLink>
                    </div>

                </div>
            </div>
        </Page>
    )
}
