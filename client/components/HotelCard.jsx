// HotelCard.jsx
import React from 'react';
import { MapPin, Star } from 'lucide-react';
import {
  CardContainer,
  ImageContainer,
  Image,
  RatingBadge,
  ContentContainer,
  Title,
  LocationWrapper,
  Location,
  PriceContainer,
  PriceWrapper,
  Price,
  PriceUnit,
  BookButton
} from './HotelCard.styles';

const HotelCard = ({ image, name, pricePerNight, address, currency }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={image || '/placeholder-hotel.jpg'} alt={name} />
      </ImageContainer>
      
      <ContentContainer>
        <LocationWrapper>
          <Location>{address}</Location>
        </LocationWrapper>
        <Title>{name}</Title>
        
        <PriceContainer>
          <PriceWrapper>
            <Price>{pricePerNight} {currency}</Price>
            <PriceUnit>per night</PriceUnit>
          </PriceWrapper>
        </PriceContainer>
      </ContentContainer>
    </CardContainer>
  );
};

export default HotelCard;
