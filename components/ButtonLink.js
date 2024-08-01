import Link from "next/link";

export default function ButtonLink(props) {
  const { className, children } = props;
  return (
    <Link
      href={props.href}
      className={`rounded-full border-none px-4 py-3 shadow-md transition-colors duration-50 text-white bg-brand-blue-default hover:bg-brand-blue-darker inline-block ${
        className ?? ``
      }`}
    >
      {children}
    </Link>
  );
}
