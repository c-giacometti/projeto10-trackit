import styled from 'styled-components';

export default function AddHabit(){

    return (
        <Container>
            <span>Meus hábitos</span>
            <div>+</div>
        </Container>
    );

}

const Container = styled.div `
    height: 80px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 70px;
    padding: 10px;

    span {
        font-size: 22px;
        color: #126BA5;
    }

    div {
        height: 35px;
        width: 40px;
        background-color: #52B6FF;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        font-size: 26px;
        color: white;
    }
`