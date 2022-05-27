import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function DefaultLink( { linkText, redirectTo }){

    return (
        <LinkContainer>
            <Link to={redirectTo}>{linkText}</Link>
        </LinkContainer>
    );

}

const LinkContainer = styled.span `
    margin-top: 25px;
    a {
        font-size: 15px;
        color: #52B6FF;
    }
`