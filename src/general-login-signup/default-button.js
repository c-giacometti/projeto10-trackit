import styled from 'styled-components';

export default function DefaultButton( { innerText, onClickFunction } ){

    return (
        <Button onClick={onClickFunction}>{innerText}</Button>
    );

}

const Button = styled.button `
    box-sizing: border-box;
    width: 320px;
    height: 45px;
    background-color: #52B6FF;
    color: white;
    font-size: 22px;
    border-radius: 5px;
    border: none;
    margin-bottom: 25px;
    cursor: pointer;
`