// HotelCard.styles.js
import styled from 'styled-components';

export const CardContainer = styled.div`
  max-width: 350.57px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const RatingBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: white;
  padding: 4px 8px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ContentContainer = styled.div`
  padding: 16px;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #8D4B38;
  margin-bottom: 12px;
  gap: 4px;
`;

export const Location = styled.span`
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Price = styled.span`
  font-size: 14px;
  font-weight: 0;
  color: #1a1a1a;
`;

export const PriceUnit = styled.span`
  font-size: 14px;
  color: #666;
  margin-left: 4px;
`;

export const BookButton = styled.button`
  background: #2563eb;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #1d4ed8;
  }
`;