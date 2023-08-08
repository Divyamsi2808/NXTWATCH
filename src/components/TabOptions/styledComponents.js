import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const SideBarOptionsList = styled.ul`
  list-style: none;
  margin-top: 16px;
  margin-left: -36px;
  margin-right: 6px;
`

export const LinkElement = styled(Link)`
  background-color: transparent;
  border: none;
  text-decoration: none;
  outline: none;
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
`

export const OptionItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 8px;
  box-shadow: 0px 0px 2px 2px
    ${props => {
      switch (true) {
        case props.isTabActive && props.isDarkMode:
          return '#0f0d0f'
        case !props.isDarkMode && props.isTabActive:
          return '#d7dfe9'
        default:
          return 'transparent'
      }
    }};
  background-color: ${props => {
    switch (true) {
      case props.isTabActive && props.isDarkMode:
        return '#2e2c2e'
      case !props.isDarkMode && props.isTabActive:
        return '#e2e8f0'
      default:
        return 'transparent'
    }
  }};

  @media screen and (min-width: 768px) {
    font-size: ${props => (props.isTabActive ? '17px' : '15px')};
    font-weight: ${props => (props.isTabActive ? '600' : '500')};
    padding-left: ${props => (props.isTabActive ? '24px' : '10px')};
  }
`

export const OptionText = styled.p`
  color: ${props => {
    switch (true) {
      case props.isDarkMode && props.isTabActive:
        return '#cccccc'
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
