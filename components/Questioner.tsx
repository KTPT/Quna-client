import styled from 'styled-components';

const Container = styled.div`
    width : 75px;
    display: flex;
    flex-direction: column;
    justify-content : center;
    align-items : left;
`;

const Image = styled.img`
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,0.2);
    width : 75px;
    height : 75px;
    margin-bottom : 5px;
`;


const Name = styled.div`
    font-size: 15px;
    font-weight: 700;
    text-align :  center;
`

export default function Questioner(){
    return(
        <Container>
            <Image src="/images/sample.jpg" alt="sampleImage"/>
            <Name>김다희님</Name>
        </Container>
    )
}