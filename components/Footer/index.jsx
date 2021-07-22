import {
    FooterBottomCopyRight,
    FooterBottomWrapper,
    FooterDesc,
    FooterIconWrapper,
    FooterPrivacyBlock,
    FooterSocialIcon,
    FooterTitle,
    FooterTopWrapper,
    GeoInfoDesc,
    GeoInfoDescWrapper,
    GeoInfoWrapper,
    GridComponent, GridElements
} from './FooterElements'

import { FaPhoneAlt as Phone } from 'react-icons/fa'
import { MdLocationOn as Location } from 'react-icons/md'
import { IoMdMail as Email } from 'react-icons/io'

function Footer() {
    return (
        <>
            <FooterTopWrapper>
                <GridComponent>
                    <GridElements>
                        <FooterTitle>Follow Us</FooterTitle>
                        <FooterIconWrapper>
                            <FooterSocialIcon
                                network="facebook"
                                style={{ height: "40px", width: "40px" }}
                                url=""
                            />
                            <FooterSocialIcon
                                network="twitter"
                                style={{ height: "40px", width: "40px" }}
                                url=""
                            />
                            <FooterSocialIcon
                                style={{ height: "40px", width: "40px" }}
                                url="mailto:careers@therootlevel.com"
                            />
                            <FooterSocialIcon
                                network="linkedin"
                                style={{ height: "40px", width: "40px" }}
                                url=""
                            />
                        </FooterIconWrapper>
                    </GridElements>

                    <GridElements>
                        <FooterTitle>Reach Out</FooterTitle>
                        <GeoInfoWrapper>
                            <GeoInfoDescWrapper>
                                <Phone />
                                <GeoInfoDesc>202-555-0129</GeoInfoDesc>
                            </GeoInfoDescWrapper>
                            <GeoInfoDescWrapper>
                                <Location />
                                <GeoInfoDesc>Franklin Street, New York, USA</GeoInfoDesc>
                            </GeoInfoDescWrapper>
                            <GeoInfoDescWrapper>
                                <Email />
                                <GeoInfoDesc>contact@rootlevel.com</GeoInfoDesc>
                            </GeoInfoDescWrapper>


                        </GeoInfoWrapper>

                    </GridElements>

                    <GridElements>
                        <FooterTitle>About the Company</FooterTitle>
                        <FooterDesc>
                            Root Level is a technology services company delivering products, solutions, and systems that empower your business.  We empower companies with our industry-standard digital solutions. Our team of dedicated developers, engineers, and designers deliver end-to-end fully equipped software solutions for your business.
                        </FooterDesc>
                    </GridElements>
                </GridComponent>
            </FooterTopWrapper>
            <FooterBottomWrapper>
                <FooterPrivacyBlock>Privacy policy | Data subject policy</FooterPrivacyBlock>
                <FooterBottomCopyRight>@ROOTLEVEL TECHNOLOGIES | ALL RIGHTS RESERVED</FooterBottomCopyRight>
            </FooterBottomWrapper>
        </>
    )
}

export default Footer
