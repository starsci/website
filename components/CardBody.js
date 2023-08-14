export default function CardBody(props) {
    return (
        <div className="p-4 flex-grow relative">
            {props.children}
        </div>
    )
}