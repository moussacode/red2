import Card from "./Card";
import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const CardGrid = () => {
    const cardsData = [
      {
        letter: "A",
        backgroundColor: "#6366F1",
        title: "125",
        description: "Suivez vos performances avec nos outils d'analyse avancés"
      },
      {
        letter: "M",
        backgroundColor: "#8B5CF6",
        title: "40",
        description: "Optimisez vos campagnes marketing pour de meilleurs résultats"
      },
      {
        letter: "K",
        backgroundColor: "#EC4899",
        title: "68",
        description: "Une équipe dédiée pour répondre à vos besoins"
      },
      {
        letter: "M",
        backgroundColor: "#14B8A6",
        title: "600",
        description: "Créez des designs modernes et attractifs"
      },
      {
        letter: "F",
        backgroundColor: "#F59E0B",
        title: "Finance",
        description: "Gérez vos finances en toute simplicité"
      },
      {
        letter: "P",
        backgroundColor: "#10B981",
        title: "02 Unité",
        description: "Suivez l'avancement de vos projets en temps réel"
      }
    ];
  
    return (
      <GridContainer>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            letter={card.letter}
            backgroundColor={card.backgroundColor}
            title={card.title}
            description={card.description}
          />
        ))}
      </GridContainer>
    );
  };
  
  export default CardGrid;