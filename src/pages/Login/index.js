import styled from "styled-components";
import Form from "../../components/Form";
import FormInput from "../../components/FormInput";
import Logo from "../../components/Logo";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import FormButton from "../../components/FormButton";

const LoginContainer = styled.div`
    background-color: var(--rosa-claro);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const MainLoginContent = styled.main`
    display: flex;
    padding: 1.5rem;
    width: 75%;
`;

const SectionLogo = styled.section`
    background-color: var(--rosa-escuro);
    display: none;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    @media (min-width: 1024px) {
        display: flex;
    }
`;


const SectionLogin = styled.section`
    background-color: white;
    padding: 2.5rem;
    gap: 1.5rem;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: 100%;
    justify-content: center;

    @media (min-width: 1024px) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        width: 50%;
    }
`;

function Login() {
    return (
        <LoginContainer>
            <MainLoginContent>
                <SectionLogo>
                    <Logo logan='true' />
                </SectionLogo>

                <SectionLogin>
                    <Title $fontSize='2rem'>Colabore - Login</Title>
                    <Subtitle $fontSize='1.25rem'>Entre com seus dados</Subtitle>
                    <Form>
                        <FormInput label='Email' type='email' placeholder='Digite seu endereço de email' />
                        <FormInput label='Senha' type='password' placeholder='Digite sua senha' />
                        <FormButton text="Login" onClick={() => (window.location.href = "/principal")} />
                    </Form>
                </SectionLogin>
            </MainLoginContent>
        </LoginContainer>
    )
}

export default Login;