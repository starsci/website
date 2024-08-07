import Image from "next/image";

export function Logo() {
    return <Image src="/assets/logo.png" alt="Santa Rosa Science and Technology High School" width={0} height={0}
                  className="rounded-full h-10 w-10" sizes="100vw"/>;
}