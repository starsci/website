import Header from "@/components/Header";
import {useEffect, useState} from "react";

function Page(props) {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <div
                className={`flex-grow flex ${props.isContent ? `lg:bg-hero` : `bg-hero`} bg-cover bg-fixed relative`}>
                <div
                    className={`absolute inset-0 bg-gradient-to-br from-brand-blue-darker via-brand-red-darker to-brand-yellow-darker opacity-50 ${props.isContent ? `lg:block hidden` : `block`}`}/>
                <main
                    className={`lg:container flex mx-auto flex-grow ${props.isContent ? `lg:bg-white shadow-2xl` : `bg-none`} relative transition-opacity duration-400`}
                    style={{
                        opacity: domLoaded ? 1 : 0,
                    }}>
                    <div className="flex flex-grow flex-col p-6">
                        {props.children}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Page;