import React from 'react'
import styled from 'styled-components'
import { Text, Button, Link } from '@doodaswap/uikit'

export const ActionContainer = styled.div<{ isAutoVault?: boolean }>`
  padding: 16px;
  // border: 2px solid ${({ theme }) => theme.colors.input};
  // border-radius: 16px;
  flex-grow: 1;
  flex-basis: 0;
  margin-bottom: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 0;
    height: ${({ isAutoVault }) => (isAutoVault ? 'auto' : 'auto')};
  }
}

  ${({ theme }) => theme.mediaQueries.xl} {
    margin-left: 32px;
    margin-right: 0;
  }
`

export const ActionTitles = styled.div`
  font-weight: 600;
  font-size: 12px;
`

export const ActionContent = styled.div`
  display: flex;
  padding-left: 2rem;
  padding-right: 2rem;
  justify-content: space-between;
  align-items: center;
`

export const StyledTextDOODA = styled(Text)`
  cursor: pointer;
`

export const StyledLinkExternal = styled(Link)`
  color: ${({ theme }) => theme.colors.doodaPrimary};
  text-decoration: underline;
`

export const StyledStakeButton = styled(Button)`
  font-size: 12px;
  border-radius: 4px !important;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.doodaPrimary} !important;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.83;
  letter-spacing: -0.8px;
  text-align: center;
  color: #f1f3f5;
`
