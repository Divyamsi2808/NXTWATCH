import {Component} from 'react'
import Header from '../Header'
import NxtWatchAppContext from '../../NxtWatchAppContext'
import SideBar from '../SideBar'

import {
  BackgroundContainer,
  ContentContainer,
  SideBarContainer,
  OtherCaseContainer,
  OtherCaseImage,
  OtherCaseHeading,
  OtherCasePara,
} from './styledComponents'

class NotFound extends Component {
  renderNotFoundView = () => (
    <NxtWatchAppContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const failureImage = isDarkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        return (
          <OtherCaseContainer isDarkMode={isDarkMode}>
            <OtherCaseImage
              src={failureImage}
              alt="not found"
              isDarkMode={isDarkMode}
            />
            <OtherCaseHeading isDarkMode={isDarkMode}>
              Page Not Found
            </OtherCaseHeading>
            <OtherCasePara isDarkMode={isDarkMode}>
              We are sorry, the page you requested could not be found.
            </OtherCasePara>
          </OtherCaseContainer>
        )
      }}
    </NxtWatchAppContext.Consumer>
  )

  render() {
    return (
      <NxtWatchAppContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <BackgroundContainer isDarkMode={isDarkMode}>
              <Header />
              <ContentContainer>
                <SideBarContainer>
                  <SideBar />
                </SideBarContainer>
                {this.renderNotFoundView()}
              </ContentContainer>
            </BackgroundContainer>
          )
        }}
      </NxtWatchAppContext.Consumer>
    )
  }
}

export default NotFound
