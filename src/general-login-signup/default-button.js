import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';

export default function DefaultButton({ disable, innerText, onClickFunction }){

    if(disable){

        return (
            <Button>
                <ThreeDots 
                    height="15px"
                    width="50px"
                    color="#FFFFFF"
                />
            </Button>
        );

    } else {

        return (
            <Button onClick={onClickFunction}>
                {innerText}
            </Button>
        );

    }

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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    cursor: pointer;
`