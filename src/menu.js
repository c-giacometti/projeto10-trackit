import { useContext, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import UserContext from './user-context';

export default function Menu(){

    const { todayHabitsArray, doneHabits } = useContext(UserContext);
    const [percentage, setPercentage] = useState(0);

    if(todayHabitsArray.length > 0) {
        setPercentage((doneHabits / todayHabitsArray.length) * 100);
    }

    return (
        <Footer>
            <div><Link to='/habitos'>Hábitos</Link></div>
            <Progress>
                <Link to='/hoje'>
                    <CircularProgressbar 
                        value={percentage}
                        text='Hoje'
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                          backgroundColor: "#52B6FF",
                          textColor: "#fff",
                          textSize: '20px',
                          pathColor: "#fff",
                          trailColor: "transparent",
                          strokeLinecap: "round",
                        })}
                    />
                </Link>
            </Progress>
            <div><Link to='/historico'>Histórico</Link></div>
        </Footer>
    );

}

const Footer = styled.div `
    height: 70px;
    min-width: 375px;
    background-color: white;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: space-evenly;
    bottom: 0px;
    right: 0px;
    left: 0px;
    position: absolute;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    a {
        color: #52B6FF;
        text-decoration: none;
        font-size: 18px;
    }
`

const Progress = styled.div `
    height: 90px;
    width: 90px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    bottom: 30px;

`