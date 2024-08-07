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
        <header className="flex py-4 w-full shrink-0 items-center px-6 border-b bg-brand-blue-default">
            <MainNav leftLinks={leftLinks} rightLinks={rightLinks}/>
            <MobileNav leftLinks={leftLinks} rightLinks={rightLinks}/>
        </header>
    );
}