import styled from "styled-components";
import { defaultStyles } from "../../defaults/defaults";
import CareerCard from "./Card";
import { Title, TitleWrapper } from "./utils";
import { CareerButton } from './Card'
import { useState } from "react";

const cardContent = [
    {
        imagePath: '/assets/career/career-react.png',
        jobTitle: 'React Developer',
        experience: '1-2 years',
        postDate: 'July 15, 2021',
        vacancy: '2',
        modalContent: {
            roleOverview: 'We are looking for a Front-End Web Developer who is motivated to combine the art of design with the art of programming. You will work with the UI/UX designer and bridge the gap between graphical design and technical implementation, taking an active role on both sides and defining how the application looks as well as how it works.',
            responsibilities: [
                'Develop new user-facing features',
                'Build reusable code and libraries for future useIndependently craft project solutions by applying solid Object-Oriented-Design principles.',
                'Ensure the technical feasibility of UI/UX designs',
                'Optimize application for maximum speed and scalability',
                'Assure that all user input is validated before submitting to back-end',
                'Collaborate with other team members and stakeholders',
                'Optimize application for maximum speed and scalability',
                'Assure that all user input is validated before submitting to back-end',
                'Collaborate with other team members and stakeholders'
            ]
        }
    },
    {
        imagePath: '/assets/career/career-react.png',
        jobTitle: 'Django Developer',
        experience: '1-2 years',
        postDate: 'July 15, 2021',
        vacancy: '2',
        modalContent: {
            roleOverview: 'We are looking for a Front-End Web Developer who is motivated to combine the art of design with the art of programming. You will work with the UI/UX designer and bridge the gap between graphical design and technical implementation, taking an active role on both sides and defining how the application looks as well as how it works.',
            responsibilities: [
                'Develop new user-facing features',
                'Build reusable code and libraries for future useIndependently craft project solutions by applying solid Object-Oriented-Design principles.',
                'Ensure the technical feasibility of UI/UX designs',
                'Optimize application for maximum speed and scalability',
                'Assure that all user input is validated before submitting to back-end',
                'Collaborate with other team members and stakeholders',
                'Optimize application for maximum speed and scalability',
                'Assure that all user input is validated before submitting to back-end',
                'Collaborate with other team members and stakeholders'
            ]
        }
    }
]

// const initialButtonsState = [
//     {
//         title: 'all hiring',
//         active: true
//     },
//     {
//         title: 'design',
//         active: false
//     },
//     {
//         title: 'development ',
//         active: false
//     },
//     {
//         title: 'administrative',
//         active: false
//     },
// ]

function CurrentOpeningsSection() {

    return (
        <Wrapper>
            <TitleWrapper>
                <Title>Current Openings</Title>
            </TitleWrapper>
            {/* <ButtonWrapper>
                {initialButtonsState.map((button, i) => (
                    <Button active={button.active} title={button.title} key={i} />
                ))}
            </ButtonWrapper> */}
            <GridContainer>
                {cardContent.map((card, i) => (
                    <CareerCard  {...card} key={i} />
                ))}
            </GridContainer>

        </Wrapper>
    )
}


function Button({ title, active }) {
    // const [isActive, setIsActive] = useState(active)
    return <>
        <CareerButton active={active}>{title}</CareerButton>
    </>
}

export default CurrentOpeningsSection

const Wrapper = styled.section`
    margin-top: 3rem;
    font-family: ${defaultStyles.careerPage.fontFamily};
    padding: 0 1rem;
    margin-bottom: 10rem;
`
const ButtonWrapper = styled.div`
    display: flex;
    max-width: 554px;
    margin: 2.5rem auto 0 auto;
    grid-column-gap: 1rem;
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    max-width: 1180px;
    margin: 3rem auto 0 auto;
  
    @media (max-width: 860px){
        margin: 3rem auto 0 auto;
        display: flex;
        flex-direction: column;
        width: fit-content;
    }

    @media (max-width: 1000px) and (min-width: 860px){
        grid-template-columns: repeat(2, 1fr);
        max-width: 780px;
        
    }
`