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
                                <GeoInfoDesc>977- 983257832</GeoInfoDesc>
                            </GeoInfoDescWrapper>
                            <GeoInfoDescWrapper>
                                <Location />
                                <GeoInfoDesc>Baneshwor, Kathmandu</GeoInfoDesc>
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
                            Aenean amet sit risus varius. Interdum vivamus sollicitudin ante vitae sed purus. Ut cras ullamcorper feugiat enim pharetra orci elementu m posuere.
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
