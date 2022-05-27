import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import TrackItLogo from './general-login-signup/logo';
import DefaultInput from './general-login-signup/default-input';
import DefaultButton from './general-login-signup/default-button';
import DefaultLink from './general-login-signup/default-link';

export default function CreateAccount(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [picture, setPicture] = useState('');
    const [disable, setDisable] = useState('');

    const linkText = 'Já tem uma conta? Faça login!';
    const buttonText = 'Cadastrar';

    const navigate = useNavigate();

    function PostAccount(event){

        event.preventDefault();

        setDisable('disabled');
        
        const accountObject = {
                            email,
                            name,
                            image: picture,
                            password                        
                            }
        
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', accountObject);

        promise
            .then(() => {
                navigate('/');
            })
            .catch(() => {
                alert('Não foi possível finalizar o cadastro');
                setDisable('');
            }) 

    }

    return (
        <Container>
            <TrackItLogo />
            <form onSubmit={PostAccount}>
                <DefaultInput disable={disable} placeHolder='email' type='email' state={setEmail} value={email} />
                <DefaultInput disable={disable} placeHolder='senha' type='password' state={setPassword} value={password} />
                <DefaultInput disable={disable} placeHolder='nome' type='text' state={setName} value={name} />
                <DefaultInput disable={disable} placeHolder='foto' type='url' state={setPicture} value={picture} />
                <DefaultButton width='322px' size='22px' background='#52B6FF' color='white' disable={disable} innerText={buttonText} type='submit' />
            </form>
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