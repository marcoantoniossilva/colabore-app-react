import Breadcrumb from '../Breadcrumb';
import ContentSection from "../ContentSection";
import UserFormSection from '../UserFormSection';

function UserFormPanel() {
    return (
        <ContentSection>
            <Breadcrumb text='Voltar' onClickBack={() => (window.location.href = "/principal")} />
            <UserFormSection />
        </ContentSection>
    )
}

export default UserFormPanel;