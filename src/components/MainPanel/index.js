import ContentSection from "../ContentSection";
import Logo from "../Logo";
import Title from '../Title';

function MainPanel() {
    return (
        <ContentSection>
            <div>
                <Title $fontSize='2rem'>Colabore - Ouvir para transformar...</Title>
            </div>
            <div style={{ alignItems: 'center', textAlign: 'center' }}>
                <Logo logan='true' maxWidth='30%' opacity='50%' />
            </div>
        </ContentSection>
    )
}

export default MainPanel;