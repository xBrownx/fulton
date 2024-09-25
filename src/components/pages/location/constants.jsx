const baseURL = "https://fulton-assets.s3.ap-southeast-2.amazonaws.com/videos/"
import nearbyIcon from '../../../assets/features/icons/nearbyAssetsActive.png';
import mapIcon from '../../../assets/location/mapIcon.png';
export const location = {
    titleTxt: "The Location",
    paragraphTxt: [
        "Positioned on the western corner of two B-double approved roads, Fulton Drive and Briggs Drive. The facility provides immediate access to major arterials such as the Western Highway, Western Ring Road and the West Gate Freeway.",
        "Derrimut’s central location ensures occupiers are within close proximity to the Port of Melbourne, Melbourne Airport, as well as the Melbourne CBD.",
        "It has excellent surrounding road infrastructure that caters to all forms of vehicle transport, including heavy vehicles.",
        "Melbourne’s west is home to some of the largest manufacturers in the world, including OI Glass, VISY, Opal Packaging, and Encore Tissues. More specifically, Derrimut accommodates companies such as Cimpress, Downer Group, and ARA Group."
        ],
    footerTxt: ["VIEW LIVE MAP", "VIEW NEARBY ASSETS"],
    assets: {
        backgroundImg: {
            src: "https://fulton-assets.s3.ap-southeast-2.amazonaws.com/images/Fulton+location+map.png"
        },
        nearbyAssets: {
            src: baseURL + "240924_Area_s Clip.mp4"
        },
        mapIcon: mapIcon,
        nearbyIcon: nearbyIcon

    }
}