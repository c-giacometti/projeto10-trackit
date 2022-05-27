import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

export default function Menu(){
    
    const percentage = 50;

    return (
        <Footer>
            <div><Link to='/habitos'>Hábitos</Link></div>
            <Progress>
                <Link to='/hoje'>
                    <CircularProgressbar 
                        value={percentage}
                        text="Hoje"
                        background="true"
                        styles={buildStyles({
                            backgroundColor: '#52B6FF',
                            pathColor: 'white',
                            textColor: 'white',
                            textSize: '20px',
                            strokeLinecap: 'round',
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
    bottom: 30px;
`