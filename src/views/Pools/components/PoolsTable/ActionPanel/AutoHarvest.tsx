import React from 'react'
import { Text, Flex, TooltipText, useTooltip, Skeleton, Heading, LinkExternal } from '@doodaswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { getCakeVaultEarnings } from 'views/Pools/helpers'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'
import { useCakeVault } from 'state/pools/hooks'
import { DeserializedPool } from 'state/types'
import { BASE_BSC_SCAN_URL } from 'config'
import { getAddress, getCakeVaultAddress } from 'utils/addressHelpers'

import { ActionContainer, ActionTitles, ActionContent, StyledTextDOODA, StyledLinkExternal } from './styles'
import UnstakingFeeCountdownRow from '../../CakeVaultCard/UnstakingFeeCountdownRow'

interface AutoHarvestActionProps extends DeserializedPool {
  userDataLoaded: boolean
  address?: string
  projectLink?: string
  pool?: any
}

const AutoHarvestAction: React.FunctionComponent<AutoHarvestActionProps> = ({
  userDataLoaded,
  earningTokenPrice,
  address,
  projectLink,
  pool,
}) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()

  const {
    userData: { cakeAtLastUserAction, userShares },
    pricePerFullShare,
    fees: { performanceFee },
  } = useCakeVault()
  const { hasAutoEarnings, autoCakeToDisplay, autoUsdToDisplay } = getCakeVaultEarnings(
    account,
    cakeAtLastUserAction,
    userShares,
    pricePerFullShare,
    earningTokenPrice,
  )

  const {
    sousId,
    stakingToken,
    earningToken,
    totalStaked,
    startBlock,
    endBlock,
    stakingLimit,
    contractAddress,
    userData,
    isAutoVault,
  } = pool

  const poolContractAddress = getAddress(contractAddress)
  const cakeVaultContractAddress = getCakeVaultAddress()

  const earningTokenBalance = autoCakeToDisplay
  const earningTokenDollarBalance = autoUsdToDisplay
  const hasEarnings = hasAutoEarnings

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    t('Subtracted automatically from each yield harvest and burned.'),
    { placement: 'bottom-start' },
  )

  const actionTitle = (
    <Text fontSize="12px" bold color="secondary" as="span" textTransform="uppercase">
      {t('Recent CAKE profit')}
    </Text>
  )

  if (!account) {
    return (
      <ActionContainer>
        {/* <ActionTitles>{actionTitle}</ActionTitles> */}
        <ActionContent>
          <Heading>0</Heading>
        </ActionContent>
      </ActionContainer>
    )
  }

  if (!userDataLoaded) {
    return (
      <ActionContainer>
        {/* <ActionTitles>{actionTitle}</ActionTitles> */}
        <ActionContent>
          <Skeleton width={180} height="32px" marginTop={14} />
        </ActionContent>
      </ActionContainer>
    )
  }

  return (
    <ActionContainer isAutoVault>
      {/* <ActionTitles>{actionTitle}</ActionTitles> */}
      <ActionContent>
        <Flex flex="1" pt="16px" flexDirection="column" alignSelf="flex-start">
          <>
            {/* {hasEarnings ? (
              <>
                <Balance lineHeight="1" bold fontSize="20px" decimals={5} value={earningTokenBalance} />
                {earningTokenPrice > 0 && (
                  <Balance
                    display="inline"
                    fontSize="12px"
                    color="textSubtle"
                    decimals={2}
                    prefix="~"
                    value={earningTokenDollarBalance}
                    unit=" USD"
                  />
                )}
              </>
            ) : (
              <>
                <Heading color="textDisabled">0</Heading>
                <Text fontSize="12px" color="textDisabled">
                  0 USD
                </Text>
              </>
            )}
          </> */}
            <Text color="doodaDark">{t('Total Deposit')}</Text>
            <Text color="doodaDark">{t('Deposit Assets')}</Text>
            <Text color="doodaDark">{t('My Deposit Assets')}</Text>
            <Text color="doodaDark">{t('My Reward Assets')}</Text>
          </>
        </Flex>
        <Flex flex="1" pt="16px" flexDirection="column" alignSelf="flex-start" alignItems="flex-end">
          {/* <UnstakingFeeCountdownRow isTableVariant /> */}
          {/* <Flex mb="2px" justifyContent="space-between" alignItems="center"> */}
          {/* {tooltipVisible && tooltip}
            <TooltipText ref={targetRef} small>
              {t('Performance Fee')}
            </TooltipText>
            <Flex alignItems="center">
              <Text ml="4px" small>
                {performanceFee / 100}%
              </Text>
            </Flex> */}
          <Text color="doodaDark">29,299,306</Text>
          <StyledTextDOODA color="doodaDark">
            {t('DOODA')}
            <LinkIcon />
          </StyledTextDOODA>
          <Text color="green">$0</Text>
          <Text color="green">$0.00</Text>
          <div style={{ marginTop: '2rem' }}>
            <StyledLinkExternal
              href={`${BASE_BSC_SCAN_URL}/address/${isAutoVault ? cakeVaultContractAddress : poolContractAddress}`}
              bold={false}
            >
              {t('View on BscScan')}
            </StyledLinkExternal>
            <StyledLinkExternal href={earningToken.projectLink} bold={false}>
              {t('View Project Site')}
            </StyledLinkExternal>
          </div>
          {/* </Flex> */}
        </Flex>
      </ActionContent>
    </ActionContainer>
  )
}

export const LinkIcon = () => {
  return (
    <>
      <svg width="20" height="20" viewBox="0 -2.1 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.778 2.5h-5.223a.722.722 0 1 0 0 1.444h4.501v4.5a.722.722 0 1 0 1.444 0V3.223a.722.722 0 0 0-.722-.722z"
          fill="#4D5560"
        />
        <path
          d="M7.787 13.224a.713.713 0 0 1-1.01 0 .714.714 0 0 1-.001-1.011l1.01 1.01zm0 0 8.77-8.77a.714.714 0 1 0-1.01-1.012l-8.77 8.77 1.01 1.012z"
          fill="#4D5560"
          stroke="#4D5560"
          strokeWidth=".2"
        />
        <path
          d="M16.403 10.31a.628.628 0 0 0-.628.628v5.306H3.756V4.225h5.306a.628.628 0 1 0 0-1.256H3.128a.628.628 0 0 0-.628.628v13.275c0 .347.281.628.628.628h13.275a.628.628 0 0 0 .628-.628v-5.934a.628.628 0 0 0-.628-.628z"
          fill="#4D5560"
        />
      </svg>
    </>
  )
}
export default AutoHarvestAction
