import styled from 'styled-components';
import NewHabit from './new-habit';

export default function AddHabit({setAppear}){

    return (
        <AddHabitContainer>
            <span>Meus hábitos</span>
            <div onClick={() => setAppear(true)}>+</div>
        </AddHabitContainer>
    );

}

const AddHabitContainer = styled.div `
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 70px;
    padding: 20px;

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