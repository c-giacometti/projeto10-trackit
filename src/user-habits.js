import { useContext } from "react";
import styled from "styled-components";
import axios from "axios";

import UserContext from './user-context';
import DayContainer from "./day-container";

export default function UserHabits(props){
    
    const { userInfoObject } = useContext(UserContext);
    const { userHabitsName, userHabitsDays, habitId, userHabitsArray, setUserHabitsArray} = props;
    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const API = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/' + habitId;

    function deleteHabit(){

        const config = {
            headers: {
                'Authorization': 'Bearer ' + userInfoObject.token
            }
        }

        axios.delete(API, config).then(
            axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config).then(response => setUserHabitsArray(response.data))
        );

    }

    return (
        <HabitContainer>
            <HabitName>
                <span>{userHabitsName}</span>
                <ion-icon name="trash-outline" onClick={deleteHabit}></ion-icon>
            </HabitName>
            <DaysContainer>
                {weekDays.map((render, index) => (
                    <DayContainer day={render} index={index} color={userHabitsDays[index] === index ? true : false} key={index} />)
                )}
            </DaysContainer>
        </HabitContainer>
        );

}

const HabitContainer = styled.div `
    width: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 10px;
`

const HabitName = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    span {
        font-size: 20px;
        color: #666666;
    }

    ion-icon {
        cursor: pointer;
        color: #666666;
        font-size: 20px;
    }
`

const DaysContainer = styled.div `
    width: inherit;
    display: flex;
    justify-content: left;
`