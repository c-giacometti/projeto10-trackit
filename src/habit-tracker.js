import { useState } from 'react';
import styled from 'styled-components';

import Top from './top';
import Menu from './menu';
import AddHabit from './add-habit';
import NewHabit from './new-habit';
import UserHabits from './user-habits';

export default function HabitTracker(){

    const [appear, setAppear] = useState(false);

    return (
        <HabitContainer>
            <Top />
            <AddHabit setAppear={setAppear} />
            <NewHabit appear={appear} setAppear={setAppear} />
            <UserHabits />
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