
export const header = {
    titleTxt: "30 Fulton Drive",
    links: [
        {
            id: "overview",
            path: '/overview',
            label: "Overview",
            isButton: false,
        },
        {
            id: "location",
            path: '/location',
            label: "Location",
            isButton: false,
        },
        {
            id: "features",
            path: '/features',
            label: "Features",
            isButton: false,
        },
        {
            id: "agency",
            path: '/agency',
            label: "Agency",
            isButton: false,
        },
        {
            id: "contact",
            path: '/contact',
            label: "Contact",
            isButton: false,
        },
    ],
    assets: {
        replikaLogo: {
            src: "https://fulton-assets.s3.ap-southeast-2.amazonaws.com/images/replika-logo.png",
            width: 77.62 * 1.5,
            height: 32 * 1.5
        },
        menuIcon: {
            src: "https://fulton-assets.s3.ap-southeast-2.amazonaws.com/images/icon-menu.svg",
        },
        exitIcon: {
            src: "https://fulton-assets.s3.ap-southeast-2.amazonaws.com/images/icon-exit.svg",
        }
    }
}