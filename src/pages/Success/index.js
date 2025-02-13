import Menu from "../../components/Menu";
import ContentContainer from "../../components/ContentContainer";
import MainContentContainer from "../../components/MainContentContainer";
import SuccessPanel from "../../components/SuccessPanel";

function UserForm() {
    return (
        <ContentContainer>
            <MainContentContainer>
                <Menu />
                <SuccessPanel />
            </MainContentContainer>
        </ContentContainer>
    )
}

export default UserForm;