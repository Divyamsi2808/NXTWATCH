import Popup from 'reactjs-popup'
import styled from 'styled-components'

export const HeaderForLargeDevices = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  width: 100%;
  background-color: ${props => (props.isDarkMode ? '#231f20' : '#ffffff')};
  border-bottom: 3px solid
    ${props => (props.isDarkMode ? '#f9f9f9' : '#181818')};
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const SmallDeviceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  background-color: ${props => (props.isDarkMode ? '#231f20' : '#ffffff')};
  @media screen and (min-width: 767px) {
    display: none;
  }
`

export const SmallHeaderLogo = styled.img`
  width: 50%;
  margin-left: 6px;
`
export const HeaderLogo = styled.img`
  width: 60%;
`

export const HeaderElementsContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  margin-left: 58%;
`

export const DarkModeButton = styled.button`
  font-size: 30px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  outline: none;
  border: none;
  background-color: transparent;
  @media screen and (max-width: 767px) {
    font-size: 24px;
  }
`

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 20px;
`

export const LogoutButton = styled.button`
  border: 2px solid ${props => (props.isDarkMode ? '#ffffff' : '#3b82f6')};
  background-color: transparent;
  padding: 10px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#3b82f6')};
  font-size: 14px;
  font-weight: 600;
  border-radius: 10px;
  margin-left: 20px;
  @media screen and (max-width: 767px) {
    border: none;
    outline: none;
    color: ${props => (props.isDarkMode ? '#ffffff' : '#0f0f0f')};
    font-size: 30px;
    margin-left: 2px;
  }
`

export const SmallDevicesHeaderElements = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`

export const MenuButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 30px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#0f0f0f')};
`

export const StyledPopup = styled(Popup)`
  width: 100%;
`

export const StyledPopupMenu = styled(Popup)`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LogoutPopup = styled.div`
  width: 100%;
  height: 20vh;
  background-color: ${props => (props.isDarkMode ? '#231f20' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 4px 4px
    ${props => (props.isDarkMode ? '#0f0f0f' : '#e2e8f0')};
  padding: 20px;
  border-radius: 10px;
`

export const LogoutText = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#231f20')};
  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
`

export const PopupButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 6px;
`

export const CancelButton = styled.button`
  border: 2px solid #e2e8f0;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#231f20')};
  background-color: transparent;
  border-radius: 6px;
  outline: none;
  padding: 10px;
  font-size: 12px;
  font-weight: 600;
`
export const ConfirmButton = styled.button`
  outline: none;
  border: none;
  color: #ffffff;
  background-color: #3b82f6;
  border-radius: 6px;
  padding: 10px;
  font-size: 12px;
  font-weight: 600;
  margin-left: 20px;
`
