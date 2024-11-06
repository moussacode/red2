'use client'
import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link';
import axios from 'axios'
import { useRouter } from 'next/navigation';
const baseURL = process.env.NEXT_PUBLIC_BACKEND_BASEURL;

// Styled components avec améliorations
const Centrer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
 background: rgba(73, 76, 79, 1);
  position: relative; 

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
  
    background-image: url('bg.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.9; /* Ajustez l'opacité selon vos préférences */
    z-index: -1; /* Place l'image derrière le contenu de Centrer */
  }
`;

const FormContainer = styled.form`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 384px;

top: 146px;
left: 768px;
gap: 0px;
opacity: 0px;
`;

const FormTitle = styled.h2`
   color: black;
  
  margin-bottom: 20px;
  
  font-family: Roboto;
font-size: 17.07px;
font-weight: 400;
line-height: 25.6px;
text-align: left;
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
    border:none;
  font-size: 16px;
  border-bottom: 1.33px solid #A0A0A033;
  
    &:focus {
  
    }
  `;

const Label = styled.label`
    color: rgba(0, 0, 0, 0.87);


  
  font-family: Roboto;
font-size: 15.87px;
font-weight: 400;
line-height: 23.8px;
text-align: left;
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
   color: white;
  background: rgba(71, 74, 77, 1);

  border: none;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.7 : 1};

  &:hover {
     background: rgba(71, 74, 70, 1);
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
const Title = styled.h1`
  padding: 10px;
  color: white;
  font-family: Roboto;
font-size: 26.66px;
font-weight: 700;
line-height: 21.33px;
text-align: left;

`;

const AlertContainer = styled.div`
  background-color: ${props => props.type === 'error' ? '#ff44444d' : '#4CAF504d'};
  color: ${props => props.type === 'error' ? '#ff4444' : '#4CAF50'};
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: center;
`;

const ForgotPassword = styled.a`
  color: rgba(255, 217, 100, 1);
  text-align: right;
  font-size: 14px;
 
  margin-top: 20px;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const Connection = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiMessage, setApiMessage] = useState({ type: '', message: '' });
  const router = useRouter();

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }

    if (!formData.password) {
      newErrors.password = 'Le mot de passe est requis';
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
      const response = await axios.post(`${baseURL}/login`, {
        email: formData.email,
        password: formData.password
      });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        setApiMessage({ 
          type: 'success', 
          message: 'Connexion réussie! Redirection...' 
        });
        
        // Si "Se souvenir de moi" est coché, on peut stocker certaines préférences
        if (formData.rememberMe) {
          localStorage.setItem('rememberedEmail', formData.email);
        }

        setTimeout(() => router.push('/dashboard'), 1500);
      } else {
        setApiMessage({ 
          type: 'error', 
          message: 'Email ou mot de passe incorrect' 
        });
      }
    } catch (error) {
      setApiMessage({
        type: 'error',
        message: error.response?.data?.message || 'Erreur de connexion'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Centrer>
      <div style={{ display: 'flex',flexDirection:'column',alignItems:'center' ,justifyContent:'center' }}>
        <div style={{ display: 'flex',alignItems:'center',marginBottom: '25px' }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.66602 2.66624H29.3286V29.3288L2.66602 2.66624Z" fill="white"/>
<path d="M2.66602 2.66624H22.663L15.9973 15.9975L2.66602 2.66624Z" fill="black" fillOpacity="0.15"/>
<path d="M2.66602 2.66624H15.9973L2.66602 29.3288V2.66624Z" fill="white"/>
</svg>


        <Title>RED PRODUCT</Title>
        </div>
        <FormContainer onSubmit={handleSubmit}>
          <FormTitle>Connectez-vous en tant qu'Admin</FormTitle>
          
          {apiMessage.message && (
            <AlertContainer type={apiMessage.type}>
              {apiMessage.message}
            </AlertContainer>
          )}

          <Container>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
             
              value={formData.email}
              onChange={handleChange}
              hasError={!!errors.email}
              disabled={loading}
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}

            <Label htmlFor="password">Mot de passe</Label>
            <Input
              type="password"
              id="password"
              name="password"
              
              value={formData.password}
              onChange={handleChange}
              hasError={!!errors.password}
              disabled={loading}
            />
            {errors.password && <ErrorText>{errors.password}</ErrorText>}

            <CheckboxContainer>
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                disabled={loading}
              />
              <p>Gardez-moi connecté</p>
            </CheckboxContainer>

            

            <Boutton type="submit" disabled={loading}>
              {loading ? 'Connexion...' : 'Se connecter'}
            </Boutton>
          </Container>
        </FormContainer>
        <ForgotPassword>Mot de passe oublié ?</ForgotPassword>
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <SignupText>Vous n'avez pas de compte ?</SignupText>
          <Link href="/" style={{ padding: '10px', color: '#FFD964' }}>
            S'inscrire
          </Link>
        </div>
      </div>
    </Centrer>
  );
};

export default Connection;