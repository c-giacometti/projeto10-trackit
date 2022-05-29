import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import UserContext from './user-context';
import Top from './top';
import Menu from './menu';
import DailyStatus from './daily-status';
import TodayHabits from './today-habits';

export default function TodayView(){

    const APItoday = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
    const { userInfoObject, todayHabitsArray, setTodayHabitsArray, setDoneHabits } = useContext(UserContext);

    useEffect(() => {

        setDoneHabits(0);

        const config = {
            headers: {
                'Authorization':'Bearer ' + userInfoObject.token
            }
        }

        const promise = axios.get(APItoday, config);

        promise
            .then(response => {
                setTodayHabitsArray(response.data);
            })
            .catch(() => {
                alert('Não foi possível carregar os hábitos de hoje');
            })
            
    }, []);

    if(todayHabitsArray.length === 0) {
        return (
            <HabitContainer>
                <ThreeDots 
                height="15px"
                width="50px"
                color="#FFFFFF"
                />
            </HabitContainer>
        );
    }

    return (
        <div>
            <HabitContainer>
                <Top />
                <DailyStatus todayHabits={todayHabitsArray} />
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