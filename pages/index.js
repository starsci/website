import Image from "next/image";
import { useRef } from "react";
import { useElementSize } from "usehooks-ts";
import ButtonLink from "@/components/ButtonLink";
import Page from "@/components/Page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faHandshake,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const subheadingRef = useRef(null);
  const [headingRef, { width }] = useElementSize();

  return (
    <Page
      noPadding
      extra={
        <div className="flex flex-col items-center p-6 justify-center space-y-4 bg-white text-black dark:bg-brand-dark-default dark:text-white">
          <h2 className="text-3xl font-bold mb-4">Our Administrators</h2>
          {/* 2 columns on desktop, 1 column 2 rows on mobile */}
          <div className="flex flex-col items-center space-y-2">
            <Image
              src="/principal.jpg"
              alt="Principal"
              width={200}
              height={200}
              className="rounded-full object-cover"
            />
            <h3 className="text-xl font-bold">Alvin D. Sta. Maria, EdD</h3>
            <p className="text-lg">Principal III</p>
          </div>
        </div>
      }
    >
      <div className="relative flex flex-grow items-center justify-center p-6 text-white">
        <div className="lg:grid grid-flow-row auto-cols-max flex flex-col space-y-4 lg:space-x-4">
          {/* logo */}
          <div className="flex flex-grow items-center justify-center">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src="/logo.png"
              alt="logo"
              className="h-32 w-32 object-cover"
            />
          </div>
          {/* vertical line */}
          <div className="hidden lg:flex flex-col flex-grow">
            <div className="flex-grow w-[2px] bg-white" />
          </div>
          {/* text */}
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold inline-block" ref={headingRef}>
              Empowering Tomorrow&apos;s Innovators
            </h1>
            <p
              className="text-lg mt-2 leading-tight"
              style={{ maxWidth: width }}
              ref={subheadingRef}
            >
              Discover boundless opportunities for growth and exploration at
              Santa Rosa Science and Technology High School. Our institution in
              Santa Rosa, Laguna, is dedicated to fostering innovation and
              nurturing young minds to become the trailblazers of the future in
              science and technology. Join us in shaping a world where
              possibilities are limitless.
            </p>
          </div>
          <div className="flex col-start-3 justify-center lg:justify-start">
            <div className="flex flex-col sm:flex-row sm:space-x-2 sm:space-y-0 space-y-1">
              <ButtonLink
                href="/services"
                className=" text-brand-dark-default bg-brand-yellow-default hover:bg-brand-yellow-darker"
              >
                <FontAwesomeIcon icon={faTools} className="mr-2" />
                Explore Our Services
              </ButtonLink>
              <ButtonLink href="/contact">
                <FontAwesomeIcon icon={faHandshake} className="mr-2" />
                Get in Touch
              </ButtonLink>
              <ButtonLink href="/announcements">
                <FontAwesomeIcon icon={faBullhorn} className="mr-2" />
                Read Announcements
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
