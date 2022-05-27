import { useContext } from 'react';
import styled from 'styled-components';

import UserContext from './user-context';
import Top from './top';
import Menu from './menu';
import AddHabit from './add-habit';
import NewHabit from './new-habit';

export default function HabitTracker(){

    const { userInfoObject } = useContext(UserContext);
    console.log(userInfoObject);

    return (
        <HabitContainer>
            <Top />
            <AddHabit />
            <NewHabit />
            <Menu /> 
        </HabitContainer>
    );
}

const HabitContainer = styled.div `
    min-height: 740px;
    background-color: #F2F2F2;
`