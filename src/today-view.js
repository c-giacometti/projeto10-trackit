import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import UserContext from './user-context';
import Top from './top';
import Menu from './menu';
import DailyStatus from './daily-status';
import TodayHabits from './today-habits';

export default function TodayView(){

    const APItoday = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
    const { userInfoObject, todayHabitsArray, setTodayHabitsArray } = useContext(UserContext);
    const [doneHabits, setDoneHabits] = useState(0);

    useEffect(() => {

        const config = {
            headers: {
                'AUthorization':'Bearer ' + userInfoObject.token
            }
        }

        const promise = axios.get(APItoday, config);

        promise
            .then(response => {
                setTodayHabitsArray(response.data);

                for(let i = 0; i < todayHabitsArray.length; i++){
                    if(todayHabitsArray[i].done){
                        setDoneHabits(doneHabits + 1);
                        console.log(doneHabits)
                    }
                }
            })
            .catch(() => {
                alert('Não foi possível carregar os hábitos de hoje');
            })
            
    }, []);

    console.log(todayHabitsArray.length, doneHabits)

    return (
        <div>
            <HabitContainer>
                <Top />
                <DailyStatus doneHabits={doneHabits} todayHabits={todayHabitsArray.length} />
                <TodayHabitsContainer>
                    {todayHabitsArray.map((render, index) => render.currentSequence === render.highestSequence ? 
                        <TodayHabits todayHabit={render} key={index} highest='yes'/> : <TodayHabits todayHabit={render} key={index} highest='no'/>
                    )}  
                </TodayHabitsContainer>
                <Menu /> 
            </HabitContainer>
        </div>
    );
    
}

const HabitContainer = styled.div `
    min-height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F2F2F2;
`

const TodayHabitsContainer = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`