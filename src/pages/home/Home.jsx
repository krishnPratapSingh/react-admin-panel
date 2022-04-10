import "./home.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/charts/Charts"
import Table from "../../components/table/Table"

const Home = () => {
    return(
        <div className="home">
            {/* <Sidebar/> */}
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="event" />
                    <Widget type="subscription" />
                    <Widget type="earning" />
                </div>
                <div className="charts">
                    <Featured/>
                    <Chart aspect={2/1} title={`Last Six Months Of Streaming`} />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <Table/>
                </div>
            </div>
        </div>
    )
}

export default Home