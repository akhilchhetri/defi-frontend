import React from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { getBalanceNumber, getFullDisplayBalance } from 'utils/formatBalance'
import { useTranslation } from 'contexts/Localization'
import {
  Flex,
  MetamaskIcon,
  Text,
  TooltipText,
  LinkExternal,
  TimerIcon,
  Skeleton,
  useTooltip,
  Button,
  Link,
  HelpIcon,
} from '@doodaswap/uikit'
import { BASE_BSC_SCAN_URL } from 'config'
import { useBlock } from 'state/block/hooks'
import { useCakeVault } from 'state/pools/hooks'
import { DeserializedPool } from 'state/types'
import { getAddress, getCakeVaultAddress } from 'utils/addressHelpers'
import { registerToken } from 'utils/wallet'
import { getBscScanLink } from 'utils'
import Balance from 'components/Balance'
import { getPoolBlockInfo } from 'views/Pools/helpers'

interface ExpandedFooterProps {
  pool: DeserializedPool
  account: string
}

const ExpandedWrapper = styled(Flex)`
  svg {
    height: 14px;
    width: 14px;
  }
`

const ExpandedFooter: React.FC<ExpandedFooterProps> = ({ pool, account }) => {
  const { t } = useTranslation()
  const { currentBlock } = useBlock()
  const {
    totalCakeInVault,
    fees: { performanceFee },
  } = useCakeVault()

  const {
    stakingToken,
    earningToken,
    totalStaked,
    startBlock,
    endBlock,
    stakingLimit,
    contractAddress,
    sousId,
    isAutoVault,
  } = pool

  const tokenAddress = earningToken.address || ''
  const poolContractAddress = getAddress(contractAddress)
  const cakeVaultContractAddress = getCakeVaultAddress()
  const isMetaMaskInScope = !!window.ethereum?.isMetaMask
  const isManualCakePool = sousId === 0

  const { shouldShowBlockCountdown, blocksUntilStart, blocksRemaining, hasPoolStarted, blocksToDisplay } =
    getPoolBlockInfo(pool, currentBlock)

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    t('Subtracted automatically from each yield harvest and burned.'),
    { placement: 'bottom-start' },
  )

  const getTotalStakedBalance = () => {
    if (isAutoVault) {
      return getBalanceNumber(totalCakeInVault, stakingToken.decimals)
    }
    if (isManualCakePool) {
      const manualCakeTotalMinusAutoVault = new BigNumber(totalStaked).minus(totalCakeInVault)
      return getBalanceNumber(manualCakeTotalMinusAutoVault, stakingToken.decimals)
    }
    return getBalanceNumber(totalStaked, stakingToken.decimals)
  }

  const {
    targetRef: totalStakedTargetRef,
    tooltip: totalStakedTooltip,
    tooltipVisible: totalStakedTooltipVisible,
  } = useTooltip(t('Total amount of %symbol% staked in this pool', { symbol: stakingToken.symbol }), {
    placement: 'bottom',
  })

  return (
    <ExpandedWrapper flexDirection="column">
      <Flex mb="2px" justifyContent="space-between" alignItems="center">
        <Text color="doodaDark" small>
          {t('총 예 수량')}:
        </Text>
        <Flex alignItems="flex-start">
          {totalStaked && totalStaked.gte(0) ? (
            <>
              {/* <Balance small value={getTotalStakedBalance()} decimals={0} unit={` ${stakingToken.symbol}`} /> */}
              <Balance color="green" small value={getTotalStakedBalance()} decimals={0} unit="$ " type="stakeBalance" />
              <span ref={totalStakedTargetRef}>
                <HelpIcon color="textSubtle" width="20px" ml="6px" mt="4px" />
              </span>
            </>
          ) : (
            <Skeleton width="90px" height="21px" />
          )}
          {totalStakedTooltipVisible && totalStakedTooltip}
        </Flex>
      </Flex>
      {stakingLimit && stakingLimit.gt(0) && (
        <Flex mb="2px" justifyContent="space-between">
          <Text small>{t('Max. stake per user')}:</Text>
          <Text small>{`${getFullDisplayBalance(stakingLimit, stakingToken.decimals, 0)} ${stakingToken.symbol}`}</Text>
        </Flex>
      )}
      {shouldShowBlockCountdown && (
        <Flex mb="2px" justifyContent="space-between" alignItems="center">
          <Text small>{hasPoolStarted ? t('Ends in') : t('Starts in')}:</Text>
          {blocksRemaining || blocksUntilStart ? (
            <Flex alignItems="center">
              <Link external href={getBscScanLink(hasPoolStarted ? endBlock : startBlock, 'countdown')}>
                <Balance small value={blocksToDisplay} decimals={0} color="primary" />
                <Text small ml="4px" color="primary" textTransform="lowercase">
                  {t('Blocks')}
                </Text>
                <TimerIcon ml="4px" color="primary" />
              </Link>
            </Flex>
          ) : (
            <Skeleton width="54px" height="21px" />
          )}
        </Flex>
      )}
      <Flex mb="2px" justifyContent="space-between" alignItems="center">
        {tooltipVisible && tooltip}
        <TooltipText color="doodaDark" ref={targetRef} small>
          {t('예치 자산')}
        </TooltipText>
        <Flex alignItems="center">
          <Text ml="4px" color="doodaDark">
            DOODA
            <LinkIcon />
          </Text>
        </Flex>
      </Flex>
      <Flex mb="2px" justifyContent="space-between" alignItems="center">
        {tooltipVisible && tooltip}
        <TooltipText color="doodaDark" ref={targetRef} small>
          {t('내 예치 자산')}
        </TooltipText>
        <Flex alignItems="center">
          <Text ml="4px" color="green">
            $0
          </Text>
        </Flex>
      </Flex>
      <Flex mb="2px" justifyContent="space-between" alignItems="center">
        {tooltipVisible && tooltip}
        <TooltipText color="doodaDark" ref={targetRef} small>
          {t('내 보상 자산')}
        </TooltipText>
        <Flex alignItems="center">
          <Text ml="4px" color="green">
            $0.00
          </Text>
        </Flex>
      </Flex>
      {/* {isAutoVault && (
        <Flex mb="2px" justifyContent="space-between" alignItems="center">
          {tooltipVisible && tooltip}
          <TooltipText ref={targetRef} small>
            {t('Performance Fee 예치 자산')}
          </TooltipText>
          <Flex alignItems="center">
            {performanceFee ? (
              <Text ml="4px" small>
                {performanceFee / 100}%
              </Text>
            ) : (
              <Skeleton width="90px" height="21px" />
            )}
          </Flex>
        </Flex>
      )} */}
      {/* <Flex mb="2px" justifyContent="center">
        <LinkExternal href={`/info/token/${earningToken.address}`} bold={false} small>
          {t('See Token Info')}
        </LinkExternal>
      </Flex> */}
      <Flex mt="2rem" mb="2px" justifyContent="center">
        <LinkExternal color="doodaPrimary" href={earningToken.projectLink} bold={false} small>
          {t('View Project Site')}
        </LinkExternal>
      </Flex>
      {poolContractAddress && (
        <Flex mb="2px" justifyContent="center">
          <LinkExternal
            color="doodaPrimary"
            href={`${BASE_BSC_SCAN_URL}/address/${isAutoVault ? cakeVaultContractAddress : poolContractAddress}`}
            bold={false}
            small
          >
            {t('View Contract')}
          </LinkExternal>
        </Flex>
      )}
      {/* {account && isMetaMaskInScope && tokenAddress && (
        <Flex justifyContent="flex-end">
          <Button
            variant="text"
            p="0"
            height="auto"
            onClick={() => registerToken(tokenAddress, earningToken.symbol, earningToken.decimals)}
          >
            <Text color="primary" fontSize="14px">
              {t('Add to Metamask')}
            </Text>
            <MetamaskIcon ml="4px" />
          </Button>
        </Flex>
      )} */}
    </ExpandedWrapper>
  )
}

const LinkIcon = () => {
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
export default React.memo(ExpandedFooter)
