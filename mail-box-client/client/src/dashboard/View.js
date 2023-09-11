function Viewed(props){
    return (
        <div>
            <h1>{props.sub}</h1>
            <h3>{props.sender}</h3>
            <p>{props.message}</p>
        </div>
    )
}
export default Viewed;