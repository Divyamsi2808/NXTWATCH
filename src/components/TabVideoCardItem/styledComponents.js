import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const LinkElement = styled(Link)`
  width: 100%;
  margin-right: 20px;
  margin-bottom: 20px;
  text-decoration: none;
`

export const VideoContainer = styled.li`
  display: flex;
  width: 100%;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f1f1f1')};
`

export const VideoThumbnail = styled.img`
  width: 30%;
  height: 200px;
`

export const VideoContentContainer = styled.div`
  display: flex;
  padding: 10px;
`

export const ChannelLogo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`

export const VideoContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const TitleText = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#0f0f0f')};
`

export const ChannelName = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-top: -6px;
  color: ${props => (props.isDarkMode ? ' #94a3b8' : '#616e7c')};
`
export const VideoInfoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  margin-top: -6px;
  color: ${props => (props.isDarkMode ? ' #94a3b8' : '#616e7c')};
`

export const VideoInfoPara = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${props => (props.isDarkMode ? ' #94a3b8' : '#616e7c')};
`
