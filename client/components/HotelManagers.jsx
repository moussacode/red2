import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HotelModal from './HotelModal';
import HotelGrid from './HotelGrid';
import { Plus, Loader2 } from 'lucide-react';
const baseURL = process.env.NEXT_PUBLIC_BACKEND_BASEURL;

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #1F2937;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #2563EB;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1D4ED8;
  }
`;

const LoadingSpinner = styled(Loader2)`
  animation: spin 1s linear infinite;
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const API_URL = `${baseURL}`;

const HotelManager = () => {
  const [hotels, setHotels] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [editingHotel, setEditingHotel] = useState(null);
  const [error, setError] = useState(null);

  // Fonction pour charger les hôtels
  const fetchHotels = async () => {
    try {
      const response = await fetch(`${API_URL}/hotels`);
      if (!response.ok) throw new Error('Erreur lors du chargement des hôtels');
      const data = await response.json();
      setHotels(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  // Fonction pour créer un nouvel hôtel
  const handleCreate = async (formData) => {
    try {
      setIsLoading(true);
      const imageUrl = await uploadImage(formData.image);
      
      const hotelData = {
        ...formData,
        image: imageUrl
      };

      const response = await fetch(`${API_URL}/hotels`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hotelData),
      });

      if (!response.ok) throw new Error('Erreur lors de la création de l\'hôtel');
      
      await fetchHotels();
      setIsModalOpen(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Fonction pour mettre à jour un hôtel
  const handleUpdate = async (id, formData) => {
    try {
      setIsLoading(true);
      let imageUrl = formData.image;

      // Si une nouvelle image est fournie, la télécharger
      if (formData.image instanceof File) {
        imageUrl = await uploadImage(formData.image);
      }

      const hotelData = {
        ...formData,
        image: imageUrl
      };

      const response = await fetch(`${API_URL}/hotels/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hotelData),
      });

      if (!response.ok) throw new Error('Erreur lors de la mise à jour de l\'hôtel');
      
      await fetchHotels();
      setIsModalOpen(false);
      setEditingHotel(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Fonction pour supprimer un hôtel
  const handleDelete = async (id) => {
    if (!window.confirm('Êtes-vous sûr de vouloir supprimer cet hôtel ?')) return;

    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}/hotels/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Erreur lors de la suppression de l\'hôtel');
      
      await fetchHotels();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Fonction pour gérer l'upload d'image
  const uploadImage = async (file) => {
    // Ici, vous devriez implémenter la logique pour uploader l'image vers votre serveur
    // ou un service de stockage comme AWS S3, Cloudinary, etc.
    // Pour cet exemple, nous retournons une URL factice
    return '/api/placeholder/400/250';
  };

  const handleEdit = (hotel) => {
    setEditingHotel(hotel);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingHotel(null);
  };

  const handleModalSubmit = (formData) => {
    if (editingHotel) {
      handleUpdate(editingHotel._id, formData);
    } else {
      handleCreate(formData);
    }
  };

  if (error) {
    return <div>Erreur: {error}</div>;
  }

  return (
    <Container>
      <Header>
        <Title>Gestion des Hôtels</Title>
        <AddButton onClick={() => setIsModalOpen(true)}>
          <Plus size={16} />
          Ajouter un hôtel
        </AddButton>
      </Header>

      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
          <LoadingSpinner size={24} />
        </div>
      ) : (
        <HotelGrid
          hotels={hotels}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}

      <HotelModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
        initialData={editingHotel}
      />
    </Container>
  );
};

export default HotelManager;
