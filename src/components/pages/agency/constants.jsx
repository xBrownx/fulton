import cbreLogo from '../../../assets/agentPhotos/CBRE/cbre-logo-305x210.png'
import agentOne from '../../../assets/agentPhotos/CBRE/Fergus Pragnell.png'
import agentTwo from '../../../assets/agentPhotos/CBRE/Tom Murphy.png'
import agentThree from '../../../assets/agentPhotos/CBRE/Harry Kalaitzis.jpg'
import colliersLogo from '../../../assets/agentPhotos/Colliers/Colliers_CMYK_one_color_logos-black.png'
import agentFour from '../../../assets/agentPhotos/Colliers/Hugh Gildbert.png'
import agentFive from '../../../assets/agentPhotos/Colliers/Charlie Woodley.png'
import agentSix from '../../../assets/agentPhotos/Colliers/Nick Saunders.png'
import centuriaLogo from '../../../assets/centuria white.png'
export const contact = {
    titleTxt: "Agency",
    subtitleTxt: "Please contact an agent from CRBE or Colliers for\nfurther information.",
    agencies: {
        crbe: {
            agents: [
                {
                    name: "Furgus Pragnell",
                    mobile: "0410 681 492",
                    photo: agentOne
                },
                {
                    name: "Tom Murphy",
                    mobile: "0434 414 901",
                    photo: agentTwo
                },
                {
                    name: "Harry Kalaitzis",
                    mobile: "0409 994 419",
                    photo: agentThree
                },
            ]
        },
        colliers: {
            agents: [
                {
                    name: "Hugh Gilbert",
                    mobile: "0409 730 858",
                    photo: agentFour
                },
                {
                    name: "Charlie Woodley",
                    mobile: "0419 981 492",
                    photo: agentFive
                },
                {
                    name: "Nick Saunders",
                    mobile: "0407 542 210",
                    photo: agentSix
                },
            ]
        }
    },
    centuria: [
        {
            heading: "Sydney (Head Office)",
            phone: "(02) 8923 8923",
            addressLineOne: "Level 41 Chifley Tower 2 Chifley Square",
            addressLineTwo: "Sydney NSW 2000",
        },
        {
            heading: "Melbourne",
            phone: "(03) 123 4567",
            addressLineOne: "Level 47 101 Collins Street",
            addressLineTwo: "Melbourne VIC 3000",
        },
        {
            heading: "Perth",
            phone: "(08) 9321 7133",
            addressLineOne: "Level 27 140 St Georges Terrace",
            addressLineTwo: "Perth WA 6000",
        },
        {
            heading: "Brisbane",
            phone: "(07) 3905 7000",
            addressLineOne: "Level 2 348 Edward Street",
            addressLineTwo: "Brisbane QLD 4000",
        }
    ],

    assets: {
        cbreLogo: {
            src: cbreLogo,
            width: 80,
            height: 44,
        },
        colliersLogo: {
            src: colliersLogo,
            width: 80,
            height: 50,
        },
        centuriaLogo: {
            src: centuriaLogo,
            width: 146,
            height: 31,
        }
    }
}