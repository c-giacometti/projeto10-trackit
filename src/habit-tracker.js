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

    const { userInfoObject, userHabitsArray, setUserHabitsArray } = useContext(UserContext);
    const [appear, setAppear] = useState(false);

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
            .catch(() => {
                alert('Não foi possível carregar os hábitos');
            })
    }, [userHabitsArray]);

    if(userHabitsArray.length === 0){
        return (
            <HabitContainer>
                <Top />
                <AddHabit setAppear={setAppear} />
                <NewHabit appear={appear} setAppear={setAppear} userHabitsArray={userHabitsArray} setUserHabitsArray={setUserHabitsArray} />
                <Text>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </Text>
                <Menu /> 
            </HabitContainer>
        );
    }

    return (
        <HabitContainer>
            <Top />
            <AddHabit setAppear={setAppear} />
            <NewHabit appear={appear} setAppear={setAppear} userHabitsArray={userHabitsArray} setUserHabitsArray={setUserHabitsArray} />
            {userHabitsArray.map((render, index) => (
                <UserHabits userHabitsName={render.name} userHabitsDays={render.days} habitId={render.id} userHabitsArray={userHabitsArray}
                setUserHabitsArray={setUserHabitsArray} key={index} />
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

const Text = styled.span `
    width: 375px;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 20px;
    color: #666666;
    line-height: 22px;
    margin-top: 10px;
`