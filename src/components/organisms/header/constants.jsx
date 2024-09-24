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
            id: "design",
            path: 'fulton/design',
            label: "Features",
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