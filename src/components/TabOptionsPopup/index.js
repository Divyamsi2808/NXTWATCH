import {GrFormClose} from 'react-icons/gr'
import TabOptions from '../TabOptions'

import NxtWatchAppContext from '../../NxtWatchAppContext'

import {PopupMenuContainer, CloseButton} from './styledComponents'

const RenderPopupMenu = props => {
  const {close} = props

  return (
    <NxtWatchAppContext.Consumer>
      {value => {
        const {isDarkMode} = value

        return (
          <PopupMenuContainer isDarkMode={isDarkMode}>
            <CloseButton type="button" onClick={close} isDarkMode={isDarkMode}>
              <GrFormClose />
            </CloseButton>
            <TabOptions />
          </PopupMenuContainer>
        )
      }}
    </NxtWatchAppContext.Consumer>
  )
}

export default RenderPopupMenu
