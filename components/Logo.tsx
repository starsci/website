import Image from "next/image";

export type LogoProps = {
    height?: number;
    width?: number;
}

export function Logo({height = 40, width = 40}: LogoProps) {

    return <Image src="/assets/logo.png"
                  alt="Santa Rosa Science and Technology High School"
                  width={width} height={height}
                  className="rounded-full" sizes="100vw"/>;
}