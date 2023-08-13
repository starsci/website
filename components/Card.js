export default function Card(props) {
    return (
        <div className="rounded-lg border border-gray-400 bg-white flex flex-col lg:flex-row shadow-lg">
            {props.children}
        </div>
    )
}