import Menu from "../../components/Menu";
import ContentContainer from "../../components/ContentContainer";
import MainContentContainer from "../../components/MainContentContainer";
import UserFormPanel from "../../components/UserFormPanel";

function UserForm() {
    return (
        <ContentContainer>
            <MainContentContainer>
                <Menu />
                <UserFormPanel />
            </MainContentContainer>
        </ContentContainer>
    )
}

export default UserForm;