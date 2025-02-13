import styled from 'styled-components';
import tags from '../../backend/tags.json';
import SpanIconSection from '../SpanIconSection'

const TagSection = styled.button`
    display: flex;
    align-items: center;
    background-color: ${props => props.$backgroundColor};
    border: 1px solid black;
    border-top-right-radius: 9999px;
    border-bottom-right-radius: 9999px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    margin-left: 1.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    font-weight: 700;
    height: 1.8rem;
`;

function Tag({ tagId }) {
    const tag = tags.find((item) => item.id === tagId);

    return (
        <TagSection $backgroundColor={tag.bgColor}>
            <SpanIconSection icon='add' $fontSize='1.2rem' />
            {tag.name}
        </TagSection>
    )
}

export default Tag;