import Card from '../widgets/Card';
import '../styles/Card.css';

const Cards = () => {
    const cards = [
        {   
            id : 0,
            imageUrl : "https://corpseeds.blob.core.windows.net/corpseed/PM_Krishi_Sinchai_Yojana_Pmksy_2021_Corpseed.jpg",
            description: "Pradhan Mantri Krishi Sinchai Yojana is a national mission to improve farm productivity and ensure better utilization of the resources in the country.",
            articleLink: "https://pmksy.gov.in/microirrigation/index.aspx",
            classArr: ["card-button", "card", "card-image",],
            isCalc: false,
            heading: ""
        },  
        {
            id: 1,
            imageUrl: "https://pm-yojana.in/uploads/images/2022/02/webp/image_750x_621cb36b1ea58.webp",
            description: "Pradhan Mantri Shram Yogi Maandhan is a government scheme meant for old age protection and social security of Unorganized workers. ",
            articleLink: 'https://maandhan.in/',
            classArr: ["card-button", "card", "card-image",],
            isCalc: false,
        },
        {
            id: 2,
            imageUrl: "https://myhindiguide.in/wp-content/uploads/2023/01/ITI-Full-Form-in-Hindi-7.webp",
            description: "Gramin Bhandaran Yojana is a capital investment subsidy scheme which works towards the construction and renovation of the godowns in the rural areas",
            articleLink: 'https://dmi.gov.in/Schemegby.aspx',
            classArr: ["card-button", "card", "card-image",],
            isCalc: false,
        },
        {
            id: 3,
            imageUrl: "https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2021/10/14190645/Pradhan-Mantri-Fasal-Bima-Yojana.jpg",
            description: "PMFBY aims to provide a comprehensive insurance cover against failure of the crop thus helping in stabilising the income of the farmers. ",
            articleLink: 'https://pmfby.gov.in/',
            classArr: ["card-button", "card", "card-image",],
            isCalc: false,
        },
        {
            id: 4,
            imageUrl: "https://kj1bcdn.b-cdn.net/media/43026/pkvy-1.png?width=1200",
            description: "PKVY aims is to produce agricultural products free from chemicals and pesticides residues by adopting, low- cost technologies and supporting organic farming.",
            articleLink: 'https://dmsouthwest.delhi.gov.in/scheme/paramparagat-krishi-vikas-yojana/',
            classArr: ["card-button", "card", "card-image",],
            isCalc: false,
        },
      
    ];

    return (
        <div className="schema">
        <center><h1>Schemes</h1></center>
        <div className="card-container">
            {cards.map((card) => (
                <Card
                    key={card.id}
                    imageUrl={card.imageUrl}
                    description={card.description}
                    articleLink={card.articleLink}
                    classArr={card.classArr}
                />
            ))}
        </div>
        </div>
       
    );
};

export default Cards;
