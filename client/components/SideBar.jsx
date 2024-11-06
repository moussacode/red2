'use client'
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Search, Bell, LogOut, User } from 'lucide-react';
import { usePathname } from 'next/navigation';

// Styled Components
const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #1a1a1a;
  padding: 20px;
  position: fixed;
  left: 0;
  top: 0;
`;

const Logo = styled.div`
  color: white;
  gap: 20px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-bottom: 10px;
`;

const StyledLink = styled(Link)`
  display: block;
  padding: 12px 15px;
  color: ${props => props.$isActive ? '#000000' : '#ffffff'};
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  background-color: ${props => props.$isActive ? '#FFFFFF' : '#2d2d2d'};

  svg path {
    fill: ${props => props.$isActive ? '#000000' : '#ffffff'};
    transition: fill 0.3s ease;
  }

  &:hover {
    background-color: ${props => props.$isActive ? '#FFFFFF' : '#2d2d2d'};
    color: ${props => props.$isActive ? '#000000' : '#ffffff'};
  }

  &:focus {
    outline: none;
    background-color: ${props => props.$isActive ? '##FFFFFF' : '#2d2d2d'};
    color: ${props => props.$isActive ? '#000000' : '#ffffff'};
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 10rem;
  padding: 12px 15px;
  color: #ffffff;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  background-color: #2d2d2d;
`;

const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e5e7eb;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  color: white;
  cursor: pointer;
`;

const SideBar = () => {
  const pathname = usePathname();
  
  return (
    <SidebarContainer>
      <Logo>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.66602 2.66624H29.3286V29.3288L2.66602 2.66624Z" fill="white"/>
          <path d="M2.66602 2.66624H22.663L15.9973 15.9975L2.66602 2.66624Z" fill="black" fillOpacity="0.15"/>
          <path d="M2.66602 2.66624H15.9973L2.66602 29.3288V2.66624Z" fill="white"/>
        </svg>
        <h1 style={{ color: 'white', fontSize:'20px'}}>RED PRODUCT</h1>
      </Logo>
      <NavList>
        <NavItem>
          <p style={{color:"#ffffff",marginBottom:"20px"}}>Principal</p>
          <StyledLink 
            href="/dashboard"
            $isActive={pathname === '/dashboard'}
          >
            <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_9117_2)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.1335 0C13.6887 0 13.2622 0.176692 12.9477 0.491206C12.6331 0.80572 12.4565 1.23229 12.4565 1.67708V5.98958C12.4565 6.91533 13.2078 7.66667 14.1335 7.66667H21.321C21.7658 7.66667 22.1924 7.48997 22.5069 7.17546C22.8214 6.86095 22.9981 6.43437 22.9981 5.98958V1.67708C22.9981 1.23229 22.8214 0.80572 22.5069 0.491206C22.1924 0.176692 21.7658 0 21.321 0L14.1335 0Z" fill="currentColor"/>
                </g>
              </svg>
              <p>Dashboard</p>
            </div>
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink 
            href="/dashboard/listehotel"
            $isActive={pathname === '/dashboard/listehotel'}
          >
            <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_3_218)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.74976 0.249979C2.0872 0.251563 1.45224 0.515464 0.983739 0.983962C0.515241 1.45246 0.25134 2.08742 0.249756 2.74998V13.95C0.249756 15.326 1.37376 16.45 2.74976 16.45H9.20476C8.72212 15.9104 8.40598 15.2427 8.29449 14.5274C8.183 13.8121 8.28094 13.0799 8.57646 12.419C8.87199 11.7582 9.35248 11.197 9.95994 10.8032C10.5674 10.4094 11.2758 10.1999 11.9998 10.1999C12.7237 10.1999 13.4321 10.4094 14.0396 10.8032C14.647 11.197 15.1275 11.7582 15.423 12.419C15.7186 13.0799 15.8165 13.8121 15.705 14.5274C15.5935 15.2427 15.2774 15.9104 14.7948 16.45H21.2498C22.6258 16.45 23.7498 15.326 23.7498 13.95V2.74998C23.7498 1.37398 22.6258 0.249979 21.2498 0.249979H2.74976Z" fill="currentColor"/>
                </g>
              </svg>
              <p>Liste Hotel</p>
            </div>
          </StyledLink>
        </NavItem>
      </NavList>

      <ProfileSection>
        <ProfileImage>
          <User size={24} color="#666" />
        </ProfileImage>
        <Detail>
          <p>Moussa</p>
          <span style={{fontSize:"12px"}}>en ligne</span>
        </Detail>
      </ProfileSection>
    </SidebarContainer>
  );
};

export default SideBar;