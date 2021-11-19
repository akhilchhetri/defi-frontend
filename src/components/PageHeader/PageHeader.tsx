import React from 'react'
import styled from 'styled-components'
import { Box } from '@doodaswap/uikit'
import Container from '../Layout/Container'

const Outer = styled(Box)<{ background?: string }>`
  // background: ${({ theme, background }) => background || theme.colors.gradients.bubblegum};
  background: #fff;
  padding: 2rem 0rem 0rem;
`

const Inner = styled(Container)`
  padding-top: 32px;
  // padding-bottom: 32px;
`

const PageHeader: React.FC<{ background?: string }> = ({ background, children, ...props }) => (
  <Outer background={background} {...props}>
    <Inner>{children}</Inner>
  </Outer>
)

export default PageHeader
