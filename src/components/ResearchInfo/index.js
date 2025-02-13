import styled from 'styled-components';
import researchs from '../../backend/researchs.json';
import FormButton from '../FormButton';
import DateItem from '../DateItem';
import Tag from '../Tag';

const ResearchInfoSection = styled.section`
    display: flex;
    flex-direction: column-reverse;

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`;

const ResearchInfoImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 1.5rem;

    @media (min-width: 1024px) {
        width: 16.6667%;
    }
`;

const ResearchInfoImage = styled.img`
    border-radius: 0.5rem;
    display: none;
    max-width: 100%;

    @media (min-width: 1024px) {
        display: block;
    }
`;

const ResearchTextInfoContainer = styled.div`
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    font-family: "Roboto", sans-serif;

    @media (min-width: 1024px) {
        width: 66.6667%;
    }
`;

export const StyledParagraph = styled.p`
  white-space: pre-line;
  font-size: 1.125rem;
  line-height:1.75rem;
  margin: 0;
`;

function ResearchInfo({ researchId }) {
    const research = researchs.find(item => item.id === String(researchId));
    const imagePath = require(`../../backend/images/${research.imgSrc}`);

    return (
        <ResearchInfoSection>
            <ResearchInfoImageContainer>
                <ResearchInfoImage src={imagePath} alt="Logo Research" />
                <FormButton text="Responder" $marginTop='0.5rem' $cursor='pointer' />
            </ResearchInfoImageContainer>
            <ResearchTextInfoContainer>
                <p style={{ fontSize: '2.25rem', fontWeight: 'inherit', marginBottom: '0px', marginTop: '0px' }}>{research.name}</p>
                <StyledParagraph>{research.description}</StyledParagraph>
                <div style={{ display: "flex", flexDirection: window.innerWidth >= 1024 ? "row" : "column", justifyContent: "space-between" }}>
                    <DateItem icon='date_range' text={'Publicada em ' + research.publishedIn} />
                    <DateItem icon='calendar_clock' text={'Disponível até ' + research.availableUntil} />
                </div>
                <div style={{ display: "flex", marginTop: "0.5rem", alignItems: "center" }}>
                    <p style={{ fontSize: "1.125rem", lineHeight: "1.75rem", marginBottom: '0px', marginTop: '0px' }}>Tags:</p>
                    {research.tags.map((tag) => <Tag key={tag} tagId={String(tag)} />)}
                </div>
            </ResearchTextInfoContainer>
        </ResearchInfoSection>
    )
}

export default ResearchInfo;