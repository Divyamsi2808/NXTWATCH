import Cookie from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {BiMenu, BiExit, BiSun} from 'react-icons/bi'
import NxtWatchAppContext from '../../NxtWatchAppContext'
import RenderPopupMenu from '../TabOptionsPopup'

import {
  HeaderForLargeDevices,
  HeaderLogo,
  HeaderElementsContainer,
  DarkModeButton,
  ProfileImage,
  LogoutButton,
  SmallDeviceHeader,
  SmallHeaderLogo,
  SmallDevicesHeaderElements,
  MenuButton,
  LogoutText,
  LogoutPopup,
  CancelButton,
  ConfirmButton,
  PopupButtonContainer,
  StyledPopup,
  StyledPopupMenu,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookie.remove('jwt_token')
    history.replace('/login')
  }

  const logoutContent = close => (
    <NxtWatchAppContext.Consumer>
      {value => {
        const {isDarkMode} = value

        return (
          <LogoutPopup isDarkMode={isDarkMode}>
            <LogoutText isDarkMode={isDarkMode}>
              Are you sure, you want to logout?
            </LogoutText>
            <PopupButtonContainer>
              <CancelButton
                isDarkMode={isDarkMode}
                type="button"
                onClick={() => close()}
              >
                Cancel
              </CancelButton>
              <ConfirmButton
                isDarkMode={isDarkMode}
                type="button"
                onClick={onClickLogout}
              >
                Confirm
              </ConfirmButton>
            </PopupButtonContainer>
          </LogoutPopup>
        )
      }}
    </NxtWatchAppContext.Consumer>
  )

  const renderSmallDeviceHeader = () => (
    <NxtWatchAppContext.Consumer>
      {value => {
        const {isDarkMode, onChangeDarkMode} = value
        const nxtWatchLogo = isDarkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const logoutPopupForSmallDevice = () => (
          <StyledPopup
            modal
            trigger={
              <LogoutButton
                type="button"
                isDarkMode={isDarkMode}
                onClick={onClickLogout}
              >
                <BiExit />
              </LogoutButton>
            }
          >
            {close => logoutContent(close)}
          </StyledPopup>
        )

        const renderPopupMenu = () => (
          <StyledPopupMenu
            modal
            trigger={
              <MenuButton isDarkMode={isDarkMode} type="button">
                <BiMenu />
              </MenuButton>
            }
            className="popup-content"
          >
            {close => <RenderPopupMenu close={close} />}
          </StyledPopupMenu>
        )

        return (
          <SmallDeviceHeader isDarkMode={isDarkMode}>
            <Link to="/">
              <SmallHeaderLogo src={nxtWatchLogo} alt="nxt watch logo" />
            </Link>
            <SmallDevicesHeaderElements>
              <DarkModeButton
                isDarkMode={isDarkMode}
                type="button"
                onClick={onChangeDarkMode}
                data-testid="theme"
              >
                {isDarkMode ? <BiSun /> : <FaMoon />}
              </DarkModeButton>
              {renderPopupMenu()}
              {logoutPopupForSmallDevice()}
            </SmallDevicesHeaderElements>
          </SmallDeviceHeader>
        )
      }}
    </NxtWatchAppContext.Consumer>
  )

  const renderLargeDeviceHeader = () => (
    <NxtWatchAppContext.Consumer>
      {value => {
        const {isDarkMode, onChangeDarkMode, onClickTab} = value

        const onClickLogo = () => {
          onClickTab('Home')
        }

        const nxtWatchLogo = isDarkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const logoutPopupForLargeDevice = () => (
          <StyledPopup
            modal
            trigger={
              <LogoutButton
                type="button"
                isDarkMode={isDarkMode}
                onClick={onClickLogout}
              >
                Logout
              </LogoutButton>
            }
          >
            {close => logoutContent(close)}
          </StyledPopup>
        )

        return (
          <HeaderForLargeDevices isDarkMode={isDarkMode}>
            <Link to="/">
              <HeaderLogo
                src={nxtWatchLogo}
                alt="website logo"
                onClick={onClickLogo}
              />
            </Link>
            <HeaderElementsContainer isDarkMode={isDarkMode}>
              <DarkModeButton
                isDarkMode={isDarkMode}
                type="button"
                onClick={onChangeDarkMode}
                data-testid="theme"
              >
                {isDarkMode ? <BiSun /> : <FaMoon />}
              </DarkModeButton>
              <ProfileImage
                isDarkMode={isDarkMode}
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              {logoutPopupForLargeDevice()}
            </HeaderElementsContainer>
          </HeaderForLargeDevices>
        )
      }}
    </NxtWatchAppContext.Consumer>
  )
  return (
    <>
      {renderLargeDeviceHeader()}
      {renderSmallDeviceHeader()}
    </>
  )
}

export default withRouter(Header)
