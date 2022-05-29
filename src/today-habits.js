import { useContext, useState } from "react";
import styled from 'styled-components';
import axios from "axios";

import check from './Check.png'
import UserContext from './user-context';

export default function TodayHabits(props){

    const { todayHabit, highest, refresh, setRefresh } = props;
    const { userInfoObject, setTodayHabitsArray } = useContext(UserContext);
    const [done, setDone] = useState(false);

    function checkHabit(){

        setRefresh(refresh + 1);
        
        const config = {
            headers: {
                'Authorization': 'Bearer ' + userInfoObject.token
            }
        }

        if(todayHabit.done) {
            const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/' + todayHabit.id + '/uncheck', {}, config);
            
            promise.then(setDone(false));

        } else {            
            const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/' + todayHabit.id + '/check', {}, config);

            promise.then(setDone(true));
        }

        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config).then(response => setTodayHabitsArray(response.data));

    }

    return (
        <TodayHabitContainer>
            <div>
                <Name>{todayHabit.name}</Name>
                <span>Sequência atual: <CurrentSequence done={done} highest={highest}>{todayHabit.currentSequence} dias</CurrentSequence></span>
                <span>Seu recorde: <HighestSequence highest={highest}>{todayHabit.highestSequence} dias</HighestSequence></span>
            </div>
            <Check checked={todayHabit.done} onClick={checkHabit} >
                <img src={check} alt='check' />
            </Check>
        </TodayHabitContainer>
    );
}


const TodayHabitContainer = styled.div `
    box-sizing: border-box;
    width: 90%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 10px;
    font-size: 13px;
    color: #666666;

    div {
        display: flex;
        flex-direction: column;
    }
`

const Name = styled.span `
    font-size: 22px;
    margin-bottom: 10px;
`

const Check = styled.div `
    height: 70px;
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.checked ? '#8FC549' : '#E7E7E7'};
    border-radius: 5px;

    img {
        height: 30px;
        width: 35px;
    }
`

const CurrentSequence = styled.span `
    color: ${(props) => props.done ? '#8FC549' : (props.highest ? '#8FC549' : '#666666')};
`

const HighestSequence = styled.span `
    color: ${(props) => props.highest === 'yes' ? '#8FC549' : '#666666'};
`