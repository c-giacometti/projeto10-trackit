import styled from "styled-components";
import DayContainer from "./day-container";

export default function UserHabits(props){

    const { userHabitName, habitDays } = props;
    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    return (
        <HabitContainer>
            <HabitName>
                <span>{userHabitName}</span>
                <ion-icon name="trash-outline"></ion-icon>
            </HabitName>
            <DaysContainer>
                {weekDays.map((render, index) => (
                    <DayContainer day={render} newHabit='false' index={index} key={index} />)
                )}
            </DaysContainer>
        </HabitContainer>
    );

}

const HabitContainer = styled.div `
    width: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 10px;
`

const HabitName = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    span {
        font-size: 20px;
        color: #666666;
    }

    ion-icon {
        cursor: pointer;
        color: #666666;
        font-size: 20px;
    }
`

const DaysContainer = styled.div `
    width: inherit;
    display: flex;
    justify-content: left;
`