import Breadcrumb from '../Breadcrumb';
import ContentSection from "../ContentSection";
import FormButton from '../FormButton';
import Subtitle from '../Subtitle';
import Title from '../Title';

function SuccessPanel() {
    return (
        <ContentSection>
            <Breadcrumb text='Voltar' onClickBack={() => (window.location.href = "/principal")} />
            <div>
                <Title $fontSize='3rem'>Registro realizado com sucesso!</Title>
                <Subtitle $fontSize='2rem'>Agora você pode retornar para outra página.</Subtitle>
            </div>
            <div style={{ textAlign: 'center' }}>
                <FormButton text="Voltar" width='100px' marginInline='20px' $marginTop='0.5rem' $cursor='pointer' onClick={() => (window.location.href = "/principal")} />
            </div>
        </ContentSection>
    )
}

export default SuccessPanel;