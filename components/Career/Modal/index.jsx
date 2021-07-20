import React from 'react'
import { ApplyWrapper, Button, ButtonWrapper, Desc, Label, List, ListItem, OverviewWrapper, StyledButton, Title, Wrapper } from './ModalElements'
import Form from './Form';
// const content = {
//     position: 'React Developer',
//     experience: '1-2 years',
//     postDate: '16 July 2021',
//     roleOverview: 'We are looking for a Front-End Web Developer who is motivated to combine the art of design with the art of programming. You will work with the UI/UX designer and bridge the gap between graphical design and technical implementation, taking an active role on both sides and defining how the application looks as well as how it works.',
//     responsibilities: [
//         'Develop new user-facing features',
//         'Build reusable code and libraries for future useIndependently craft project solutions by applying solid Object-Oriented-Design principles.',
//         'Ensure the technical feasibility of UI/UX designs',
//         'Optimize application for maximum speed and scalability',
//         'Assure that all user input is validated before submitting to back-end',
//         'Collaborate with other team members and stakeholders',
//         'Optimize application for maximum speed and scalability',
//         'Assure that all user input is validated before submitting to back-end',
//         'Collaborate with other team members and stakeholders'
//     ]

// }
function StyledModal({ content, jobTitle,
    experience,
    postDate, }) {
    return (
        <Wrapper>
            <OverviewWrapper>
                <Title>overview</Title>
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
