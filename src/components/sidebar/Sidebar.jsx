import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import Permissions from '@mui/icons-material/AccountTree';

const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className="top"><span className="logo">flutinAdmin</span></div>
            <hr/>
            <div className="center">
                <ul>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <PeopleAltIcon className="icon"/>
                        <span>Users</span>
                    </li>
                    <li>
                        <EventSeatIcon className="icon"/>
                        <span>Events</span>
                    </li>
                    <li>
                        <SubscriptionsIcon className="icon"/>
                        <span>Subscription</span>
                    </li>
                    <li>
                        <Permissions className="icon"/>
                        <span>Permissions</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOptions"></div>
                <div className="colorOptions"></div>
            </div>
        </div>
    )
}

export default Sidebar