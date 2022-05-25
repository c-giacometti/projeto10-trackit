import styled from 'styled-components';
import logo from './logo.png';

export default function TrackItLogo(){

    return (
        <Logo>
            <img src={logo} alt='logotipo-trackit' />
        </Logo>
    );

}

const Logo = styled.div `
    img {
        height: 180px;
        width: 180px;
        margin: 70px 0px 30px 0px;
    }
`