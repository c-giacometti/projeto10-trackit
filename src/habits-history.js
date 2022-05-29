import styled from 'styled-components';

import Top from './top';
import Menu from './menu';

export default function HabitsHistory(){

    return (
        <HabitContainer>
            <Top />
            <History>Histórico</History>
            <Text>Em breve você poderá ver o histórico dos seus hábitos aqui!</Text>
            <Menu />
        </HabitContainer>
    );

}

const HabitContainer = styled.div `
    min-height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F2F2F2;
`

const History = styled.span `
    width: 90%;
    font-size: 24px;
    color: #126BA5;
    margin: 100px 0px 20px 0px;
`

const Text = styled.span `
    width: 90%;
    font-size: 18px;
    color: #666666;
    line-height: 23px;
`