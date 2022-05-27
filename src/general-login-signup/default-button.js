import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';

export default function DefaultButton({ width, size, background, color, disable, innerText, type }){

    if(disable !== ''){

        return (
            <Button width={width}>
                <ThreeDots 
                    height="15px"
                    width="50px"
                    color="#FFFFFF"
                />
            </Button>
        );

    } else {

        return (
            <Button type={type} width={width} size={size} background={background} color={color} >
                {innerText}
            </Button>
        );

    }

}

const Button = styled.button `
    box-sizing: border-box;
    width: ${(props) => props.width};
    height: 45px;
    background-color: ${(props) => props.background};
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    border-radius: 5px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`