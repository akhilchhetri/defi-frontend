import React from 'react'
import { Button, Text, useModal, Flex, Skeleton, Heading } from '@doodaswap/uikit'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { PoolCategory } from 'config/constants/types'
import { formatNumber, getBalanceNumber, getFullDisplayBalance } from 'utils/formatBalance'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'
import { BIG_ZERO } from 'utils/bigNumber'
import { DeserializedPool } from 'state/types'
import { BASE_BSC_SCAN_URL } from 'config'
import { getAddress, getCakeVaultAddress } from 'utils/addressHelpers'

import { ActionContainer, ActionTitles, ActionContent, StyledTextDOODA, StyledLinkExternal } from './styles'
import CollectModal from '../../PoolCard/Modals/CollectModal'
import { LinkIcon } from './AutoHarvest'

interface HarvestActionProps extends DeserializedPool {
  userDataLoaded: boolean
}

const HarvestAction: React.FunctionComponent<HarvestActionProps> = ({
  sousId,
  poolCategory,
  earningToken,
  userData,
  userDataLoaded,
  earningTokenPrice,
  contractAddress,
  isAutoVault,
}) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()

  const poolContractAddress = getAddress(contractAddress)
  const cakeVaultContractAddress = getCakeVaultAddress()

  const earnings = userData?.pendingReward ? new BigNumber(userData.pendingReward) : BIG_ZERO
  const earningTokenBalance = getBalanceNumber(earnings, earningToken.decimals)
  const earningTokenDollarBalance = getBalanceNumber(earnings.multipliedBy(earningTokenPrice), earningToken.decimals)
  const hasEarnings = earnings.gt(0)
  const fullBalance = getFullDisplayBalance(earnings, earningToken.decimals)
  const formattedBalance = formatNumber(earningTokenBalance, 3, 3)
  const isCompoundPool = sousId === 0
  const isBnbPool = poolCategory === PoolCategory.BINANCE

  const [onPresentCollect] = useModal(
    <CollectModal
      formattedBalance={formattedBalance}
      fullBalance={fullBalance}
      earningToken={earningToken}
      earningsDollarValue={earningTokenDollarBalance}
      sousId={sousId}
      isBnbPool={isBnbPool}
      isCompoundPool={isCompoundPool}
    />,
  )

  const actionTitle = (
    <>
      <Text fontSize="12px" bold color="secondary" as="span" textTransform="uppercase">
        {earningToken.symbol}{' '}
      </Text>
      <Text fontSize="12px" bold color="textSubtle" as="span" textTransform="uppercase">
        {t('Earned')}
      </Text>
    </>
  )

  if (!account) {
    return (
      <ActionContainer>
        <ActionTitles>{actionTitle}</ActionTitles>
        <ActionContent>
          <Heading>0</Heading>
          <Button disabled>{isCompoundPool ? t('Collect') : t('Harvest')}</Button>
        </ActionContent>
      </ActionContainer>
    )
  }

  if (!userDataLoaded) {
    return (
      <ActionContainer>
        <ActionTitles>{actionTitle}</ActionTitles>
        <ActionContent>
          <Skeleton width={180} height="32px" marginTop={14} />
        </ActionContent>
      </ActionContainer>
    )
  }

  return (
    <ActionContainer>
      <ActionTitles>{actionTitle}</ActionTitles>
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
            )} */}
            <Text color="doodaDark">{t('Total Deposit')}</Text>
            <Text color="doodaDark">{t('Deposit Assets')}</Text>
            <Text color="doodaDark">{t('My Deposit Assets')}</Text>
            <Text color="doodaDark">{t('My Reward Assets')}</Text>
          </>
        </Flex>
        {/* <Button disabled={!hasEarnings} onClick={onPresentCollect}>
          {isCompoundPool ? t('Collect') : t('Harvest')}
        </Button> */}
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

export default HarvestAction
