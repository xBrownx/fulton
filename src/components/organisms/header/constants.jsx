import replikaLogo from '../../../assets/Replika.png'

export const header = {
    titleTxt: "30 Fulton Drive",
    links: [
        {
            id: "overview",
            path: 'fulton/overview',
            label: "Overview",
            isButton: false,
        },
        {
            id: "location",
            path: 'fulton/location',
            label: "Location",
            isButton: false,
        },
        {
            id: "features",
            path: 'fulton/features',
            label: "Features",
            isButton: false,
        },
        {
            id: "agency",
            path: 'fulton/agency',
            label: "Agency",
            isButton: false,
        },
        {
            id: "contact",
            path: 'fulton/contact',
            label: "Contact",
            isButton: false,
        },
    ],
    assets: {
        replikaLogo: {
            src: replikaLogo,
            width: 77.62,
            height: 32
        }
    }
}