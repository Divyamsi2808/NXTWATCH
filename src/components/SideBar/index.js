import {Component} from 'react'
import TabOptions from '../TabOptions'

import NxtWatchAppContext from '../../NxtWatchAppContext'

import {
  SideBarContainer,
  ContactUsSection,
  ContactUsText,
  SocialMediaLinksContainer,
  SocialMediaIcons,
  WhishingText,
} from './styledComponents'

class SideBar extends Component {
  renderSideBarMenu = () => (
    <NxtWatchAppContext.Consumer>
      {value => {
        const {isDarkMode} = value

        return (
          <SideBarContainer isDarkMode={isDarkMode}>
            <TabOptions />
            <ContactUsSection isDarkMode={isDarkMode}>
              <ContactUsText>CONTACT US</ContactUsText>
              <SocialMediaLinksContainer>
                <SocialMediaIcons
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <SocialMediaIcons
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <SocialMediaIcons
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </SocialMediaLinksContainer>
              <WhishingText>
                Enjoy! Now to see your channels and recommendations!
              </WhishingText>
            </ContactUsSection>
          </SideBarContainer>
        )
      }}
    </NxtWatchAppContext.Consumer>
  )

  render() {
    return <>{this.renderSideBarMenu()}</>
  }
}

export default SideBar
