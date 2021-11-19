import React from 'react'
import styled from 'styled-components'
import { Text, useMatchBreakpoints } from '@doodaswap/uikit'
import { DeserializedPool } from 'state/types'
import { useCakeVault } from 'state/pools/hooks'
import { useTranslation } from 'contexts/Localization'
import BaseCell, { CellContent } from './BaseCell'
import Apr from '../Apr'
import { convertSharesToCake } from '../../../helpers'

interface AprCellProps {
  pool: DeserializedPool
}

const StyledCell = styled(BaseCell)`
  flex: 1 0 50px;
  ${({ theme }) => theme.mediaQueries.md} {
    flex: 0 0 120px;
  }
`
const StyledCellContent = styled(CellContent)`
  flex-direction: row !important;
`

const AutoAprCell: React.FC<AprCellProps> = ({ pool }) => {
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()

  const {
    userData: { userShares },
    fees: { performanceFee },
    pricePerFullShare,
  } = useCakeVault()

  const { cakeAsBigNumber } = convertSharesToCake(userShares, pricePerFullShare)
  const performanceFeeAsDecimal = performanceFee && performanceFee / 100

  return (
    <StyledCell role="cell">
      <StyledCellContent>
        {/* <Text fontSize="12px" color="textSubtle" textAlign="left">
          {t('APY')}
        </Text> */}
        <Apr
          pool={pool}
          stakedBalance={cakeAsBigNumber}
          performanceFee={performanceFeeAsDecimal}
          showIcon={!isMobile}
        />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 3c-4.975 0-9 4.026-9 9 0 4.975 4.026 9 9 9 4.975 0 9-4.026 9-9 0-4.975-4.026-9-9-9zm0 16.594A7.59 7.59 0 0 1 4.406 12 7.59 7.59 0 0 1 12 4.406 7.59 7.59 0 0 1 19.594 12 7.59 7.59 0 0 1 12 19.594z"
            fill="#3763A4"
          />
          <path
            d="M12 10.535a.703.703 0 0 0-.703.703v4.528a.703.703 0 1 0 1.406 0v-4.528a.703.703 0 0 0-.703-.703zM12 9.674a.95.95 0 1 0 0-1.899.95.95 0 0 0 0 1.899z"
            fill="#3763A4"
          />
        </svg>
      </StyledCellContent>
    </StyledCell>
  )
}

export default AutoAprCell
