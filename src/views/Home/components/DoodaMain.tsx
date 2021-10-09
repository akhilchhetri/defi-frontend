import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex, Heading, Button, LogoWithTextIcon } from '@doodaswap/uikit'
import { DoodaTextOnlyLogo } from 'components/Logo'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import useTheme from 'hooks/useTheme'
import { RightArrow, CarosalMain, CarosalSub } from 'components/DoodaIcon'
import CardBackground from 'components/Dooda/assets/CardBackground.png'
import DoodaFarmedStakingCard from './DoodaFarmStakingCard'
import { SlideSvgDark, SlideSvgLight } from './SlideSvg'
import CompositeImage, { getSrcSet, CompositeImageProps } from './CompositeImage'
import {
  DoodaHeading,
  DoodaSubText,
  DoodaSubHeading,
  DswapButton,
  StyledSubHead,
  DswapTotal,
  DswapData,
  DoodaDataQty,
  DoodaDataTotal,
  DoodaDataCurrency,
  StyledDoodaHeadAlt,
  StyledDoodaHeadAlt2,
  DoodaDefaultBtn,
} from '../styles'

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }  
`

const fading = () => keyframes`
  from {
    opacity: 0.9;
  }
  50% {
    opacity: 0.1;
  }
  to {
    opacity: 0.9;
  }  
`

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
`

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -3px;
`

const BunnyWrapper = styled.div`
  width: 100%;
  animation: ${flyingAnim} 3.5s ease-in-out infinite;
`

const StarsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  & :nth-child(2) {
    animation: ${fading} 2s ease-in-out infinite;
    animation-delay: 1s;
  }

  & :nth-child(3) {
    animation: ${fading} 5s ease-in-out infinite;
    animation-delay: 0.66s;
  }

  & :nth-child(4) {
    animation: ${fading} 2.5s ease-in-out infinite;
    animation-delay: 0.33s;
  }
`
// added custom styled components for doodaswap
const DoodaHomepageLogo = styled(DoodaTextOnlyLogo)`
  content-align: center;
  margin: 0px auto;
  width: 30%;
  margin-bottom: 0.8rem;
  @media (max-width: 854px) {
    width: 50%;
  }
  @media (max-width: 500px) {
    width: 70%;
  }
`
const DmainLeft = styled.div`
  background-image: url(${CardBackground});
  background-size: cover;
  background-repeat: no-repeat;
  width: 25%;
  min-height: auto;
  max-height: 314px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.08);
  margin-right: 1.3rem;
  border-radius: 4px;
  @media (max-width: 854px) {
    width: 70%;
    max-height: 420px;
    margin-right: 0px;
    margin-left: 0px;
    margin-top: 1rem;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`
const DmainCenter = styled.div`
  background: #3763a4;
  width: 50%;
  min-height: 314px;
  max-height: auto;
  margin-left: 0.5rem;
  margin-right: 1.3rem;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  padding: 1.2rem;
  @media (max-width: 854px) {
    width: 70%;
    margin-left: 0px !important;
    margin-right: 0px;
    margin-top: 1rem;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`
const DmainRight = styled.div`
  background: #ffffff;
  padding: 0.4rem;
  width: 25%;
  min-height: 314px;
  max-height: auto;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  margin-left: 0.5rem;
  @media (max-width: 854px) {
    width: 70%;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 1rem;
    height: auto;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`
const DoodaSwapMain = styled.div`
  margin-top: 5rem;
  @media (max-width: 854px) {
    margin-top: 3rem;
  }
`

const DoodaSubTextLeft = styled(DoodaSubText)`
  padding: 2rem 1.7rem 1.3rem 2.5rem;
`

const StyledRightArrow = styled(RightArrow)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`
const CarosalContainer = styled.div`
  display: flex;
  margin-top: 2.2rem;
  align-items: center;
  padding-top: 1rem;
  justify-content: center;
`
const DoodaStatEachRow = styled.div`
  margin-top: 5px;
  padding: 0.5rem 0.4rem;
`
const DoodaStatStyledButton = styled(DswapButton)`
  background: #3763a4;
`
const DoodaStatLabel = styled.nav`
  float: left;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: -0.8px;
  color: #636c7d;
`
const DoodaStatValue = styled.nav`
  float: right;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 24px;
  text-align: right;
  letter-spacing: -0.02em;
  color: #3763a4;
`

// styled components for below main section
const DoodaSwapBelowMain = styled.div`
  margin: 3rem 0rem 1rem;
`
const DoodaLeftBelow = styled.div`
  min-height: 150px;
  width: 33%;
  background: #ffffff;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.09);
  border-radius: 4px;
  margin-right: 1rem;
  padding: 1rem;
  @media (max-width: 854px) {
    margin: 0px auto;
    width: 70%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`
const DoodaRightBelow = styled.div`
  min-height: 150px;
  width: 66%;
  background: #ffffff;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  @media (max-width: 854px) {
    margin: 1rem auto;
    width: 70%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`
const DoodaStyledRightBtn = styled(DoodaDefaultBtn)`
  margin-right: 0.2rem;
  background: #ffffff;
  border: 1px solid #99a2ab;
  box-sizing: border-box;
  border-radius: 2px;
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 12px !important;
  line-height: 22px;
`
const DoodaStyledLabel = styled(DoodaDataTotal)`
  color: #3763a4 !important;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 36px;
  letter-spacing: -0.02em;
  margin-right: 1rem;
  margin-top: 3.5rem;
`
const RightEachCard = styled.div`
  width: 50%;
  margin: 1rem;
  padding-right: 1rem;
  border-right: 2px solid rgba(0, 0, 0, 0.08);
  @media (max-width: 854px) {
    width: 91.3%;
    padding-right: 0px;
    border-right: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.08);
  }
`
const RightEachCard2 = styled.div`
  width: 50%;
  margin: 1rem;
  padding-right: 1rem;
  @media (max-width: 854px) {
    width: 91.3%;
    padding-right: 0px;
  }
`

const DollorIndicator = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #cad0d7;
`

const imagePath = '/images/home/lunar-bunny/'
const imageSrc = 'bunny'

const starsImage: CompositeImageProps = {
  path: '/images/home/lunar-bunny/',
  attributes: [
    { src: 'star-l', alt: '3D Star' },
    { src: 'star-r', alt: '3D Star' },
    { src: 'star-top-r', alt: '3D Star' },
  ],
}

const DoodaMain = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()
  return (
    <>
      <Flex
        position="relative"
        // flexDirection={['column', null, null, 'row']}
        alignItems={['center', null, null, 'center']}
        justifyContent="center"
        // mt={[account ? '280px' : '50px', null, 0]}
        id="homepage-hero"
      >
        <Flex flex="2" flexDirection="column">
          <DoodaHeading scale="xxl">
            <DoodaHomepageLogo isDark={theme.isDark} />
            <DoodaSubText>안녕하세요, DOODA 입니다.</DoodaSubText>
          </DoodaHeading>
          <DoodaSwapMain>
            <Flex
              flex="2"
              flexDirection={['column', null, null, 'row']}
              alignItems={['flex-start', 'center', 'center', 'center']}
            >
              <DmainLeft>
                <StyledDoodaHeadAlt>아프로디테 (AFD) NFT 옥션이 시작되었습니다!</StyledDoodaHeadAlt>
                <Flex
                  flex="2"
                  flexDirection={['column', null, null, 'row']}
                  alignItems={['center', null, null, 'center']}
                >
                  <DoodaSubTextLeft>총 46종의 NFT를 만나보세요. 48시간 후에 시작됩니다.</DoodaSubTextLeft>
                  <StyledRightArrow isDark={theme.isDark} />
                </Flex>
                <Flex
                  flex="1"
                  flexDirection={['column-reverse', null, null, 'row']}
                  alignItems={['center', null, null, 'center']}
                >
                  <DoodaDefaultBtn>바로가기</DoodaDefaultBtn>
                </Flex>
                <CarosalContainer>
                  <CarosalMain isDark={theme.isDark} />
                  <CarosalSub isDark={theme.isDark} />
                </CarosalContainer>
              </DmainLeft>
              <DmainCenter>{/* <DoodaFarmedStakingCard /> */}</DmainCenter>
              <DmainRight>
                <StyledDoodaHeadAlt2>DOODA Stats</StyledDoodaHeadAlt2>
                <Flex flex="2" flexDirection={['column', null, null, 'column']}>
                  {DoodaStatData.map((eachData, index) => (
                    <DoodaStatEachRow
                      style={{
                        backgroundColor: `${(index + 1) % 2 !== 0 ? '#F1F3F5' : '#DEE2E6'}`,
                      }}
                    >
                      <DoodaStatLabel>{eachData.label}</DoodaStatLabel>
                      <DoodaStatValue>{eachData.value} </DoodaStatValue>
                    </DoodaStatEachRow>
                  ))}
                  <DoodaStatStyledButton>
                    <DoodaHeading style={{ color: '#F1F3F5', fontSize: '14px', marginTop: '2px' }}>
                      더 알아보기
                    </DoodaHeading>
                  </DoodaStatStyledButton>
                </Flex>
              </DmainRight>
            </Flex>
          </DoodaSwapMain>
          <DoodaSwapBelowMain>
            <Flex
              flex="2"
              flexDirection={['column', null, null, 'row']}
              alignItems={['flex-start', null, null, 'center']}
            >
              <DoodaLeftBelow>
                <Flex
                  flex="2"
                  flexDirection={['column', null, null, 'row']}
                  alignItems={['flex-start', null, null, 'center']}
                >
                  <DoodaSubText style={{ textAlign: 'left', fontSize: '13px' }}>예상 연 수익률</DoodaSubText>
                  <DoodaStyledRightBtn>참여하기</DoodaStyledRightBtn>
                </Flex>
                <DoodaStyledLabel>
                  419.40<span>&nbsp;%</span>
                </DoodaStyledLabel>
              </DoodaLeftBelow>
              <DoodaRightBelow>
                <Flex
                  flex="2"
                  flexDirection={['column', null, null, 'row']}
                  alignItems={['flex-end', null, null, 'center']}
                >
                  <RightEachCard>
                    <Flex
                      flex="2"
                      flexDirection={['column', null, null, 'row']}
                      alignItems={['flex-start', null, null, 'center']}
                    >
                      <DoodaSubText style={{ textAlign: 'left', fontSize: '13px' }}>예치된 총 자산 (TVL)</DoodaSubText>
                      {/* <DoodaStyledRightBtn>참여하기</DoodaStyledRightBtn> */}
                    </Flex>
                    <DoodaStyledLabel>
                      <DollorIndicator>$&nbsp;</DollorIndicator>
                      531,067,356
                    </DoodaStyledLabel>
                  </RightEachCard>
                  <RightEachCard2>
                    <Flex
                      flex="2"
                      flexDirection={['row', null, null, 'row']}
                      alignItems={['flex-start', null, null, 'center']}
                    >
                      <DoodaSubText style={{ textAlign: 'left', fontSize: '13px' }}>내 참여 자산</DoodaSubText>
                      <DoodaStyledRightBtn>내 상태</DoodaStyledRightBtn>
                    </Flex>
                    <DoodaStyledLabel>
                      <DollorIndicator>$&nbsp;</DollorIndicator>
                      531,067,356
                    </DoodaStyledLabel>
                  </RightEachCard2>
                </Flex>
              </DoodaRightBelow>
            </Flex>
          </DoodaSwapBelowMain>
        </Flex>
      </Flex>
    </>
  )
}

const DoodaStatData = [
  {
    label: 'USD 환산 가치',
    value: '$ 173,677,628',
  },
  {
    label: 'DOODA 유통 수량',
    value: '50,416,577',
  },
  {
    label: '소각된 DOODA',
    value: '11,294,246',
  },
  {
    label: '유동성 공급 중인 자산',
    value: '$ 391,549,899',
  },
  {
    label: 'DISTRIBUTED DOODA/BLOCK',
    value: '10',
  },
]
export default DoodaMain
