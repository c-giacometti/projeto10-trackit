import styled from 'styled-components';
import dayjs from 'dayjs';

export default function DailyStatus( {doneHabits, todayHabits} ){

    if(doneHabits > 0 && todayHabits > 0){

        const percentage = (doneHabits / todayHabits) * 100;

        return (
            <Day color='#8FC549'>
                <span>{dayjs().format('dddd, D/MM')}</span>
                <div>{percentage}% dos hábitos concluídos</div>   
            </Day>
        );

    } else {

        return (
            <Day color='#BABABA'>
                <span>{dayjs().format('dddd, D/MM')}</span>
                <div>Nenhum hábito concluído ainda</div>   
            </Day>
        );

    }

}

const Day = styled.div `
    box-sizing: border-box;
    width: 90%;
    display: flex;
    flex-direction: column;
    font-size: 24px;
    color: #126BA5;
    margin: 100px 0px 30px 0px;

    div {
        font-size: 18px;
        color: ${(props) => props.color};
        margin-top: 6px;
    }
`