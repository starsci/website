import {MobileNav} from "@/components/MobileNav";
import {MainNav} from "@/components/MainNav";

const leftLinks = [
    {name: "Home", href: "#"},
    {name: "News", href: "#"},
    {name: "Club Directory", href: "#"},
    {name: "Services", href: "#"},
];

const rightLinks = [
    {name: "About", href: "#"},
    {name: "Contact", href: "#"},
];

export function Header() {
    return (
        <header className="flex w-full shrink-0 items-center px-6 bg-brand-blue-default">
            <div className="py-4 px-6 items-center container flex">
                <MainNav leftLinks={leftLinks} rightLinks={rightLinks}/>
                <MobileNav leftLinks={leftLinks} rightLinks={rightLinks}/>
            </div>
        </header>
    );
}