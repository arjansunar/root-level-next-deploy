import { content } from '../content'
import styled, { css } from 'styled-components'
import { defaultStyles } from '../defaults/defaults'
import ContactForm from '../components/Form'

const contactContent = { ...content.contactPage }

const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0 2rem 10rem 2rem;
`
const TextWrapper = styled.div`
    margin-top: 3.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const contactStyles = { ...defaultStyles.contactSection }
const ContactTitle = styled.h2`
    font-size: ${contactStyles.title.fontSize};
    font-weight: ${contactStyles.title.fontWeight};
    line-height: ${contactStyles.title.fontHeight};
    color: ${contactStyles.title.textColor};
    text-align:center;
`

const ContactSubTitle = styled.h2`
    margin-top: 1.375rem;
    text-align: center;
    max-width: 970px;
    font-size: ${contactStyles.subTitle.fontSize};
    font-weight: ${contactStyles.subTitle.fontWeight};
    line-height: ${contactStyles.subTitle.fontHeight};
    /* color: ${contactStyles.title.textColor}; */
`
const BgDecor = styled.div`
    background-color: ${defaultStyles.brandColor};
    width:100%;
    height:100vh;
    position: absolute;
    bottom:0;
    z-index: -1;
    clip-path: polygon(0 46%, 100% 1%, 100% 100%, 0% 100%);

`
function Contact() {
    return (
        <div>
            <ContactWrapper>
                <TextWrapper>
                    <ContactTitle>
                        {contactContent.title}
                    </ContactTitle>
                    <ContactSubTitle>
                        {contactContent.subtitle}
                    </ContactSubTitle>
                </TextWrapper>
                <ContactForm />
                <BgDecor />
            </ContactWrapper>

        </div>
    )
}

export default Contact


