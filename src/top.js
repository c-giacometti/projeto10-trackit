import { useContext } from 'react';
import styled from 'styled-components';

import UserContext from './user-context';

export default function Top(){

    const { userInfoObject } = useContext(UserContext);

    return (
        <TopContainer>
            <span>TrackIt</span>
            <img src={userInfoObject.image} alt='imagem do usuário' />
        </TopContainer>
    );

}

const TopContainer = styled.div `
    box-sizing: border-box;
    height: 70px;
    min-width: 350px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;

    span {
        color: white;
        font-size: 40px;
        font-family: 'Playball';
        margin-left: 10px;
    }

    img {
        height: 50px;
        width: 50px;
        border-radius: 25px;
        margin-right: 10px;
    }
`