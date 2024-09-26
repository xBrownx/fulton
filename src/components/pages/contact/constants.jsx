import cbreLogo from '../../../assets/agentPhotos/CBRE/cbre-logo-light.png'
import agentOne from '../../../assets/agentPhotos/CBRE/Fergus Pragnell.png'
import agentTwo from '../../../assets/agentPhotos/CBRE/Tom Murphy.png'
import agentThree from '../../../assets/agentPhotos/CBRE/Harry Kalaitzis.jpg'
import colliersLogo from '../../../assets/agentPhotos/Colliers/colliers-logo-dark.png'
import agentFour from '../../../assets/agentPhotos/Colliers/hugh-gilbert.png'
import agentFive from '../../../assets/agentPhotos/Colliers/charlie-woodley.png'
import agentSix from '../../../assets/agentPhotos/Colliers/nick-saunders.png'

export const contact = {
    titleTxt: "Get in Touch",
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
    formLabels: {
        lastName: "Last Name",
        firstName: "First Name",
        email: "email",
        phoneNumber: "Phone Number",
        message: "Message"
    },

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
            width: 224,
            height: 80,
        }
    }
}