import { useState } from 'react';
import styled from 'styled-components';

export default function DayContainer(props){

    const { day, index, habitDaysArray, setHabitDaysArray} = props;
    const [selected, setSelected] = useState(false);

    function daySelected(){

        if(selected) {
            setSelected(false);
            habitDaysArray.splice(habitDaysArray.indexOf(index), 1);

        } else {
            setSelected(true);
            const newArray = [...habitDaysArray, index];
            setHabitDaysArray(newArray);
        }
        
    }

    return (
        <Day selected={selected} onClick={daySelected}>
            {day}
        </Day>
    );

}

const Day = styled.div `
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #D4D4D4;
    border-radius: 4px;
    background: ${(props) => props.selected ? '#D4D4D4' : 'white'};
    color: ${(props) => props.selected ? 'white' : '#D4D4D4'};
    font-size: 20px;
    margin: 0px 5px 30px 0px;
    cursor: pointer;
`