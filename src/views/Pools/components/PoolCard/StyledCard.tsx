import styled from 'styled-components'
import { Card } from '@doodaswap/uikit'

export const StyledCard = styled(Card)<{ isFinished?: boolean }>`
  // max-width: 360px;
  margin: 0px !important;
  background: transparent;
  // margin: 0 8px 4px;
  border: none !important;
  // border-right: 1px solid grey !important;
  border-bottom: 1px solid #dee2e6 !important;
  box-shadow: none !important;

  display: flex;
  flex-direction: column;
  align-self: baseline;
  position: relative;
  color: ${({ isFinished, theme }) => theme.colors[isFinished ? 'textDisabled' : 'secondary']};
  ${({ theme }) => theme.mediaQueries.sm} {
    margin: 0 12px 46px;
  }
`

export default StyledCard
