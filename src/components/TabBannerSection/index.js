import {BannerContainer, IconContainer, BannerHeading} from './styledComponents'
import NxtWatchAppContext from '../../NxtWatchAppContext'

const TabBannerSection = props => {
  const {bannerObj} = props

  return (
    <NxtWatchAppContext.Consumer>
      {value => {
        const {isDarkMode} = value

        return (
          <BannerContainer isDarkMode={isDarkMode} data-testid="banner">
            <IconContainer isDarkMode={isDarkMode}>
              {bannerObj.icon}
            </IconContainer>
            <BannerHeading isDarkMode={isDarkMode}>
              {bannerObj.name}
            </BannerHeading>
          </BannerContainer>
        )
      }}
    </NxtWatchAppContext.Consumer>
  )
}

export default TabBannerSection
