import React, { useEffect, useRef } from 'react'
import CountUp from 'react-countup'
import { Text, TextProps } from '@doodaswap/uikit'

interface BalanceProps extends TextProps {
  value: number
  decimals?: number
  unit?: string
  isDisabled?: boolean
  prefix?: string
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  type?: string
}

const Balance: React.FC<BalanceProps> = ({
  value,
  color = 'text',
  decimals = 3,
  isDisabled = false,
  unit,
  prefix,
  onClick,
  type,
  ...props
}) => {
  const previousValue = useRef(0)

  useEffect(() => {
    previousValue.current = value
  }, [value])
  return (
    <Text color={isDisabled ? 'textDisabled' : color} onClick={onClick} {...props}>
      {type === 'stakeBalance' ? (
        <CountUp
          start={previousValue.current}
          end={value}
          prefix={unit}
          suffix={prefix}
          decimals={decimals}
          duration={1}
          separator=","
        />
      ) : (
        <CountUp
          start={previousValue.current}
          end={value}
          prefix={prefix}
          suffix={unit}
          decimals={decimals}
          duration={1}
          separator=","
        />
      )}
    </Text>
  )
}

export default Balance
