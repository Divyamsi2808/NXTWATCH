import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
`
export const ContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
`

export const VideoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  padding: 10px;
  flex-direction: column;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f1f1f1')};
  @media screen and (max-width: 767px) {
    margin-left: 0px;
  }
`
export const VideoContentContainer = styled.div`
  width: 100%;
  background-color: transparent;
  padding: 10px;
`

export const TitleText = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#383838')};
`
export const VideoInfoContainer = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 600;
  margin-top: -6px;
  color: ${props => (props.isDarkMode ? ' #94a3b8' : '#616e7c')};
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

export const VideoLikeViewsContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  margin-top: -6px;
  color: ${props => (props.isDarkMode ? ' #94a3b8' : '#616e7c')};
  @media screen and (max-width: 767px) {
    margin-bottom: -20px;
  }
`

export const VideoInfoPara = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${props => (props.isDarkMode ? ' #94a3b8' : '#616e7c')};
`

export const VideoIconsContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  width: 40%;
`

export const VideoIconitem = styled.li`
  margin-left: 10px;
`

export const VideoIconButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  padding: 5px;
  font-size: 14px;
  cursor: pointer;
  color: ${props => (props.isDarkMode ? ' #94a3b8' : '#64748b')};
`

export const LikeVideoIconButton = styled(VideoIconButton)`
  color: ${props => (props.isLike ? '#2563eb' : '#64748b')};
`
export const DislikeVideoIconButton = styled(VideoIconButton)`
  color: ${props => (props.isDislike ? '#2563eb' : '#64748b')};
`
export const SaveVideoIconButton = styled(VideoIconButton)`
  color: ${props => props.isSave && '#2563eb'};
`

export const ChannelInfoContainer = styled.div`
  display: flex;
  padding: 10px;
`

export const ChannelLogo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`
export const ChannelInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

export const ChannelName = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#383838')};
`

export const ChannelSubscribers = styled.p`
  color: ${props => (props.isDarkMode ? ' #94a3b8' : '#616e7c')};
  font-size: 12px;
  font-weight: 500;
  margin-top: -10px;
`

export const VideoDescription = styled.p`
  color: ${props => (props.isDarkMode ? ' #f1f1f1' : '#64748b')};
  font-size: 16px;
  font-weight: 600;
`

export const OtherCaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding: 20px;
  text-align: center;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
`

export const OtherCaseImage = styled.img`
  width: 50%;
`
export const OtherCaseHeading = styled.h1`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#0f0f0f')};
  font-size: 30px;
  font-weight: 600;
`

export const OtherCasePara = styled.p`
  color: ${props => (props.isDarkMode ? '#94a3b8' : '#64748b')};
  font-size: 20px;
  font-weight: 600;
`

export const OtherCaseButton = styled.button`
  padding: 10px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  border: none;
  outline: none;
  background-color: #3b82f6;
  border-radius: 10px;
`
export const LoaderContainer = styled.div`
  color: #4f46e5;
  flex-grow: 1;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
`
