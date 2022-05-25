import styled from 'styled-components';

export default function DefaultInput({ disable, placeHolder, type, value, state }){

    return (
        <InputContainer>
            <input disable={disable} placeholder={placeHolder} type={type} value={value} onChange={e => state(e.target.value)}></input>
        </InputContainer>
    );

}

const InputContainer = styled.div `
    box-sizing: border-box;

    input {
        width: 300px;
        height: 25px;
        padding: 10px;
        background-color: ${props => props.disable ? '#F2F2F2' : '#FFFFFF'};
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        margin-bottom: 10px;
        font-size: 20px;
        color: #DBDBDB;
    }

`