import {AiTwotoneHome} from 'react-icons/ai'
import {FaFireAlt} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddFill} from 'react-icons/ri'

import NxtWatchAppContext from '../../NxtWatchAppContext'

import {
  SideBarOptionsList,
  LinkElement,
  OptionItem,
  OptionText,
} from './styledComponents'

const activeTabConstants = [
  {id: 'Home', path: '/', icon: <AiTwotoneHome />},
  {id: 'Trending', path: '/trending', icon: <FaFireAlt />},
  {id: 'Gaming', path: '/gaming', icon: <SiYoutubegaming />},
  {
    id: 'Saved videos',
    path: '/saved-videos',
    icon: <RiPlayListAddFill />,
  },
]

const TabOptions = () => (
  <NxtWatchAppContext.Consumer>
    {value => {
      const {isDarkMode, activeTab, onClickTab} = value

      return (
        <SideBarOptionsList>
          {activeTabConstants.map((eachObj, index) => {
            const onClickTabItem = () => {
              onClickTab(eachObj.id)
            }

            return (
              <LinkElement
                isDarkMode={isDarkMode}
                isTabActive={activeTab === activeTabConstants[index].id}
                key={eachObj.id}
                to={eachObj.path}
              >
                <OptionItem
                  isDarkMode={isDarkMode}
                  isTabActive={activeTab === activeTabConstants[index].id}
                  onClick={onClickTabItem}
                >
                  {eachObj.icon}
                  <OptionText
                    isDarkMode={isDarkMode}
                    isTabActive={activeTab === activeTabConstants[index].id}
                  >
                    {eachObj.id}
                  </OptionText>
                </OptionItem>
              </LinkElement>
            )
          })}
        </SideBarOptionsList>
      )
    }}
  </NxtWatchAppContext.Consumer>
)

export default TabOptions
