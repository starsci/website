import Header from "@/components/Header";
import { useEffect, useState } from "react";
import $ from "jquery";
import Footer from "./Footer";
import BouncingScrollDownIndicator from "./BouncingScrollIndicator";
import PageTitle from "./PageTitle";

function Page(props) {
  const [domLoaded, setDomLoaded] = useState(false);
  const { isContent, noPadding, title, children } = props;

  useEffect(() => {
    $(() => {
      setDomLoaded(true);
    });
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div
          className={`flex-grow flex ${
            isContent ? `lg:bg-hero` : `bg-hero`
          } bg-cover bg-fixed relative`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br from-brand-blue-darker via-brand-red-darker to-brand-yellow-darker opacity-70 ${
              isContent ? `lg:block hidden` : `block`
            }`}
          />
          <main
            className={`flex mx-auto flex-grow ${
              isContent
                ? `lg:container bg-gray-100 dark:bg-brand-dark-default shadow-2xl`
                : `bg-none`
            } relative`}
          >
            <div
              className={`flex flex-grow flex-col transition-opacity duration-400 ${
                noPadding ? `` : `p-6`
              }`}
              style={{
                opacity: domLoaded ? 1 : 0,
              }}
            >
              <PageTitle>{title}</PageTitle>
              {children}
            </div>
          </main>
        </div>
      </div>
      {props.extra && <section>{props.extra}</section>}
      <Footer id="footer" />

      <BouncingScrollDownIndicator bottomId="footer" />
    </>
  );
}

export default Page;
