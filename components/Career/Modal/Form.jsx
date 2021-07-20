import React, { useState } from "react";
import styled, { css } from "styled-components"; import { StyledButton } from "./ModalElements";
{ }
// import { IoIosArrowForward as Arrow } from 'react-icons/io'
// import { HiArrowRight as ArrowHover } from 'react-icons/hi'
// import { defaultStyles } from '../../defaults/defaults';

const initalState = {
    name: '',
    email: '',
    // reasonToWord: '',
    phoneNumber: '',
    message: '',
};


export default function ContactForm() {
    const [state, setState] = useState(initalState);
    const [error, setError] = useState('');
    const [hover, setHover] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submitted!');
        console.log(state);

        for (let key in state) {
            if (state[key] === '') {
                setError(`You must provide the ${key}`)
                return
            }
        }
        //checking if the phone number is valid
        if (isNaN(state.phoneNumber || state.phoneNumber.length == 10)) {
            setError('You must provide a valid number')
        } else
            setError('');
        // const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        // const test = regex.test(state.email);
        // console.log(test);

        console.log("Succeeded!!!")
    };

    const handleInput = e => {
        const inputName = e.currentTarget.name;
        const value = e.currentTarget.value;

        setState(prev => ({ ...prev, [inputName]: value }));
    };
    return (
        <StyledForm>
            <StyledInput
                type='text'
                placeholder='Name'
            />
            <StyledInput
                type='email'
                placeholder='Email'
            />
            <StyledInput
                type='text'
                placeholder='Phone number'
            />
            <StyledFileInput>Upload Resume
                <input type='file' />
            </StyledFileInput>
            <StyledTextArea
                placeholder='Message'
            />
            <StyledFormButton active >Submit</StyledFormButton>
        </StyledForm>
    )
}

const StyledForm = styled.form`
    font-family: 'Montserrat', sans-serif;
    margin-top:1rem;
    max-width: 418px;
    display: flex;
    flex-direction: column;
`
const StyledInput = styled.input`
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    color:#767683;
    padding: 1rem;
    border-radius: 4px;
    border: none;
    width: 100%;
    margin-top: 1rem;
`
const StyledTextArea = styled.textarea`
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    color:#767683;
    padding: 1rem;
    border-radius: 4px;
    border: none;
    width: 100%;
    margin-top: 1rem;
    height:160px;
    &:focus{
        outline: none;
    }
`
const StyledFileInput = styled.label`
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    color:#767683;
    padding: 1rem;
    border-radius: 4px;
    border: none;
    width: 100%;
    margin-top: 1rem;
    background: #fff;

    cursor: pointer;
    & input[type="file"] {
    display: none;
    }
`

const StyledFormButton = styled(StyledButton)`
    /* width: fit-content !important; */
    min-width: fit-content;
    max-width: fit-content;
    border-radius: 0.5rem;
    padding: 1rem 1.5rem;
    text-transform: uppercase;
    align-self: center;
    margin-top:2rem;
`