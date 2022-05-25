import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import TrackItLogo from './general-login-signup/logo';
import DefaultInput from './general-login-signup/default-input';
import DefaultButton from './general-login-signup/default-button';
import DefaultLink from './general-login-signup/default-link';

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const linkText = 'Não tem uma conta? Cadastre-se!';
    const buttonText = 'Entrar';

    function PostLogin(){

        const loginObject = {
                            email,
                            password                        
                            }
        
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', loginObject);

        promise
            .then(response => {
                console.log(response.data)
            })
            .catch(err => {
                console.log(err)
            })
        
    }

    return (
        <Container>
            <TrackItLogo />
            <DefaultInput placeHolder='email' state={setEmail} value={email} />
            <DefaultInput placeHolder='senha' state={setPassword} value={password} />
            <DefaultButton innerText={buttonText} onClickFunction={PostLogin} />
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