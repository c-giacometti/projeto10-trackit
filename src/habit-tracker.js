import styled from 'styled-components';

import Top from './top';
import Menu from './menu';

export default function HabitTracker(){
    return (
        <HabitContainer>
            <Top />
            <Menu /> 
        </HabitContainer>
    );
}

const HabitContainer = styled.div `
    min-height: 740px;
    background-color: #F2F2F2;
`