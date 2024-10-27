export default function Card(props) {
    const {className, children} = props;
    return (
        <div className={`rounded-lg border border-gray-400 dark:border-brand-dark-lighter bg-white dark:bg-brand-dark-default flex flex-col shadow-lg ${className}`}>
            {children}
        </div>
    )
}