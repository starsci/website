import {Header} from "@/components/Header";
import {Logo} from "@/components/Logo";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <div
                className="flex flex-col flex-1 gap-4 bg-gradient-to-tr from-brand-blue-darker to-brand-red-darker justify-center items-center text-white p-10">
                <Logo/>
                <h1 className="text-4xl md:text-6xl text-center">Empowering Tomorrow&apos;s Leaders</h1>
                <p className="text-lg md:text-2xl text-center">Discover boundless opportunities for growth and
                    exploration at Santa
                    Rosa Science and Technology High School.
                    Our institution in Santa Rosa, Laguna, is dedicated to fostering innovation and nurturing young
                    minds to become the trailblazers of the future in science and technology. Join us in shaping a world
                    where possibilities are limitless.</p>
            </div>
        </div>
    );
}
