import styled from 'styled-components';

import Top from './top';
import Menu from "./menu";

export default function TodayView(){

    return (
        <div>
            <HabitContainer>
                <Top />
                <Menu /> 
            </HabitContainer>
        </div>
    );
    
}

const HabitContainer = styled.div `
    min-height: 740px;
    background-color: #F2F2F2;
`