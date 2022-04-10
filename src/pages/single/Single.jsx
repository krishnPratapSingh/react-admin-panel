import "./single.scss"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/charts/Charts"
import Table from "../../components/table/Table"

const Single = () => {
    return(
        <div className="single">
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="itemImg" />
                            <div className="details">
                                <h3 className="itemTitle">Jane Doe</h3>
                                <div className="detailItem">
                                    <span className="itemKey">SubDomain:</span>
                                    <span className="itemValue">SubDomain</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">City, Country, TimeZone</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">SUbscription:</span>
                                    <span className="itemValue">janeDoe@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Earnings:</span>
                                    <span className="itemValue">Total || Available</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={4/1} title={`Last Six Months Of Streaming`} />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Recent Events</h1>
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default Single