'use client'
import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link';
import axios from 'axios'
import { useRouter } from 'next/navigation';


const Centrer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1a1a1a;
`;

const FormContainer = styled.form`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
`;

const FormTitle = styled.h2`
  color: black;
  text-align: center;
  margin-bottom: 20px;
  font-size: 16px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input.withConfig({
  shouldForwardProp: (prop) => prop !== 'hasError'
})`
  padding: 10px;
  margin-bottom: ${(props) => (props.hasError ? '5px' : '20px')};
  border: 2px solid ${(props) => (props.hasError ? '#ff4444' : 'transparent')};
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.hasError ? '#ff4444' : '#FFD964')};
  }
`;

const Label = styled.label`
  color: black;
  margin-bottom: 5px;
`;

const CheckboxContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'hasError'
})`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: ${(props) => (props.hasError ? '5px' : '20px')};
  color: black;
`;
const Boutton = styled.button`
  background-color: #FFD964;
  color: black;
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.7 : 1};

  &:hover {
    background-color: ${props => props.disabled ? '#FFD964' : '#ffcc33'};
  }
`;

const SignupText = styled.p`
  color: white;
  padding: 10px;
`;

const ErrorText = styled.span`
  color: #ff4444;
  font-size: 12px;
  margin-bottom: 10px;
`;

const AlertContainer = styled.div`
  background-color: ${props => props.type === 'error' ? '#ff44444d' : '#4CAF504d'};
  color: ${props => props.type === 'error' ? '#ff4444' : '#4CAF50'};
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: center;
`;


const baseURL = process.env.NEXT_PUBLIC_BACKEND_BASEURL;
export const Inscription = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    acceptTerms: false
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiMessage, setApiMessage] = useState({ type: '', message: '' });
  const router = useRouter();

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }

    if (!formData.password) {
      newErrors.password = 'Le mot de passe est requis';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères';
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Vous devez accepter les conditions d\'utilisation';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Nettoyer l'erreur du champ modifié
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiMessage({ type: '', message: '' });

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${baseURL}/register`, {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        setApiMessage({ type: 'success', message: 'Inscription réussie! Redirection...' });
        setTimeout(() => router.push('/connection'), 1500);
      }
    } catch (error) {
      setApiMessage({
        type: 'error',
        message: error.response?.data?.message || 'Une erreur est survenue lors de l\'inscription'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Centrer>
       <div style={{ display: 'flex',flexDirection:'column',alignItems:'center' ,justifyContent:'center' }}>
        <div style={{ display: 'flex',alignItems:'center' }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.66602 2.66624H29.3286V29.3288L2.66602 2.66624Z" fill="white"/>
<path d="M2.66602 2.66624H22.663L15.9973 15.9975L2.66602 2.66624Z" fill="black" fillOpacity="0.15"/>
<path d="M2.66602 2.66624H15.9973L2.66602 29.3288V2.66624Z" fill="white"/>
</svg>


        <h1 style={{ padding: '10px', color: 'white' }}>RED PRODUCT</h1>
        </div>
        <FormContainer onSubmit={handleSubmit}>
          <FormTitle>Inscrivez-vous en tant qu'Admin</FormTitle>
          
          {apiMessage.message && (
            <AlertContainer type={apiMessage.type}>
              {apiMessage.message}
            </AlertContainer>
          )}

          <Container>
            <Label htmlFor="name">Nom</Label>
            <Input
              type='text'
              id="name"
              name="name"
              placeholder="Nom"
              value={formData.name}
              onChange={handleChange}
              hasError={!!errors.name}
              disabled={loading}
            />
            {errors.name && <ErrorText>{errors.name}</ErrorText>}

            <Label htmlFor="email">Email</Label>
            <Input
              type='email'
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              hasError={!!errors.email}
              disabled={loading}
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}

            <Label htmlFor="password">Mot de passe</Label>
            <Input
              type='password'
              id="password"
              name="password"
              placeholder="Mot de passe"
              value={formData.password}
              onChange={handleChange}
              hasError={!!errors.password}
              disabled={loading}
            />
            {errors.password && <ErrorText>{errors.password}</ErrorText>}

            <CheckboxContainer hasError={!!errors.acceptTerms}>
              <input
                type='checkbox'
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                disabled={loading}
              />
              <p>Accepter les conditions d'utilisation</p>
            </CheckboxContainer>
            {errors.acceptTerms && <ErrorText>{errors.acceptTerms}</ErrorText>}

            <Boutton type="submit" disabled={loading}>
              {loading ? 'Inscription en cours...' : 'S\'inscrire'}
            </Boutton>
          </Container>
        </FormContainer>
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <SignupText>Vous avez déjà un compte ?</SignupText>
          <Link href="/connection" style={{ padding: '10px', color: '#FFD964' }}>
            Je me connecte
          </Link>
        </div>
      </div>
    </Centrer>
  );
};