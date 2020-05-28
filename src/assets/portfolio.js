import accessCampusImg from './AccessCampus.png';
import packFrenzyImg from './PackFrenzy.PNG';
import yanaImg from './Yana.png';
import firstResponseImg from './FirstResponse.png';

const portfolio = [
    {
        name: "PERSONAL PROJECTS",
        items: [
            {
                name: "access campus",
                img: accessCampusImg,
                url: "https://www.access-campus.app/",
                desc: "wheelchair accessible entrances to buildings on university of company campuses"
            },
            {
                name: "pack frenzy",
                img: packFrenzyImg,
                url: "https://play.google.com/store/apps/details?id=moc.funapp.packathon",
                desc: "multiplayer android application to play with up to four players"
            },
            {
                name: "yana",
                img: yanaImg,
                url: "https://devpost.com/software/yana-you-are-not-alone",
                desc: "ai-enabled chatbot companion created in response to the overdose crisis in Canada"
            },
        ]
    },
    {
        name: "TECHNICAL EXPERIENCE",
        items: [
            {
                name: "first response",
                img: firstResponseImg,
                url: "https://github.com/eyskim/First_Response/",
                desc: "holistic first response system created for the city of kelowna"
            },
            {
                name: "club row fitness",
                img: "asdfasdf",
                url: "https://play.google.com/store/apps/details?id=moc.funapp.packathon",
                desc: "multiplayer android application to play with up to four players"
            },

        ]
    }
];

export default portfolio;