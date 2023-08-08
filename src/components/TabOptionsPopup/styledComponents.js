import styled from 'styled-components'

import {GrFormClose} from 'react-icons/gr'

export const PopupMenuContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#231f20' : '#f9f9f9')};
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#231f20')};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  box-shadow: 1px 1px 4px 4px
    ${props => (props.isDarkMode ? '#000000' : '#e2e8f0')};
  @media screen and (min-width: 767px) {
    display: none;
  }
`

export const CloseButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 25px;
  margin-left: 80%;
`

export const GrFormCloseIcon = styled(GrFormClose)`
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#231f20')};
`
