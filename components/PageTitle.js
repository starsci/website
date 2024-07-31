export default function PageTitle(props) {
    const {children} = props;
    return <h1 className="text-4xl font-bold mb-6 sm:text-center">{children}</h1>;
}