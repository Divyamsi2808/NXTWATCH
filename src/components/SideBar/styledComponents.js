import styled from 'styled-components'

export const SideBarContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#181818 ' : 'transparent')};
  display: flex;
  flex-direction: column;
  width: 18%;
  min-height: 100vh;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const ContactUsSection = styled.div`
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#212121')};
  margin-left: 10px;
  margin-top: 40vh;
`

export const ContactUsText = styled.p`
  font-size: 20px;
  font-weight: 700;
`

export const SocialMediaLinksContainer = styled.div`
  display: flex;
  align-items: center;
`

export const SocialMediaIcons = styled.img`
  width: 15%;
  margin-right: 10px;
`
export const WhishingText = styled.p`
  font-size: 16px;
  font-weight: 600;
`
