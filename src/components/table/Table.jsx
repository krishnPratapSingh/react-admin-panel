import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {

    const rows = [
        {
            userId: "3456",
            name: "Luca Carducci",
            userImg: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            product: "AppSumo tier 1",
            amount: "200",
            date: "22-03-22",
            time: "03:25 P.M.",
            status: "Completed",
        },
        {
            userId: "2312",
            name: "John Doe",
            userImg: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            product: "AppSumo tier 3",
            amount: "400",
            date: "22-03-22",
            time: "03:25 P.M.",
            status: "Pending",
        },
        {
            userId: "2367",
            name: "Vincent Chase",
            userImg: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            product: "AppSumo tier 2",
            amount: "300",
            date: "22-03-22",
            time: "03:25 P.M.",
            status: "Failed",
        },
    ]

    return(
        <TableContainer component={Paper} className="table">
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell className="tableCell">UserId</TableCell>
                    <TableCell className="tableCell">Name</TableCell>
                    <TableCell className="tableCell">Product</TableCell>
                    <TableCell className="tableCell">Amount</TableCell>
                    <TableCell className="tableCell">Date</TableCell>
                    <TableCell className="tableCell">Time</TableCell>
                    <TableCell className="tableCell">Status</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.userId}>
                    <TableCell className="tableCell">{row.userId}</TableCell>
                    <TableCell className="tableCell">
                        <div className="cellWrapper">
                            <img src={row.userImg} alt="" className="image"/>
                            {row.name}
                        </div>
                    </TableCell>
                    <TableCell className="tableCell">{row.product}</TableCell>
                    <TableCell className="tableCell">{row.amount}</TableCell>
                    <TableCell className="tableCell">{row.date}</TableCell>
                    <TableCell className="tableCell">{row.time}</TableCell>
                    <TableCell className="tableCell">
                        <span className={`status ${row.status}`}>
                            {row.status}
                        </span>
                    </TableCell>
                    
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default List