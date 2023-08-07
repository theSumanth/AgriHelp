import FirstGraph from '../../components/firstGraph';
import { useParams } from 'react-router-dom';
import SecondGraph from '../../components/secondGraph';
import ThirdGraph from '../../components/thirdGraph';
import FourthGraph from '../../components/FourthGraph';
const DetailReport = () => {
    const { stateName } = useParams();
    return (
        <>
            <div style={{padding: "30px", boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', margin: "30px"}}>
            <center><h3>Cultivated land over the years (in hectares)</h3></center>
            <FirstGraph stateName={stateName} />
            </div>
            <div style={{padding: "30px", boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', margin: "30px"}}>
            <center><h3>Total production over the years (in tonnes)</h3></center>
            <SecondGraph stateName={stateName} />
            </div>
            <div style={{padding: "30px", boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', margin: "30px"}}>
            <center><h3>Total production over the years (in tonnes)</h3></center>
            <ThirdGraph stateName={stateName} />
            </div>
            <div style={{padding: "30px", boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', margin: "30px"}}>
            <center><h3>Total production over the years (in tonnes)</h3></center>
            <FourthGraph stateName={stateName} />
            </div>
        </>
    );
};

export default DetailReport;
