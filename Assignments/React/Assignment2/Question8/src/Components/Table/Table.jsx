import "./Table.css"


function Table( {orders} ) {
  return (
    <table id="table" >
        <thead>
            <tr>
                <th>orderId</th>
                <th>customer</th>
                <th>amount</th>
            </tr>
        </thead>
        <tbody>
            {orders.map((order, index) => (
                    <tr key={index}>
                        <td>{order.orderId}</td>
                        <td>{order.customer}</td>
                        <td>{order.amount}</td>
                    </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Table;