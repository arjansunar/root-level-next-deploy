import { InfoWrapper, Title, Desc } from './SectionStyledElements'

function SectionInfo({ title, desc }) {
    return (
        <InfoWrapper>
            <Title>
                {title}
            </Title>
            <Desc>
                {desc}
            </Desc>
        </InfoWrapper>
    )
}

export default SectionInfo
