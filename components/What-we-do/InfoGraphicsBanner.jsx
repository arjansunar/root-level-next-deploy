import IconWrapper from "./IconWrapper"

const BannerContent = [
    {
        iconPath: '/assets/',
        title: 'Requirement Analysis',
        bgColor: "#A1A4A4",
        size: '120px',
        color: "#fff"
    }

]

function InfoGraphicsBanner() {
    return (
        <div>
            <IconWrapper {...BannerContent[0]} />
        </div>
    )
}

export default InfoGraphicsBanner
