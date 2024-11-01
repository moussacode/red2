'use client'
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Search, Bell, LogOut, User } from 'lucide-react';




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
  gap:20px;
  margin-bottom: 40px;
  display: flex;
  align-items:center;
  
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
  color: #ffffff;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  background-color:  #2d2d2d ;

  &:hover {
    background-color: #2d2d2d;
    color: white;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  margin-top:10rem;
 padding: 12px 15px;
  color: #ffffff;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  background-color:  #2d2d2d ;
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
flex-direction:column;
  gap: 0.5rem;
 
  color: white;
  cursor: pointer;

`;


const SideBar = () => {
 

  return (
    <SidebarContainer>
       <Logo >
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
           
          >
            <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_9117_2)">
<path fillRule="evenodd" clipRule="evenodd" d="M14.1335 0C13.6887 0 13.2622 0.176692 12.9477 0.491206C12.6331 0.80572 12.4565 1.23229 12.4565 1.67708V5.98958C12.4565 6.91533 13.2078 7.66667 14.1335 7.66667H21.321C21.7658 7.66667 22.1924 7.48997 22.5069 7.17546C22.8214 6.86095 22.9981 6.43437 22.9981 5.98958V1.67708C22.9981 1.23229 22.8214 0.80572 22.5069 0.491206C22.1924 0.176692 21.7658 0 21.321 0L14.1335 0ZM14.1335 9.58333C13.6887 9.58333 13.2622 9.76003 12.9477 10.0745C12.6331 10.3891 12.4565 10.8156 12.4565 11.2604V21.3229C12.4565 22.2496 13.2078 23 14.1335 23H21.321C21.7658 23 22.1924 22.8233 22.5069 22.5088C22.8214 22.1943 22.9981 21.7677 22.9981 21.3229V11.2604C22.9981 10.8156 22.8214 10.3891 22.5069 10.0745C22.1924 9.76003 21.7658 9.58333 21.321 9.58333H14.1335ZM0.00195312 1.67708C0.00195312 0.751333 0.752328 0 1.67904 0H8.86654C9.79229 0 10.5436 0.751333 10.5436 1.67708V11.7396C10.5436 12.1844 10.3669 12.6109 10.0524 12.9255C9.7379 13.24 9.31133 13.4167 8.86654 13.4167H1.67904C1.23425 13.4167 0.807674 13.24 0.493159 12.9255C0.178645 12.6109 0.00195313 12.1844 0.00195312 11.7396V1.67708ZM1.67904 15.3333C1.23425 15.3333 0.807674 15.51 0.493159 15.8245C0.178645 16.1391 0.00195313 16.5656 0.00195312 17.0104V21.3229C0.00195312 22.2487 0.752328 23 1.67904 23H8.86654C9.31133 23 9.7379 22.8233 10.0524 22.5088C10.3669 22.1943 10.5436 21.7677 10.5436 21.3229V17.0104C10.5436 16.5656 10.3669 16.1391 10.0524 15.8245C9.7379 15.51 9.31133 15.3333 8.86654 15.3333H1.67904Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_9117_2">
<rect width="23" height="23" fill="white"/>
</clipPath>
</defs>
</svg>



            <p>
                Dashboard
                </p>
            </div>
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink 
            href="/dashboard/listehotel" 
         
          >
            <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_3_218)">
<path fillRule="evenodd" clipRule="evenodd" d="M2.74976 0.249979C2.0872 0.251563 1.45224 0.515464 0.983739 0.983962C0.515241 1.45246 0.25134 2.08742 0.249756 2.74998V13.95C0.249756 15.326 1.37376 16.45 2.74976 16.45H9.20476C8.72212 15.9104 8.40598 15.2427 8.29449 14.5274C8.183 13.8121 8.28094 13.0799 8.57646 12.419C8.87199 11.7582 9.35248 11.197 9.95994 10.8032C10.5674 10.4094 11.2758 10.1999 11.9998 10.1999C12.7237 10.1999 13.4321 10.4094 14.0396 10.8032C14.647 11.197 15.1275 11.7582 15.423 12.419C15.7186 13.0799 15.8165 13.8121 15.705 14.5274C15.5935 15.2427 15.2774 15.9104 14.7948 16.45H21.2498C22.6258 16.45 23.7498 15.326 23.7498 13.95V2.74998C23.7498 1.37398 22.6258 0.249979 21.2498 0.249979H2.74976ZM3.99976 3.37498C3.834 3.37498 3.67502 3.44083 3.55781 3.55804C3.4406 3.67525 3.37476 3.83422 3.37476 3.99998C3.37476 4.16574 3.4406 4.32471 3.55781 4.44192C3.67502 4.55913 3.834 4.62498 3.99976 4.62498H11.9998C12.1655 4.62498 12.3245 4.55913 12.4417 4.44192C12.5589 4.32471 12.6248 4.16574 12.6248 3.99998C12.6248 3.83422 12.5589 3.67525 12.4417 3.55804C12.3245 3.44083 12.1655 3.37498 11.9998 3.37498H3.99976ZM18.3748 3.99998C18.3748 3.65498 18.6548 3.37498 18.9998 3.37498H20.4998C20.6655 3.37498 20.8245 3.44083 20.9417 3.55804C21.0589 3.67525 21.1248 3.83422 21.1248 3.99998C21.1248 4.16574 21.0589 4.32471 20.9417 4.44192C20.8245 4.55913 20.6655 4.62498 20.4998 4.62498H18.9998C18.834 4.62498 18.675 4.55913 18.5578 4.44192C18.4406 4.32471 18.3748 4.16574 18.3748 3.99998ZM18.9998 6.37498C18.834 6.37498 18.675 6.44083 18.5578 6.55804C18.4406 6.67525 18.3748 6.83422 18.3748 6.99998C18.3748 7.16574 18.4406 7.32471 18.5578 7.44192C18.675 7.55913 18.834 7.62498 18.9998 7.62498H20.4998C20.6655 7.62498 20.8245 7.55913 20.9417 7.44192C21.0589 7.32471 21.1248 7.16574 21.1248 6.99998C21.1248 6.83422 21.0589 6.67525 20.9417 6.55804C20.8245 6.44083 20.6655 6.37498 20.4998 6.37498H18.9998ZM9.49976 13.95C9.49988 13.4993 9.62185 13.057 9.85274 12.6699C10.0836 12.2829 10.4149 11.9654 10.8114 11.7512C11.2079 11.537 11.655 11.4339 12.1052 11.4529C12.5555 11.4719 12.9923 11.6123 13.3694 11.8592C13.7464 12.1061 14.0497 12.4504 14.2471 12.8555C14.4446 13.2607 14.5288 13.7117 14.4909 14.1608C14.453 14.6099 14.2945 15.0404 14.032 15.4067C13.7695 15.7731 13.4128 16.0617 12.9998 16.242V19.55H10.9998V16.242C10.5538 16.0474 10.1744 15.7268 9.90791 15.3197C9.64147 14.9126 9.49962 14.4365 9.49976 13.95ZM7.49976 20.8C6.59976 20.8 5.89976 21.4 5.59976 22.2L5.21976 23.342C5.19473 23.4171 5.18791 23.4971 5.19985 23.5754C5.21179 23.6537 5.24216 23.728 5.28844 23.7922C5.33472 23.8565 5.3956 23.9088 5.46607 23.9449C5.53653 23.9811 5.61457 23.9999 5.69376 24H18.3058C18.385 24.0001 18.4632 23.9813 18.5338 23.9453C18.6044 23.9092 18.6654 23.8569 18.7118 23.7926C18.7582 23.7284 18.7886 23.654 18.8006 23.5756C18.8126 23.4973 18.8058 23.4172 18.7808 23.342L18.3998 22.2C18.1998 21.4 17.3998 20.8 16.4998 20.8H7.49976Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_3_218">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>



            <p>
                Liste Hotel
                </p>
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