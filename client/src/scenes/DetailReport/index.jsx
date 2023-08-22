import FirstGraph from '../../components/firstGraph';
import { useParams } from 'react-router-dom';
import SecondGraph from '../../components/secondGraph';
import ThirdGraph from '../../components/thirdGraph';
import FourthGraph from '../../components/FourthGraph';
import DropDown from '../../components/dropDown';
const DetailReport = () => {
    const { stateName } = useParams();
    return (
        <>
         <DropDown stateName={stateName}/>
            <div style={{ display: "flex", flexDirection: "row", height: "80%" }}>
            <div style={{padding: "30px", boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.5)', margin: "30px", borderRadius: "10px", border: "2px solid rgba(54, 162, 235, 1)", width:"40%"}}>
            <center><h3>Cultivated land over the years (in hectares)</h3></center>
            <FirstGraph stateName={stateName} />
            </div>
            <div style={{padding: "30px", boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.5)', margin: "30px", borderRadius: "10px", border: "2px solid rgba(72,191,132,1)", width:"40%"}}>
            <center><h3>Total production over the years (in tonnes)</h3></center>
            <SecondGraph stateName={stateName} />
            </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", height: "80%" }}>
            <div style={{padding: "30px", boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.5)', margin: "30px", borderRadius: "10px", border: "2px solid rgba(255,205,86,1)", width:"40%"}}>
            <center><h3>Different Crops produced</h3></center>
            <ThirdGraph stateName={stateName} />
            </div>
            <div style={{padding: "30px", boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.5)', margin: "30px", borderRadius: "10px", border: "2px solid rgba(255,99,132,1)", width:"40%"}}>
            <center><h3>Season wise cultivation</h3></center>
            <FourthGraph stateName={stateName} />
            </div>
            </div>
        </>
    );
};

export default DetailReport;
