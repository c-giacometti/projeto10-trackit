import { useState } from 'react';
import styled from 'styled-components';

import DefaultInput from './general-login-signup/default-input';
import DefaultButton from './general-login-signup/default-button';

export default function NewHabit(){

    const [disable, setDisable] = useState('');
    const [habit, setHabit] = useState('');

    const WeekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    return (
        <NewHabitContainer>
            <DefaultInput disable={disable} placeHolder='nome do hábito' type='text' value={habit} state={setHabit} />
            <div>
                {WeekDays.map((render, index) => (<DayContainer day={render} key={index} />))}
            </div>
            <ButtonContainer>
                <DefaultButton width='85px' size='18px' background='white' color='#52B6FF' disable={disable} type='submit' innerText='Cancelar' />
                <DefaultButton width='85px' size='18px' background='#52B6FF' color='white' disable={disable} type='submit' innerText='Salvar' />
            </ButtonContainer>
        </NewHabitContainer>
    );

}

function DayContainer(props){

    const { day } = props;

    return (
        <Day>{day}</Day>
    );

}

const NewHabitContainer = styled.div `
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 20px;

    div {
        display: flex;
    }
`

const Day = styled.div `
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #D4D4D4;
    border-radius: 4px;
    color: #D4D4D4;
    font-size: 20px;
    margin: 0px 5px 30px 0px;
`

const ButtonContainer = styled.div `
    width: inherit;
    display: flex;
    align-items: center;
    justify-content: right;

    button {
        margin-right: 5px;
    }
`