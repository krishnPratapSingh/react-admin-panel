import "./widget.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EmergencyRecordingOutlinedIcon from '@mui/icons-material/EmergencyRecordingOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({ type }) => {

    let data

    const amount = 200
    const diff = 20

    switch(type){
        case "user":
            data = {
                title: "Users",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlinedIcon className="icon" style={{
                    color: "crimson",
                    backgroundColor: "rgba(255, 0, 0, 0.2)",
                }} />,
            };
            break;
        case "event":
            data = {
                title: "Events",
                isMoney: false,
                link: "See all events",
                icon: <EmergencyRecordingOutlinedIcon className="icon" style={{
                    color: "goldenrod",
                    backgroundColor: "rgba(218, 135, 32, 0.2)",
                }} />,
            };
            break;
        case "subscription":
            data = {
                title: "Subscription",
                isMoney: false,
                link: "See all subscriptions",
                icon: <SubscriptionsIcon className="icon" style={{
                    color: "green",
                    backgroundColor: "rgba(0, 128, 0, 0.2)",
                }} />,
            };
            break;
        case "earning":
            data = {
                title: "Earning",
                isMoney: true,
                link: "See details",
                icon: <MonetizationOnOutlinedIcon className="icon" style={{
                    color: "purple",
                    backgroundColor: "rgba(128, 0, 128, 0.2)",
                }} />,
            };
            break;
        default:
            break;
    }

    return(
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">
                    {data.isMoney && "$"} {amount}
                </span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpOutlinedIcon/>
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget