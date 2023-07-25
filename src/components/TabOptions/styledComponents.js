import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const SideBarOptionsList = styled.ul`
  list-style: none;
  margin-top: 16px;
  width: 100%;
  margin-left: -10%;
`
export const OptionItem = styled.li`
  display: flex;
  align-items: center;
  padding-left: 10px;
  width: 100%;
  background-color: ${props => {
    switch (true) {
      case props.isTabActive && props.isDarkMode:
        return '#606060'
      case !props.isDarkMode && props.isTabActive:
        return '#e2e8f0'
      default:
        return 'transparent'
    }
  }};
`

export const LinkElement = styled(Link)`
  background-color: transparent;
  border: none;
  text-decoration: none;
  outline: none;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${props => {
    switch (true) {
      case (props.isDarkMode && props.isTabActive) ||
        (!props.isDarkMode && props.isTabActive):
        return '#ff0b37'
      case props.isDarkMode:
        return '#424242'
      default:
        return '#7e858e'
    }
  }};
  width: 100%;
`

export const OptionText = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${props => {
    switch (true) {
      case props.isDarkMode && props.isTabActive:
        return '#ffffff'
      case props.isDarkMode && !props.isTabActive:
        return '#606060'
      case !props.isDarkMode && props.isTabActive:
        return '#000000'
      case !props.isDarkMode && !props.isTabActive:
        return '#7e858e'
      case props.isDarkMode:
        return '#424242'
      default:
        return '#212121'
    }
  }};
  margin-left: 10px;
`
