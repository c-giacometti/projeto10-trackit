import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import TrackItLogo from './general-login-signup/logo';
import DefaultInput from './general-login-signup/default-input';
import DefaultButton from './general-login-signup/default-button';
import DefaultLink from './general-login-signup/default-link';

export default function CreateAccount(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [picture, setPicture] = useState('');
    const linkText = 'Já tem uma conta? Faça login!';
    const buttonText = 'Cadastrar';

    function PostAccount(){
        
        const accountObject = {
                            email,
                            name,
                            image: picture,
                            password                        
                            }

        console.log(accountObject);
        
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', accountObject);

        promise
            .then(response => {
                console.log('deu td certo')
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
            <DefaultInput placeHolder='nome' state={setName} value={name} />
            <DefaultInput placeHolder='foto' state={setPicture} value={picture} />
            <DefaultButton innerText={buttonText} onClickFunction={PostAccount} />
            <DefaultLink linkText={linkText} redirectTo='/' />
        </Container>
    );

}

const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`