
'use client'
import React from 'react';
import styled from 'styled-components';
import { Search, Bell, LogOut, User } from 'lucide-react';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  height: 70px;
`;

const LeftSection = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border-radius: 20px;
  border: 1px solid #e0e0e0;
  width: 250px;
  font-size: 0.9rem;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
  }
`;

const SearchIcon = styled(Search)`
  position: absolute;
  left: 0.8rem;
  color: #666;
  width: 18px;
  height: 18px;
`;

const NotificationBell = styled.div`
  position: relative;
  cursor: pointer;
`;

const NotificationCount = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: #ef4444;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
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

const LogoutButton = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   padding: 0.5rem 1rem;
//   border-radius: 8px;
//   border: none;
//   background-color: #ef4444;
//   color: white;
  cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     background-color: #dc2626;
//   }
`;

export const NavBar = ({ name }) => {
  return (
    <NavContainer>
      <LeftSection>
        {name}
      </LeftSection>

      <RightSection>
        <SearchContainer>
          <SearchIcon />
          <SearchInput placeholder="Rechercher..." />
        </SearchContainer>

        <NotificationBell>
          <Bell size={20} color="#666" />
          <NotificationCount>3</NotificationCount>
        </NotificationBell>

        <ProfileSection>
          <ProfileImage>
            <User size={24} color="#666" />
          </ProfileImage>

          <LogoutButton>
            <LogOut size={18} />
            
          </LogoutButton>
        </ProfileSection>
      </RightSection>
    </NavContainer>
  );
};