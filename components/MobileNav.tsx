import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {MenuIcon} from "lucide-react";
import Link from "next/link";
import {Logo} from "@/components/Logo";
import {NavProps} from "@/components/types/NavProps";

function NavLink(props: { name: string, href: string }) {
    const {name, href} = props;
    return (
        <Link href={href}
              className="flex w-full items-center py-2 text-lg font-semibold hover:underline"
              prefetch={false}>
            {name}
        </Link>
    );
}

export function MobileNav(props: NavProps) {
    const {leftLinks, rightLinks} = props;
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon"
                        className="md:hidden ml-auto bg-brand-blue-default text-white">
                    <MenuIcon className="h-6 w-6"/>
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-neutral-800">
                <Link href="#" className="mr-6 lg:flex" prefetch={false}>
                    <Logo/>
                </Link>
                <div className="grid gap-2 py-6 text-white">
                    {leftLinks.map((link) => (
                        <NavLink name={link.name} href={link.href}
                                 key={link.name}/>
                    ))}
                    <hr className="border-t border-neutral-500"/>
                    {rightLinks.map((link) => (
                        <NavLink name={link.name} href={link.href}
                                 key={link.name}/>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    );
}