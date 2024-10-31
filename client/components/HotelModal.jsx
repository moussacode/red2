// HotelModal.js
import styled from 'styled-components';
import { useState } from 'react';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #333;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  color: #666;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const ImageUploadContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

const ImageInput = styled.input`
  width: 100%;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const HotelModal = ({ isOpen, onClose, createHotel }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    pricePerNight: '',
    currency: 'XOF',
    image: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const hotelData = {
        ...formData,
        pricePerNight: Number(formData.pricePerNight)
      };
      await createHotel(hotelData);
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <Title>Créer un nouveau hôtel</Title>
        <form onSubmit={handleSubmit}>
          <FormGrid>
            <FormGroup>
              <Label>Nom</Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Adresse</Label>
              <Input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Numéro de téléphone</Label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Prix par nuit</Label>
              <Input
                type="number"
                name="pricePerNight"
                value={formData.pricePerNight}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Devise</Label>
              <Select
                name="currency"
                value={formData.currency}
                onChange={handleChange}
              >
                <option value="XOF">XOF</option>
                <option value="EUR">Euro</option>
                <option value="USD">Dollar</option>
              </Select>
            </FormGroup>
          </FormGrid>
          
          <ImageUploadContainer>
            <Label>Ajouter une image</Label>
            <ImageInput
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              required
            />
          </ImageUploadContainer>

          <ButtonContainer>
            <Button type="button" onClick={onClose} style={{ backgroundColor: '#6c757d' }}>
              Annuler
            </Button>
            <Button type="submit">
              Ajouter l'hôtel
            </Button>
          </ButtonContainer>
        </form>
      </ModalContainer>
    </Overlay>
  );
};

export default HotelModal;