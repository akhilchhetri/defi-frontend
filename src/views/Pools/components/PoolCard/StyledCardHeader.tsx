import React, { useState } from 'react'
import { CardHeader, Heading, Text, Flex } from '@doodaswap/uikit'
import { Token } from '@doodaswap/sdk'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { TokenPairImage } from 'components/TokenImage'
import ConnectWalletButton from 'components/ConnectWalletButton'
import ExpandableSectionButton from 'components/ExpandableSectionButton'
import CakeVaultTokenPairImage from '../CakeVaultCard/CakeVaultTokenPairImage'
import VaultCardActions from '../CakeVaultCard/VaultCardActions'

const Wrapper = styled(CardHeader)<{ isFinished?: boolean; background?: string }>`
  // background: ${({ isFinished, background, theme }) =>
    isFinished ? theme.colors.backgroundDisabled : theme.colors.gradients[background]};
  // border-radius: ${({ theme }) => `${theme.radii.card} ${theme.radii.card} 0 0`};
  border-radius: 0px;
  background: transparent;
  // background: red;
`
// account = { account }
// pool = { pool }
// accountHasSharesStaked = { accountHasSharesStaked }
// isLoading = { isLoading }
// performanceFee = { performanceFeeAsDecimal }

const StyledCardHeader: React.FC<{
  earningToken: Token
  stakingToken: Token
  isAutoVault?: boolean
  isFinished?: boolean
  isStaking?: boolean
  account?: any
  pool?: any
  accountHasSharesStaked?: any
  isLoading?: boolean
  performanceFee?: any
  stakedBalance?: any
  setShowExpandableSection?: any
  showExpandableSection?: boolean
}> = ({
  earningToken,
  stakingToken,
  isFinished = false,
  isAutoVault = false,
  isStaking = false,
  account,
  pool,
  accountHasSharesStaked,
  isLoading,
  performanceFee,
  stakedBalance,
  setShowExpandableSection,
  showExpandableSection,
}) => {
  const { t } = useTranslation()
  const isCakePool = earningToken.symbol === 'CAKE' && stakingToken.symbol === 'CAKE'
  const background = isStaking ? 'bubblegum' : 'cardHeader'
  const [isExpanded, setIsExpanded] = useState(false)

  const getHeadingPrefix = () => {
    if (isAutoVault) {
      // vault
      return t('Auto')
    }
    if (isCakePool) {
      // manual cake
      return t('Manual')
    }
    // all other pools
    return t('Earn')
  }

  const getSubHeading = () => {
    if (isAutoVault) {
      return t('Automatic restaking')
    }
    if (isCakePool) {
      return t('Earn CAKE, stake CAKE')
    }
    return t('Stake %symbol%', { symbol: stakingToken.symbol })
  }

  return (
    <Wrapper isFinished={isFinished} background={background}>
      <Flex alignItems="center" justifyContent="flex-start">
        {isAutoVault ? (
          <CakeVaultTokenPairImage width={64} height={64} />
        ) : (
          <TokenPairImage primaryToken={earningToken} secondaryToken={stakingToken} width={64} height={64} />
        )}
        <Flex ml="2" mt="4" flexDirection="row">
          <Heading color={isFinished ? 'textDisabled' : 'doodaDark'} scale="md">
            {/* {`${getHeadingPrefix()} ${earningToken.symbol}`} */}
            {t('DOODA')}
          </Heading>
          {/* <Text color={isFinished ? 'textDisabled' : 'textSubtle'}>{getSubHeading()}</Text> */}
        </Flex>
        {/* <Flex mt="4" ml="2">
          <ConnectWalletButton />
        </Flex> */}
        <Flex mt="4" ml="5" flexDirection="row">
          {account ? (
            <VaultCardActions
              pool={pool}
              accountHasSharesStaked={accountHasSharesStaked}
              isLoading={isLoading}
              performanceFee={performanceFee}
            />
          ) : (
            <>
              {/* <Text mb="10px" textTransform="uppercase" fontSize="12px" color="textSubtle" bold>
                {t('Start earning')}
              </Text> */}
              <ConnectWalletButton />
            </>
          )}
          <ExpandableSectionButton
            onClick={() => setShowExpandableSection(!showExpandableSection)}
            expanded={showExpandableSection}
          />
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default StyledCardHeader
