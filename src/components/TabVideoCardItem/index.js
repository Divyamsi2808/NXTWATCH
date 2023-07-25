import {formatDistanceToNow} from 'date-fns'

import {BsDot} from 'react-icons/bs'

import NxtWatchAppContext from '../../NxtWatchAppContext'
import {
  VideoContainer,
  VideoThumbnail,
  VideoContentContainer,
  VideoContent,
  ChannelName,
  TitleText,
  VideoInfoContainer,
  VideoInfoPara,
  LinkElement,
} from './styledComponents'

const TabVideoCardItem = props => {
  const {videoObj} = props
  const {channel, title, viewCount, thumbnailUrl, publishedAt, id} = videoObj

  let postedAt = formatDistanceToNow(new Date(publishedAt))

  const postedAtList = postedAt.split(' ')

  if (postedAtList.length === 3) {
    postedAtList.shift()
    postedAt = postedAtList.join(' ')
  }
  return (
    <NxtWatchAppContext.Consumer>
      {value => {
        const {isDarkMode} = value

        return (
          <LinkElement to={`/videos/${id}`}>
            <VideoContainer isDarkMode={isDarkMode}>
              <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <VideoContentContainer isDarkMode={isDarkMode}>
                <VideoContent>
                  <TitleText isDarkMode={isDarkMode}>{title}</TitleText>
                  <ChannelName isDarkMode={isDarkMode}>
                    {channel.name}
                  </ChannelName>
                  <VideoInfoContainer>
                    <VideoInfoPara>{viewCount} views</VideoInfoPara>
                    <BsDot />
                    <VideoInfoPara>{postedAt} ago</VideoInfoPara>
                  </VideoInfoContainer>
                </VideoContent>
              </VideoContentContainer>
            </VideoContainer>
          </LinkElement>
        )
      }}
    </NxtWatchAppContext.Consumer>
  )
}

export default TabVideoCardItem
