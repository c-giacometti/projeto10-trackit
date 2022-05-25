import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import TrackItLogo from './general-login-signup/logo';
import DefaultInput from './general-login-signup/default-input';
import DefaultButton from './general-login-signup/default-button';
import DefaultLink from './general-login-signup/default-link';

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disable, setDisable] = useState(false);

    const linkText = 'Não tem uma conta? Cadastre-se!';
    const buttonText = 'Entrar';

    const navigate = useNavigate(); 

    function PostLogin(){

        setDisable(true);

        const loginObject = {
                            email,
                            password                        
                            }
        
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', loginObject);

        promise
            .then(response => {
                console.log(response.data);
                navigate('/hoje');
            })
            .catch(() => {
                alert('Não foi possível fazer o login');
                setDisable(false);
            })
        
    }

    return (
        <Container>
            <TrackItLogo />
            <DefaultInput disable={disable} placeHolder='email' type='email' state={setEmail} value={email} />
            <DefaultInput disable={disable} placeHolder='senha' type='password' state={setPassword} value={password} />
            <DefaultButton disable={disable} innerText={buttonText} onClickFunction={PostLogin} />
            <DefaultLink linkText={linkText} redirectTo='/cadastro' />
        </Container>
    );

}

const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`