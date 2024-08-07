import {Header} from "@/components/Header";
import {Logo} from "@/components/Logo";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <div
                className="flex-1 flex bg-gradient-to-tr from-brand-blue-darker to-brand-red-darker">
                <div className="flex-1 flex flex-col gap-4 justify-center items-center text-white p-10 container">
                    <Logo height={128} width={128}/>
                    <h1 className="text-4xl md:text-6xl text-center mt-6">Empowering Tomorrow&apos;s Leaders</h1>
                    <p className="text-lg md:text-2xl text-center mb-6">Discover boundless opportunities for growth and
                        exploration at Santa
                        Rosa Science and Technology High School.
                        Our institution in Santa Rosa, Laguna, is dedicated to fostering innovation and nurturing young
                        minds to become the trailblazers of the future in science and technology. Join us in shaping a
                        world
                        where possibilities are limitless.</p>
                    <hr className="border-t border-white w-full lg:w-1/2"/>
                </div>
            </div>
        </div>
    );
}
