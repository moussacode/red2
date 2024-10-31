import React from 'react';
import styled from 'styled-components';


const CardContainer = styled.div`
  display: flex;
  padding: 10px;
  background: white;
  border-radius: 14px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  gap: 20px;
   align-items: center;
  justify-content: center;

`;

const LogoContainer = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${props => props.backgroundColor || '#6366F1'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 20px;
  flex-shrink: 0;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  color: #1F2937;
  font-weight:300;
`;

const Description = styled.p`
  margin: 0;
  color: #6B7280;
  font-size: 14px;
  line-height: 1.5;
`;

// Card Component
const Card = ({ letter, backgroundColor, title, description }) => {
  return (
    <CardContainer>
      <LogoContainer backgroundColor={backgroundColor}>
        {letter}
      </LogoContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentContainer>
    </CardContainer>
  );
};
export default Card;