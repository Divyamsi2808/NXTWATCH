import {Component} from 'react'
import {RiPlayListAddFill} from 'react-icons/ri'
import Header from '../Header'
import NxtWatchAppContext from '../../NxtWatchAppContext'
import SideBar from '../SideBar'
import TabBannerSection from '../TabBannerSection'
import TabVideoCardItem from '../TabVideoCardItem'

import {
  BackgroundContainer,
  ContentContainer,
  SideBarContainer,
  SuccessViewContainer,
  AllVideosContainer,
  OtherCaseContainer,
  OtherCaseImage,
  OtherCaseHeading,
  OtherCasePara,
} from './styledComponents'

class SavedVideosRoute extends Component {
  renderAllVideos = () => (
    <NxtWatchAppContext.Consumer>
      {value => {
        const {isDarkMode, savedVideosList} = value

        return (
          <AllVideosContainer isDarkMode={isDarkMode}>
            {savedVideosList.map(eachObj => (
              <TabVideoCardItem key={eachObj.id} videoObj={eachObj} />
            ))}
          </AllVideosContainer>
        )
      }}
    </NxtWatchAppContext.Consumer>
  )

  renderNoVideosView = () => (
    <NxtWatchAppContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <OtherCaseContainer isDarkMode={isDarkMode}>
            <OtherCaseImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <OtherCaseHeading isDarkMode={isDarkMode}>
              No saved videos found
            </OtherCaseHeading>
            <OtherCasePara isDarkMode={isDarkMode}>
              You can save your videos while watching them
              <br />
              Please try again.
            </OtherCasePara>
          </OtherCaseContainer>
        )
      }}
    </NxtWatchAppContext.Consumer>
  )

  renderSuccessView = () => {
    const bannerObj = {
      name: 'Saved Videos',
      icon: <RiPlayListAddFill />,
    }
    return (
      <SuccessViewContainer>
        <TabBannerSection bannerObj={bannerObj} />
        {this.renderAllVideos()}
      </SuccessViewContainer>
    )
  }

  renderAllViews = () => (
    <NxtWatchAppContext.Consumer>
      {value => {
        const {savedVideosList} = value
        switch (true) {
          case savedVideosList.length !== 0:
            return this.renderSuccessView()
          case savedVideosList.length === 0:
            return this.renderNoVideosView()
          default:
            return null
        }
      }}
    </NxtWatchAppContext.Consumer>
  )

  render() {
    return (
      <NxtWatchAppContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <BackgroundContainer
              isDarkMode={isDarkMode}
              data-testid="savedVideos"
            >
              <Header />
              <ContentContainer>
                <SideBarContainer>
                  <SideBar />
                </SideBarContainer>
                {this.renderAllViews()}
              </ContentContainer>
            </BackgroundContainer>
          )
        }}
      </NxtWatchAppContext.Consumer>
    )
  }
}

export default SavedVideosRoute
