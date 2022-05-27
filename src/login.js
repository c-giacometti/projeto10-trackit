import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import UserContext from './user-context';
import TrackItLogo from './general-login-signup/logo';
import DefaultInput from './general-login-signup/default-input';
import DefaultButton from './general-login-signup/default-button';
import DefaultLink from './general-login-signup/default-link';

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disable, setDisable] = useState('');

    const { setUserInfoObject } = useContext(UserContext);
 
    const linkText = 'Não tem uma conta? Cadastre-se!';
    const buttonText = 'Entrar';

    const navigate = useNavigate(); 

    function PostLogin(event){

        event.preventDefault();

        setDisable('disabled');

        const loginObject = {
                            email,
                            password                        
                            }
        
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', loginObject);

        promise
            .then(response => {
                setUserInfoObject(response.data);
                navigate('/hoje');
            })
            .catch(() => {
                alert('Não foi possível fazer o login');
                setDisable('');
            })
        
    }

    return (
        <Container>
            <TrackItLogo />
            <form onSubmit={PostLogin}>
                <DefaultInput disable={disable} placeHolder='email' type='email' state={setEmail} value={email} />
                <DefaultInput disable={disable} placeHolder='senha' type='password' state={setPassword} value={password} />
                <DefaultButton width='322px' size='22px' background='#52B6FF' color='white' disable={disable} innerText={buttonText} type='submit' />
            </form>
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