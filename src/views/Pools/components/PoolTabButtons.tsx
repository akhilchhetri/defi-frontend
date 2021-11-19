import React, { useState } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { ViewMode } from 'state/user/actions'
import styled from 'styled-components'
import { ButtonMenu, ButtonMenuItem, Toggle, Text, NotificationDot, Checkbox } from '@doodaswap/uikit'
import { useTranslation } from 'contexts/Localization'
import ToggleView from './ToggleView/ToggleView'
import SearchInput from '../../../components/SearchInput'

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  ${Text} {
    margin-left: 8px;
  }
`
const LabelWrapper = styled.div`
  > ${Text} {
    font-size: 12px;
  }
`
const SearchIcon = styled.div`
  // background: red;
  position: absolute;
  top: 1.1rem !important;
  padding-left: 0.9rem;
  padding-top: 0.3rem;
  z-index: 100;
  width: auto;
  height: 50%;
`

const ViewControls = styled.div`
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100%;
  margin-right: 0rem;

  > div {
    padding: 8px 0px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
    width: auto;

    > div {
      padding: 0;
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    padding-left: 12px;
    padding-right: 12px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 16px;
  }
`
const StyledText = styled(Text)`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #99a2ab;
`

const StyledButtonMenu = styled(ButtonMenu)`
  border: none;
  width: 100%;
  background: none;
  border-radius: ${({ theme }) => theme.radii.doodaCard};
`

const StyledButtonMenuItem = styled(ButtonMenuItem)`
  background-color: #3763a4;
  padding: 0.5rem 5rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.8px;
  color: #f1f3f5;
  margin-right: 1rem;
`

const StyledButtonMenuItemInactive = styled(StyledButtonMenuItem)`
  background: #ffffff;
  color: ${({ theme }) => theme.colors.doodaPrimary};
  background: #e9ecef;
  border-radius: 2px;
`

const PoolTabButtons = ({ stakedOnly, setStakedOnly, hasStakeInFinishedPools, viewMode, setViewMode }) => {
  const { url, isExact } = useRouteMatch()
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState('')

  const viewModeToggle = <ToggleView viewMode={viewMode} onToggle={(mode: ViewMode) => setViewMode(mode)} />

  const liveOrFinishedSwitch = (
    <Wrapper>
      {/* <ButtonMenu activeIndex={isExact ? 0 : 1} scale="sm" variant="subtle"> */}
      {/* <ButtonMenuItem as={Link} to={`${url}`}>
          {t('Live')}
        </ButtonMenuItem>
        <NotificationDot show={hasStakeInFinishedPools}>
          <ButtonMenuItem id="finished-pools-button" as={Link} to={`${url}/history`}>
            {t('Finished')}
          </ButtonMenuItem>
        </NotificationDot>
      </ButtonMenu> */}
      <StyledButtonMenu activeIndex={isExact ? 0 : 1} scale="sm" variant="subtle">
        <StyledButtonMenuItem as={Link} to={`${url}`}>
          {t('Active')}
        </StyledButtonMenuItem>
        <NotificationDot show={hasStakeInFinishedPools}>
          <StyledButtonMenuItemInactive id="finished-pools-button" as={Link} to={`${url}/history`}>
            {t('Inactive')}
          </StyledButtonMenuItemInactive>
        </NotificationDot>
      </StyledButtonMenu>
      {/* </ButtonMenu> */}
    </Wrapper>
  )

  const stakedOnlySwitch = (
    <ToggleWrapper>
      {/* <Toggle checked={stakedOnly} onChange={() => setStakedOnly(!stakedOnly)} scale="sm" />
      <Text> {t('Staked only')}</Text> */}
      <Checkbox
        id="staked-only-farms"
        name="confirmed"
        type="checkbox"
        onChange={() => setStakedOnly(!stakedOnly)}
        scale="sm"
      />

      <StyledText> {t('Staked')}</StyledText>
    </ToggleWrapper>
  )
  const DfoOnlySwitch = (
    <ToggleWrapper>
      <Checkbox
        id="dfo-only-farms"
        name="confirmed"
        type="checkbox"
        // onChange={() => setStakedOnly(!stakedOnly)}
        scale="sm"
      />
      <StyledText> {t('DFO')}</StyledText>
    </ToggleWrapper>
  )
  const handleChangeSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const SearchContainer = (
    <LabelWrapper style={{ marginLeft: 16 }}>
      {/* <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase">
                {t('Search')}
              </Text> */}
      <SearchIcon>
        <svg width="30" height="25" viewBox="4 -6.5 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 16C9.77498 15.9996 11.4988 15.4054 12.897 14.312L17.293 18.708L18.707 17.294L14.311 12.898C15.405 11.4997 15.9996 9.77544 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16ZM8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2Z"
            fill="#636C7D"
          />
        </svg>
      </SearchIcon>
      <SearchInput onChange={handleChangeSearchQuery} placeholder="Search Pools" />
    </LabelWrapper>
  )
  return (
    <ViewControls>
      {/* {viewModeToggle} */}
      {SearchContainer}
      {liveOrFinishedSwitch}
      {stakedOnlySwitch}
      {DfoOnlySwitch}
    </ViewControls>
  )
}

export default PoolTabButtons
