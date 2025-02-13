import { useState } from "react";
import styled from "styled-components";
import InputField from "../InputField"
import FormButton from "../FormButton";
import employeeImg from "../../assets/images/funcionario.png";
import administratorImg from "../../assets/images/administrador.png";

const ProfileButton = styled.button`
    border-style: solid;
    border-radius: 8px;
    border-color: var(--roxo-claro);
    width: 100px;
    height: 40px;
    margin-right: 20px;
    background-color: ${(props) => (props.$isActive ? "var(--rosa-escuro)" : "transparent")};
`;

function UserFormSection() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const [cpf, setCpf] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [profile, setProfile] = useState("employee");

    const handleProfileChange = (newProfile) => {
        setProfile(newProfile);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            "profile": profile,
            "name": name,
            "email": email,
            "password": password,
            "cpf": cpf,
            "dateOfBirth": dateOfBirth
        };

        localStorage.setItem('UserRegister', JSON.stringify(userData));
        window.location.href = "./sucesso";
    };

    return (
        <form onSubmit={handleSubmit}>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "24px" }}>
                <img style={{ width: "48px", height: "48px", marginRight: "12px" }} src={profile === "employee" ? employeeImg : administratorImg} alt="Profile" />
                <span style={{ fontSize: "30px" }}>Cadastro de usuários - {profile === "employee" ? "Funcionário" : "Administrador"}</span>
            </div>

            <fieldset style={{ backgroundColor: 'var(--rosa-claro)', borderRadius: "8px", padding: "12px", margin: "0 24px 12px" }}>
                <label style={{ marginBottom: "8px" }} htmlFor="profile">Perfil</label>
                <ul style={{ display: "flex", listStyle: 'none', paddingLeft: '0px' }}>
                    <li>
                        <ProfileButton $isActive={profile === "employee"} onClick={() => handleProfileChange("employee")}>Funcionário</ProfileButton>
                    </li>
                    <li>
                        <ProfileButton $isActive={profile === "administrator"} onClick={() => handleProfileChange("administrator")} >Administrador </ProfileButton>
                    </li>
                </ul>
            </fieldset>
            <InputField label="Nome" type="text" name="name" id="name" minLength="10" value={name} onChange={(e) => setName(e.target.value)} required />
            <InputField label="E-Mail" type="email" name="email" id="email" minLength="6" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <InputField label="Senha de Acesso (mínimo de 6 caracteres, deve conter ao menos 1 número)" type="password" name="password" id="password" minLength="6" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <InputField label="Senha de Acesso (repetir)" type="password" name="repeatedPassword" id="repeatedPassword" minLength="6" value={repeatedPassword} onChange={(e) => setRepeatedPassword(e.target.value)} required />
            <InputField label="CPF (apenas números)" type="text" name="cpf" id="cpf" minLength="14" pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
            <InputField label="Data de Nascimento" type="date" name="birth" id="birth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <FormButton text="Cancelar" width='100px' marginInline='20px' $marginTop='0.5rem' $cursor='pointer' onClick={() => (window.location.href = "/principal")} />
                <FormButton text="Cadastrar" type='submit' width='100px' marginInline='20px' $marginTop='0.5rem' $cursor='pointer' />
            </div>
        </form>
    );
}

export default UserFormSection;