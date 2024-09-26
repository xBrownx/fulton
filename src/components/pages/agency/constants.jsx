const baseURL = "https://fulton-assets.s3.ap-southeast-2.amazonaws.com/images/agency/"

export const contact = {
    titleTxt: "Agency",
    subtitleTxt: "Please contact an agent from CRBE or Colliers for\nfurther information.",
    agencies: {
        crbe: {
            agents: [
                {
                    name: "Furgus Pragnell",
                    mobile: "0410 681 492",
                    photo: baseURL + "fergus-pragnell.png"
                },
                {
                    name: "Tom Murphy",
                    mobile: "0434 414 901",
                    photo: baseURL + "tom-murphy.png"
                },
                {
                    name: "Harry Kalaitzis",
                    mobile: "0409 994 419",
                    photo: baseURL + "harry-kalaitzis.jpg"
                },
            ]
        },
        colliers: {
            agents: [
                {
                    name: "Hugh Gilbert",
                    mobile: "0409 730 858",
                    photo: baseURL + "hugh-gilbert.png"
                },
                {
                    name: "Charlie Woodley",
                    mobile: "0419 981 492",
                    photo: baseURL + "charlie-woodley.png"
                },
                {
                    name: "Nick Saunders",
                    mobile: "0407 542 210",
                    photo: baseURL + "nick-saunders.png"
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
            src: baseURL + "cbre-logo-dark.png",
            width: 80,
            height: 44,
        },
        colliersLogo: {
            src: baseURL + "colliers-logo-dark.png",
            width: 80,
            height: 50,
        },
        centuriaLogo: {
            src: baseURL + "centuria-logo-light.png",
            width: 146,
            height: 31,
        }
    }
}