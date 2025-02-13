import styled from 'styled-components';
import MenuItem from '../MenuItem';
import Logo from '../Logo';

const MenuSection = styled.section`
    background-color: var(--rosa-claro);
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
    width: 8.33%;
    display: none;
    justify-content: space-between;

    @media (min-width: 1024px) {
        display: block;
    }
`;

function Menu() {
    return (
        <MenuSection>
            <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", textAlign: "center" }}>
                <div>
                    <MenuItem text='Pesquisas' icon='content_paste_search' fontWeight='bold' onClick={() => (window.location.href = "/pesquisas")} />
                    <MenuItem text='Sugestões e Denúncias' icon='campaign' onClick={() => (window.location.href = "/sugestoesEDenuncias")} />
                    <MenuItem text='Usuários' icon='account_circle' onClick={() => (window.location.href = "/usuarios")} />
                    <MenuItem text='Notificações' icon='notifications' />
                    <MenuItem text='Sair' icon='logout' onClick={() => (window.location.href = "/login")} />
                </div>
                <div>
                    <Logo slogan='true' />
                </div>
            </div>
        </MenuSection>
    )
}

export default Menu;