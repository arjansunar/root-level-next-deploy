import React from 'react'
import { ApplyWrapper, Button, ButtonWrapper, Desc, FlexContainer, Label, List, ListItem, OverviewWrapper, StyledButton, Title, Wrapper } from './ModalElements'
import Form from './Form';

function StyledModal({ content, jobTitle,
    experience,
    postDate,closeModal}) {
    return (
        <Wrapper>
            <OverviewWrapper>
                <FlexContainer>
                    <Title>overview</Title>
                    <StyledButton closeBtn onClick={closeModal}>X</StyledButton>
                </FlexContainer>
                <ButtonWrapper>
                    <Button>
                        <Label>Position</Label>
                        <StyledButton active>{jobTitle}</StyledButton>
                    </Button>
                    <Button>
                        <Label>Experience</Label>
                        <StyledButton>{experience}</StyledButton>
                    </Button>
                    <Button>
                        <Label>Post Date</Label>
                        <StyledButton>{postDate}</StyledButton>
                    </Button>

                </ButtonWrapper>
                <Title>role overview</Title>
                <Desc>{content.roleOverview}</Desc>
                <Title>key responsibilities</Title>
                <List>
                    {content.responsibilities.map((val, i) =>
                        <ListItem key={i}>{val}</ListItem>
                    )}
                </List>
            </OverviewWrapper>
            <ApplyWrapper>
                <Title>Apply for the job</Title>
                <Form />
            </ApplyWrapper>
        </Wrapper>
    )
}

export default StyledModal

