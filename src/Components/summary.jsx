const Summary = ({data}) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">{data.name}
                    <span>₹{data.price}</span>
                  </li>
    )
}
export default Summary;