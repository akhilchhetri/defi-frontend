import React from 'react' //-
import { Text } from '@doodaswap/uikit' //-
import { useWeb3React } from '@web3-react/core' //-
import BigNumber from 'bignumber.js' //-
import { useTranslation } from 'contexts/Localization' //-
import { FarmWithBalance } from 'views/Home/hooks/oldUseFarmsWithBalance'
// import { usePriceCakeBusd } from 'state/hooks'
import styled from 'styled-components' //-
import { DEFAULT_TOKEN_DECIMAL } from 'config'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

const Block = styled.div`
  margin-bottom: 24px;
`

interface CakeHarvestBalanceProps {
  farmsWithBalance: FarmWithBalance[]
}

const CakeHarvestBalance: React.FC<CakeHarvestBalanceProps> = ({ farmsWithBalance }) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const earningsSum = farmsWithBalance.reduce((accum, earning) => {
    const earningNumber = new BigNumber(earning.balance)
    if (earningNumber.eq(0)) {
      return accum
    }
    return accum + earningNumber.div(DEFAULT_TOKEN_DECIMAL).toNumber()
  }, 0)
  //   const cakePriceBusd = usePriceCakeBusd()
  const cakePriceBusd = 20.0
  const earningsBusd = new BigNumber(earningsSum).multipliedBy(cakePriceBusd).toNumber()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '76px' }}>
        {t('Locked')}
      </Text>
    )
  }

  return (
    <Block>
      <CardValue value={earningsSum} lineHeight="1.5" color="#F1F3F5" fontSize="35px" />
      {/* {cakePriceBusd.gt(0) && <CardBusdValue value={earningsBusd} />} */}
      {cakePriceBusd && <CardBusdValue value={earningsBusd} />}
    </Block>
  )
}

export default CakeHarvestBalance
