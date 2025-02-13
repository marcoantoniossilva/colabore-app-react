import styled from "styled-components";

const LabelContainer = styled.label`
    font-size: 0.875rem;
    font-weight: bold;
    color: #4a5568;
    margin-bottom: 0.5rem;
`;

const InputContainer = styled.input`
    font-size: 0.875rem;
    width: 100%;
    margin-bottom: 1rem;
    padding-left: 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid #ccc;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;

    &:hover {
        border-color: var(--rosa-claro);
        box-shadow: 0 0 4px var(--rosa-escuro);
    }

    &:focus {
        border-color: var(--rosa-escuro);
        outline: none;
    }
`;

function FormInput({ label, type, placeholder }) {
    return (
        <div>
            <LabelContainer>{label}</LabelContainer>
            <InputContainer id={label} type={type} placeholder={placeholder}></InputContainer>
        </div>
    )
}

export default FormInput;