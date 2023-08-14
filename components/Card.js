export default function Card(props) {
    return (
        <div className="rounded-lg border border-gray-400 dark:border-brand-dark-lighter bg-white dark:bg-brand-dark-default flex flex-col lg:flex-row shadow-lg">
            {props.children}
        </div>
    )
}