import IndiaMap from "../../components/IndiaMap";
import BackBone from "../../components/Backbone";
import Cards from "../../components/Cards";
import "./home.css";
// import '../../styles/backboneStyle.css';


import Carousels from "../../components/Carousels";
const HomePage = () => {
    return (
        <div className="home">
            <Carousels />
            <BackBone/>
            <IndiaMap />
            <Cards />
            <center>
            <iframe src="https://us3.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FCrop%2Bsummary&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard" width="900" height="450" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            </center> 
        </div>
    )
}

export default HomePage;