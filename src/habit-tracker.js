import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import UserContext from './user-context';
import Top from './top';
import Menu from './menu';
import AddHabit from './add-habit';
import NewHabit from './new-habit';
import UserHabits from './user-habits';

export default function HabitTracker(){

    const { userInfoObject } = useContext(UserContext);
    const [appear, setAppear] = useState(false);
    const [userHabitsArray, setUserHabitsArray] = useState([]);

    const config = {
        headers: {
            'Authorization': 'Bearer ' + userInfoObject.token
        }
    }

    useEffect(() => {

        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);

        promise
            .then(response => {
                setUserHabitsArray(response.data);
            })
            .catch((erro) => {
                alert('Não foi possível carregar os hábitos');
            })
    }, []);

    console.log(userHabitsArray);

    return (
        <HabitContainer>
            <Top />
            <AddHabit setAppear={setAppear} />
            <NewHabit appear={appear} setAppear={setAppear} userHabitsArray={userHabitsArray} setUserHabitsArray={setUserHabitsArray} />
            {userHabitsArray.map((render, map) => (
                <UserHabits userHabitName={render.name} habitDays={render.days} />
            ))}
            <Menu /> 
        </HabitContainer>
    );
}

const HabitContainer = styled.div `
    width: 100%;
    min-height: 800px;
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    align-items: center;
`