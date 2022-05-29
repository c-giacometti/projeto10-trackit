import { useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import UserContext from './user-context';
import DefaultInput from './general-login-signup/default-input';
import DefaultButton from './general-login-signup/default-button';
import DayContainer from './day-container';

export default function NewHabit( {appear, setAppear, userHabitsArray, setUserHabitsArray} ){

    const { userInfoObject } = useContext(UserContext);
    const [disable, setDisable] = useState('');
    const [habit, setHabit] = useState('');
    const [habitDaysArray, setHabitDaysArray] = useState([]);
    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    function postHabit(event){

        event.preventDefault();

        setDisable('disabled');

        const postObject = {
            name: habit,
            days: habitDaysArray
        }

        const config = {
            headers: {
                'Authorization': 'Bearer ' + userInfoObject.token
            }
        }

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', postObject, config);

        promise
            .then(response => {
                setDisable('');
                setAppear(false);
                const newArray = [...userHabitsArray, response.data];
                setUserHabitsArray(newArray);
            })
            .catch(() => {
                alert('Não foi possível adicionar o novo hábito');
                setDisable('');
            })

        setHabit('');
    }

    return (
        <NewHabitContainer appear={appear}>
            <form onSubmit={postHabit}>
                <DefaultInput disable={disable} placeHolder='nome do hábito' type='text' value={habit} state={setHabit} />
                <DaysContainer>
                    {weekDays.map((render, index) => (
                        <DayContainer day={render} habitDaysArray={habitDaysArray} setHabitDaysArray={setHabitDaysArray} newHabit='true'
                         index={index} key={index} />)
                    )}
                </DaysContainer>
                <ButtonContainer>
                    <Cancel onClick={() => setAppear(false)}>Cancelar</Cancel>
                    <DefaultButton disable={disable} type='submit' innerText='Salvar' />
                </ButtonContainer>
            </form>
        </NewHabitContainer>
    );

}

const NewHabitContainer = styled.div `
    width: 340px;
    display: ${(props) => props.appear ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 10px;

    input {
        width: 320px;
    }
`

const DaysContainer = styled.div `
    width: inherit;
    display: flex;
    justify-content: left;
`

const Cancel = styled.span `
    height: 35px;
    width: 85px;
    font-size: 16px;
    color: #52B6FF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 30px 10px 0px 0px;
`

const ButtonContainer = styled.div `
    width: inherit;
    display: flex;
    align-items: center;
    justify-content: right;

    button {
        height: 35px;
        width: 85px;
        margin: 30px 0px 0px 5px;
        font-size: 18px;
    }
`