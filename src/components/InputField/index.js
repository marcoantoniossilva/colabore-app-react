import React, { useState } from "react";
import styled from "styled-components";
import ehUmCpf from "../../assets/validations/cpf_validation";
import ehMaiorDeIdade from "../../assets/validations/age_validation";
import { obedecePadrao, ehAMesmaSenha } from "../../assets/validations/password_validation";

const Fieldset = styled.fieldset`
  margin: 12px 24px;
  background-color: var(--rosa-claro);
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: var(--rosa-escuro);
  }
`;

const TextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: var(--rosa-escuro);
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const messages = {
  cpf: {
    valueMissing: "O campo de CPF não pode estar vazio.",
    patternMismatch: "Por favor, preencha um CPF válido.",
    tooShort: "O campo de CPF não tem caracteres suficientes.",
  },
  name: {
    valueMissing: "O campo de nome não pode estar vazio.",
  },
  email: {
    valueMissing: "O campo de E-mail não pode estar vazio.",
  },
  birth: {
    valueMissing: "O campo de data de nascimento não pode estar vazio.",
  },
  password: {
    valueMissing: "O campo de Senha não pode estar vazio.",
  },
  repeatedPassword: {
    valueMissing: "O campo de Senha (Repetir) não pode estar vazio.",
  },
  suggestionsAndComplaints: {
    valueMissing: "O campo de Sugestões e Denuncias não pode estar vazio.",
  }
};

const typeOfErrors = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort",
  "customError",
];

const InputField = ({ label, type, name, id, minLength, pattern, value, onChange, required }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const verifyField = (field) => {
    let message = "";
    field.setCustomValidity("");

    if (field.name === "cpf" && field.value.length >= 11) {
      ehUmCpf(field);
    }

    if (field.name === "birth" && field.value !== "") {
      ehMaiorDeIdade(field);
    }

    if (field.name === "password") {
      obedecePadrao(field);
    }
    if (field.name === "repeatedPassword") {
      const fieldPassword = document.querySelector('#password');
      const fieldRepeatedPassword = document.querySelector('#repeatedPassword');
      ehAMesmaSenha(fieldPassword, fieldRepeatedPassword);
    }

    typeOfErrors.forEach((erro) => {
      if (field.validity[erro]) {
        message = messages[field.name]?.[erro] || "Erro no campo";
      }
      if (field.validity.customError) {
        message = field.validationMessage;
      }
    });

    setErrorMessage(message);
  };

  if (type === 'textarea') {
    return (
      <Fieldset>
        <Label htmlFor={id}>{label}</Label>
        <TextArea
          name={name}
          id={id}
          minLength={minLength}
          rows="4"
          cols="50"
          value={value}
          onChange={onChange}
          required={required}
          onBlur={(e) => verifyField(e.target)} />
        <ErrorMessage className="msg-error">{errorMessage}</ErrorMessage>
      </Fieldset>
    );
  } else {
    return (
      <Fieldset>
        <Label htmlFor={id}>{label}</Label>
        <Input type={type}
          name={name}
          id={id}
          minLength={minLength}
          pattern={pattern}
          value={value}
          onChange={onChange}
          required={required}
          onBlur={(e) => verifyField(e.target)} />
        <ErrorMessage className="msg-error">{errorMessage}</ErrorMessage>
      </Fieldset>
    );
  }
};

export default InputField;