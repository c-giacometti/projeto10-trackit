import styled from 'styled-components';

export default function DefaultInput({ placeHolder, value, state }){

    return (
        <InputContainer>
            <input placeholder={placeHolder} value={value} onChange={e => state(e.target.value)}></input>
        </InputContainer>
    );

}

const InputContainer = styled.div `
    box-sizing: border-box;

    input {
        width: 300px;
        height: 25px;
        padding: 10px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 10px;
        font-size: 20px;
        color: #DBDBDB;
    }

`