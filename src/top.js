import styled from 'styled-components';

export default function Top(){

    return (
        <TopContainer>
            <span>TrackIt</span>
            <img src='https://www.thespruce.com/thmb/MEOKr_Ro7sQK-o44IlcdVNcpMOU=/3776x2832/smart/filters:no_upscale()/lilac-bushes-growing-tips-2132722_07-99d94bcb495646b38aac142839564f15.JPG' alt='imagem do usuário' />
        </TopContainer>
    );

}

const TopContainer = styled.div `
    box-sizing: border-box;
    height: 70px;
    min-width: 375px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
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
    }

    img {
        height: 50px;
        width: 50px;
        border-radius: 25px;
    }
`