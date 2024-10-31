// SignupStyles.js
import styled from 'styled-components'

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #111827; // bg-gray-900
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`

export const Title = styled.h1`
  color: white;
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 2rem;
`

export const FormCard = styled.div`
  width: 100%;
  max-width: 28rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
  padding: 2rem;
`

export const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  text-align: center;
  margin-bottom: 1.5rem;
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const InputField = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #2563eb;
    ring: 2px solid #2563eb;
  }
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`

export const CheckboxLabel = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
`

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem 1.5rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #1d4ed8;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
`

export const LoginText = styled.p`
  color: white;
`

export const LoginLink = styled.a`
  margin-left: 0.5rem;
  color: #fcd34d;
  text-decoration: none;
  
  &:hover {
    color: #fbbf24;
  }
`

// Styled Alert component
export const Alert = styled.div`
  background-color: #fee2e2;
  border: 1px solid #ef4444;
  color: #dc2626;
  padding: 1rem;
  border-radius: 0.375rem;
  margin-bottom: 1.5rem;
`