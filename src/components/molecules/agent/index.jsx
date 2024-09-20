import { memo } from 'react';
import { Container, StyledImg, StyledParagraph } from './styles';
import { Column, Heading, Paragraph, Row } from '../../atoms';


function Agent(props) {
    const { name, phone, photo } = props;
    return (
        <Container >
            <Row $gap={8}>
                <StyledImg src={photo} alt={""} />
                <Column $centre>
                    <Heading
                        $colourDark
                        $fontSize={16}
                        $weight={300}
                        $lineHeight={21.25}
                    >
                        {name}
                    </Heading>
                    <Paragraph
                        $colourDark
                        $fontSize={14}
                        $lineHeight={24}
                        $weight={400}
                    >
                        {phone}
                    </Paragraph>
                </Column>
            </Row>
        </Container>
    );
}

export default memo(Agent);
