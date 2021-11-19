import React, { useState } from 'react'
import styled from 'styled-components'
import { Box, CardBody, Flex, Text, Skeleton } from '@doodaswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useWeb3React } from '@web3-react/core'
import ConnectWalletButton from 'components/ConnectWalletButton'
import tokens from 'config/constants/tokens'
import { useCakeVault } from 'state/pools/hooks'
import { DeserializedPool } from 'state/types'
import { convertSharesToCake } from 'views/Pools/helpers'
import AprRow from '../PoolCard/AprRow'
import { StyledCard } from '../PoolCard/StyledCard'
import CardFooter from '../PoolCard/CardFooter'
import StyledCardHeader from '../PoolCard/StyledCardHeader'
import VaultCardActions from './VaultCardActions'
import UnstakingFeeCountdownRow from './UnstakingFeeCountdownRow'
import RecentCakeProfitRow from './RecentCakeProfitRow'

const StyledCardBody = styled(CardBody)<{ isLoading: boolean }>`
  min-height: ${({ isLoading }) => (isLoading ? '0' : 'auto')};
  border: none !important;
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: wrap !important;
  margin-left: 5rem;
`
const InfoContainer = styled.div`
  margin: 2px;
`
const StakeContainer = styled.div`
  color: ${({ theme }) => theme.colors.text};
  align-items: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 3.2rem;
  padding: 5px 3px 3px 1.3rem;
  margin-top: 1rem;

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
  }
`
const CardSubValue = styled(Text)`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.doodaPrimary};
`
const CardSubLabel = styled(Text)`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: -0.8px;
  color: #4d5560;
`
interface CakeVaultProps {
  pool: DeserializedPool
  showStakedOnly: boolean
}

const CakeVaultCard: React.FC<CakeVaultProps> = ({ pool, showStakedOnly }) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const {
    userData: { userShares, isLoading: isVaultUserDataLoading },
    fees: { performanceFee },
    pricePerFullShare,
  } = useCakeVault()

  const [showExpandableSection, setShowExpandableSection] = useState(false)

  const { cakeAsBigNumber } = convertSharesToCake(userShares, pricePerFullShare)

  const accountHasSharesStaked = userShares && userShares.gt(0)
  const isLoading = !pool.userData || isVaultUserDataLoading
  const performanceFeeAsDecimal = performanceFee && performanceFee / 100

  if (showStakedOnly && !accountHasSharesStaked) {
    return null
  }

  return (
    <StyledCard>
      <div style={{ borderRight: '1px solid #dee2e6' }}>
        <StyledCardHeader
          isStaking={accountHasSharesStaked}
          isAutoVault
          earningToken={tokens.cake}
          stakingToken={tokens.cake}
          account={account}
          pool={pool}
          accountHasSharesStaked={accountHasSharesStaked}
          isLoading={isLoading}
          performanceFee={performanceFeeAsDecimal}
          setShowExpandableSection={setShowExpandableSection}
          showExpandableSection={showExpandableSection}
        />
        <StyledCardBody isLoading={isLoading}>
          <InfoContainer style={{ visibility: 'visible', width: '48%' }}>
            <StakeContainer>
              {/* <Link href={`/add/${liquidityUrlPathParts}`}>{t('Get %symbol%', { symbol: lpLabel })}</Link> */}
              <CardSubLabel>{t('DOODA 보상')}</CardSubLabel>
              <CardSubValue>?</CardSubValue>
            </StakeContainer>
          </InfoContainer>
          <InfoContainer style={{ visibility: 'visible', width: '48%' }}>
            <StakeContainer>
              <CardSubLabel>{t('APY')}</CardSubLabel>
              <CardSubValue>
                {/* {farm.apr ? (
                  <ApyButton
                    variant="text-and-button"
                    pid={farm.pid}
                    lpSymbol={farm.lpSymbol}
                    multiplier={farm.multiplier}
                    lpLabel={lpLabel}
                    addLiquidityUrl={addLiquidityUrl}
                    cakePrice={cakePrice}
                    apr={farm.apr}
                    displayApr={displayApr}
                  />
                ) : (
                  <Skeleton height={24} width={80} />
                )} */}
                166.46%
              </CardSubValue>
            </StakeContainer>
          </InfoContainer>
          <InfoContainer style={{ visibility: 'visible', width: '48%' }}>
            <StakeContainer>
              <CardSubLabel>{t('Assets Deposit')}</CardSubLabel>
              <CardSubValue>
                {/* {farm.userData ? (
                  <div>{getBalanceNumber(new BigNumber(farm.userData.earnings))}</div>
                ) : (
                  <Skeleton height={24} width={80} />
                )} */}
                0
              </CardSubValue>
            </StakeContainer>
          </InfoContainer>
          {/* <AprRow pool={pool} stakedBalance={cakeAsBigNumber} performanceFee={performanceFeeAsDecimal} /> */}
          {/* <Box mt="24px">
            <RecentCakeProfitRow />
          </Box>
          <Box mt="8px">
            <UnstakingFeeCountdownRow />
          </Box> */}
          {/* <Flex mt="32px" flexDirection="column">
            {account ? (
              <VaultCardActions
                pool={pool}
                accountHasSharesStaked={accountHasSharesStaked}
                isLoading={isLoading}
                performanceFee={performanceFeeAsDecimal}
              />
            ) : (
              <>
                <Text mb="10px" textTransform="uppercase" fontSize="12px" color="textSubtle" bold>
                  {t('Start earning')}
                </Text>
                <ConnectWalletButton />
              </>
            )}
          </Flex> */}
        </StyledCardBody>
        <CardFooter pool={pool} account={account} isExpanded={showExpandableSection} />
      </div>
    </StyledCard>
  )
}

export default CakeVaultCard
