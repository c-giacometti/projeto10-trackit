import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';

export default function DefaultButton({ disable, innerText, type }){

    if(disable !== ''){

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
            <Button type={type}>
                {innerText}
            </Button>
        );

    }

}

const Button = styled.button `
    box-sizing: border-box;
    width: 322px;
    height: 45px;
    background-color: #52B6FF;
    color: white;
    font-size: 22px;
    border-radius: 5px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`