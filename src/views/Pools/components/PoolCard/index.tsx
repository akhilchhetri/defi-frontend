import BigNumber from 'bignumber.js'
import React, { useState } from 'react'
import { CardBody, Flex, Text, CardRibbon } from '@doodaswap/uikit'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useTranslation } from 'contexts/Localization'
import { BIG_ZERO } from 'utils/bigNumber'
import styled from 'styled-components'
import { DeserializedPool } from 'state/types'
import AprRow from './AprRow'
import { StyledCard } from './StyledCard'
import CardFooter from './CardFooter'
import StyledCardHeader from './StyledCardHeader'
import CardActions from './CardActions'

const StyledCardBody = styled(CardBody)`
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

const PoolCard: React.FC<{ pool: DeserializedPool; account: string }> = ({ pool, account }) => {
  const { sousId, stakingToken, earningToken, isFinished, userData } = pool
  const { t } = useTranslation()
  const stakedBalance = userData?.stakedBalance ? new BigNumber(userData.stakedBalance) : BIG_ZERO
  const accountHasStakedBalance = stakedBalance.gt(0)
  const [showExpandableSection, setShowExpandableSection] = useState(false)

  return (
    <StyledCard
      isFinished={isFinished && sousId !== 0}
      ribbon={isFinished && <CardRibbon variantColor="textDisabled" text={t('Finished')} />}
    >
      <StyledCardHeader
        isStaking={accountHasStakedBalance}
        earningToken={earningToken}
        stakingToken={stakingToken}
        isFinished={isFinished && sousId !== 0}
        account={account}
        pool={pool}
        stakedBalance={stakedBalance}
        setShowExpandableSection={setShowExpandableSection}
        showExpandableSection={showExpandableSection}
      />
      <StyledCardBody>
        {/* <AprRow pool={pool} stakedBalance={stakedBalance} /> */}
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
        {/* <Flex mt="24px" flexDirection="column">
          {account ? (
            <CardActions pool={pool} stakedBalance={stakedBalance} />
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
    </StyledCard>
  )
}

export default PoolCard
