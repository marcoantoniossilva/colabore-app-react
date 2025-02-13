import { useState } from "react";
import InputField from "../InputField"
import FormButton from "../FormButton";
import suggestionsAndComplaintsImg from "../../assets/images/suggestionsAndComplaints.jpg";

function SuggestionsFormSection() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [suggestionsAndComplaints, setSuggestionsAndComplaints] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const SuggestionsAndComplaintsData = {
            "name": name,
            "email": email,
            "suggestionsAndComplaints": suggestionsAndComplaints
        };

        localStorage.setItem('SuggestionsAndComplaintsData', JSON.stringify(SuggestionsAndComplaintsData));
        window.location.href = "./sucesso";
    };

    return (
        <form onSubmit={handleSubmit}>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "24px" }}>
                <img style={{ width: "48px", height: "48px", marginRight: "12px" }} src={suggestionsAndComplaintsImg} alt="Suggestions And Complaints" />
                <span style={{ fontSize: "30px" }}>Sugestões e Denúncias</span>
            </div>

            <InputField label="Nome (Opcional)" type="text" name="name" id="name" minLength="10" value={name} onChange={(e) => setName(e.target.value)} />
            <InputField label="E-Mail (Opcional)" type="email" name="email" id="email" minLength="6" value={email} onChange={(e) => setEmail(e.target.value)} />
            <InputField label="Descreva sua Denúncia/Sugestão" type="textarea" name="suggestionsAndComplaints" id="suggestionsAndComplaints" minLength="10" value={suggestionsAndComplaints} onChange={(e) => setSuggestionsAndComplaints(e.target.value)} required />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <FormButton text="Cancelar" width='100px' marginInline='20px' $marginTop='0.5rem' $cursor='pointer' onClick={() => (window.location.href = "/principal")} />
                <FormButton text="Cadastrar" type='submit' width='100px' marginInline='20px' $marginTop='0.5rem' $cursor='pointer' />
            </div>
        </form>
    );
}

export default SuggestionsFormSection;