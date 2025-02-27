import { Token, Pair, ChainId } from '@doodaswap/sdk'
import tokens from './tokens'
import { FarmAuctionBidderConfig } from './types'

const getLpAddress = (tokenAddress: string, quoteToken: Token) => {
  const token = new Token(ChainId.MAINNET, tokenAddress, 18)
  return Pair.getAddress(token, quoteToken)
}

export const whitelistedBidders: FarmAuctionBidderConfig[] = [
  {
    account: '0x9Ed5a62535A5Dd2dB2d9bB21bAc42035Af47F630',
    farmName: 'NAV-BNB',
    tokenAddress: '0xBFEf6cCFC830D3BaCA4F6766a0d4AaA242Ca9F3D',
    quoteToken: tokens.wbnb,
    tokenName: 'Navcoin',
    projectSite: 'https://navcoin.org/en',
  },
  {
    account: '0x33723811B0FCa2a751f3912B80603Fe11499D894',
    farmName: 'WSG-BNB',
    tokenAddress: '0xA58950F05FeA2277d2608748412bf9F802eA4901',
    quoteToken: tokens.wbnb,
    tokenName: 'Wall Street Games',
    projectSite: 'https://wsg.gg/',
  },
  {
    account: '0xD1C35C3F5D9d373A3F7c0668Fbe75801886e060f',
    farmName: 'SWIRGE-BNB',
    tokenAddress: '0xe792f64C582698b8572AAF765bDC426AC3aEfb6B',
    quoteToken: tokens.wbnb,
    tokenName: 'Swirge Network',
    projectSite: 'https://swirge.com/',
  },
  {
    account: '0x58092273a044D6e1d23B5095AE873F6E24E906ed',
    farmName: 'rUSD-BUSD',
    tokenAddress: '0x07663837218A003e66310a01596af4bf4e44623D',
    quoteToken: tokens.busd,
    tokenName: 'RAMP DEFI',
    projectSite: 'https://www.rampdefi.com/',
  },
  {
    account: '0xfAd3B5FeAC1aAF86B3f66D105F2fa9607164D86b',
    farmName: 'FEED-BNB',
    tokenAddress: '0x67d66e8Ec1Fd25d98B3Ccd3B19B7dc4b4b7fC493',
    quoteToken: tokens.wbnb,
    tokenName: 'Feeder Finance',
    projectSite: 'https://www.feeder.finance/',
  },
  {
    account: '0x6a2d41c87c3F28C2C0b466424DE8e08FC2E23eDc',
    farmName: 'BBT-BNB',
    tokenAddress: '0xD48474E7444727bF500a32D5AbE01943f3A59A64',
    quoteToken: tokens.wbnb,
    tokenName: 'BitBook',
    projectSite: 'https://www.bitbook.network/',
  },
  {
    account: '0xAe126B90d2835c5A2D720b0687EC59f59b768183',
    farmName: 'WOW-BUSD',
    tokenAddress: '0x4DA996C5Fe84755C80e108cf96Fe705174c5e36A',
    quoteToken: tokens.busd,
    tokenName: 'WOWswap',
    projectSite: 'https://wowswap.io/',
  },
  {
    account: '0x88F0A6cb89909838d69E4E6e76eC21e2a7bdcA66',
    farmName: 'BREW-BNB',
    tokenAddress: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    quoteToken: tokens.wbnb,
    tokenName: 'CafeSwap Finance',
    projectSite: 'https://app.cafeswap.finance/',
  },
  {
    account: '0x0Cf86283ad1a1B7D04669696eD13BAE3d5925a0a',
    farmName: 'SAKE-BNB',
    tokenAddress: '0x8BD778B12b15416359A227F0533Ce2D91844e1eD',
    quoteToken: tokens.wbnb,
    tokenName: 'SakeSwap',
    projectSite: 'https://bsc.sakeswap.finance/',
  },
  {
    account: '0xCe059E8af96a654d4afe630Fa325FBF70043Ab11',
    farmName: 'XBLZD-BNB',
    tokenAddress: '0x9a946c3Cb16c08334b69aE249690C236Ebd5583E',
    quoteToken: tokens.wbnb,
    tokenName: 'Blizzard',
    projectSite: 'https://www.blizzard.money/',
  },
  {
    account: '0x7A4BAE68836f486e2c99dca0fBda1845d4532194',
    farmName: 'HERO-BNB',
    tokenAddress: '0xD40bEDb44C081D2935eebA6eF5a3c8A31A1bBE13',
    quoteToken: tokens.wbnb,
    tokenName: 'Metahero',
    projectSite: 'https://metahero.io/',
  },
  {
    account: '0x46D8e47b9A6487FDAB0a700b269A452cFeED49Aa',
    farmName: 'MCRN-BNB',
    tokenAddress: '0xacb2d47827C9813AE26De80965845D80935afd0B',
    quoteToken: tokens.wbnb,
    tokenName: 'MacaronSwap',
    projectSite: 'https://www.macaronswap.finance/',
  },
  {
    account: '0x1bA962acab22Be9e49C4cEBE7710c9201A72dFcc',
    farmName: 'BABYCAKE-BNB',
    tokenAddress: '0xdB8D30b74bf098aF214e862C90E647bbB1fcC58c',
    quoteToken: tokens.wbnb,
    tokenName: 'Babycake',
    projectSite: 'https://babycake.app/',
  },
  {
    account: '0xCCcC0b22799E82A79007814Dbc6A194410DCcEA5',
    farmName: 'BMON-BNB',
    tokenAddress: '0x08ba0619b1e7A582E0BCe5BBE9843322C954C340',
    quoteToken: tokens.wbnb,
    tokenName: 'Binamon',
    projectSite: 'https://binamon.org/',
  },
  {
    account: '0x71eE6DE14c90700eE06C81aaBdBacD684cfe30fe',
    farmName: 'BMON-BUSD',
    tokenAddress: '0x08ba0619b1e7A582E0BCe5BBE9843322C954C340',
    quoteToken: tokens.busd,
    tokenName: 'Binamon',
    projectSite: 'https://binamon.org/',
  },
  {
    account: '0x6cfA3ff4e96abe93a290dc3d7A911A483C194758',
    farmName: 'ANY-BNB',
    tokenAddress: '0xF68C9Df95a18B2A5a5fa1124d79EEEffBaD0B6Fa',
    quoteToken: tokens.wbnb,
    tokenName: 'Anyswap',
    projectSite: 'https://anyswap.exchange/',
  },
  {
    account: '0xe596470D291Cb2D32ec111afC314B07006690c72',
    farmName: 'PHX-BNB',
    tokenAddress: '0xac86e5f9bA48d680516df50C72928c2ec50F3025',
    quoteToken: tokens.wbnb,
    tokenName: 'Phoenix Finance',
    projectSite: 'https://www.phoenixprotocol.net/',
  },
  {
    account: '0x8f8c77987C0ea9dd2400383b623d9cbcBbAf98CF',
    farmName: 'GMR-BNB',
    tokenAddress: '0x0523215DCafbF4E4aA92117d13C6985a3BeF27D7',
    quoteToken: tokens.wbnb,
    tokenName: 'GMR Finance',
    projectSite: 'https://www.gmr.finance/',
  },
  {
    account: '0x786B313b01A25eddbF7f7461b48D60AF680d758C',
    farmName: 'BP-BNB',
    tokenAddress: '0xACB8f52DC63BB752a51186D1c55868ADbFfEe9C1',
    quoteToken: tokens.wbnb,
    tokenName: 'BunnyPark',
    projectSite: 'https://www.bunnypark.com/',
  },
  {
    account: '0x70d7eCEE276Ad5fDFc91B3C30d2c1cDb9dD442Fb',
    farmName: 'DPET-BNB',
    tokenAddress: '0xfb62AE373acA027177D1c18Ee0862817f9080d08',
    quoteToken: tokens.wbnb,
    tokenName: 'MyDefiPet',
    projectSite: 'https://mydefipet.com/',
  },
  {
    account: '0x8aC06b55C9812e3E574CF5A5F3b49619dF33099C',
    farmName: 'NMX-BUSD',
    tokenAddress: '0xd32d01A43c869EdcD1117C640fBDcfCFD97d9d65',
    quoteToken: tokens.busd,
    tokenName: 'Nominex',
    projectSite: 'https://nominex.io/',
  },
  {
    account: '0xd27E57Ff5dD3d78B03c85e2A2bB8dc37E67c5140',
    farmName: 'POOLZ-BNB',
    tokenAddress: '0x77018282fD033DAF370337A5367E62d8811Bc885',
    quoteToken: tokens.wbnb,
    tokenName: 'Poolz Finance',
    projectSite: 'https://poolz.finance/',
  },
  {
    account: '0x0767a2f9c644b364Bc88Eea5a535afE506Ba6802',
    farmName: 'ODDZ-BNB',
    tokenAddress: '0xCD40F2670CF58720b694968698A5514e924F742d',
    quoteToken: tokens.wbnb,
    tokenName: 'Oddz Finance',
    projectSite: 'https://oddz.fi',
  },
  {
    account: '0x2B6b2701d7F7b65BA2E1ec2d2dAa17d46B85A4fe',
    farmName: 'UBXT-BUSD',
    tokenAddress: '0xBbEB90cFb6FAFa1F69AA130B7341089AbeEF5811',
    quoteToken: tokens.busd,
    tokenName: 'UpBots',
    projectSite: 'https://upbots.com/',
  },
  {
    account: '0x875831249bA511a6f1E49c84D66E1A6F5601f7C6',
    farmName: 'DND-BUSD',
    tokenAddress: '0x14c358b573a4cE45364a3DBD84BBb4Dae87af034',
    quoteToken: tokens.busd,
    tokenName: 'DungeonSwap',
    projectSite: 'https://dungeonswap.app/',
  },
  {
    account: '0xb7d303BbaE2573513801C5F94aE0B61Fa5b3426F',
    farmName: 'ZOON-BNB',
    tokenAddress: '0x9D173E6c594f479B4d47001F8E6A95A7aDDa42bC',
    quoteToken: tokens.wbnb,
    tokenName: 'CryptoZoon',
    projectSite: 'https://cryptozoon.io/',
  },
  {
    account: '0x22d56946c6cc1d4ed09f02858ddb990fcc981c55',
    farmName: 'HGET-BUSD',
    tokenAddress: '0xC7d8D35EBA58a0935ff2D5a33Df105DD9f071731',
    quoteToken: tokens.busd,
    tokenName: 'Hedget',
    projectSite: 'https://www.hedget.com/',
  },
  {
    account: '0x027D50F36fe3b64630170B3ba82FC64BfC9bc088',
    farmName: 'FAN-BNB',
    tokenAddress: '0xFAc3A1ED2480Da8F5c34576C0Da13F245239717d',
    quoteToken: tokens.wbnb,
    tokenName: 'Fanadise',
    projectSite: 'https://fanadise.com/',
  },
  {
    account: '0x73f9eb8eB7109b171396C8cbffcb29839c8b3064',
    farmName: 'PKMON-BUSD',
    tokenAddress: '0x609D183Fb91a0fce59550b62ab7d2c931b0Bb1BE',
    quoteToken: tokens.busd,
    tokenName: 'PolkaMonster',
    projectSite: 'https://polkamonster.game/',
  },
  {
    account: '0x88Dba2cF8911A80cc50A1B392b5fF6b47B930330',
    farmName: 'SFUND-BNB',
    tokenAddress: '0x477bC8d23c634C154061869478bce96BE6045D12',
    quoteToken: tokens.wbnb,
    tokenName: 'Seedify',
    projectSite: 'https://launchpad.seedify.fund/',
  },
  {
    account: '0xf1dD352EF3a94F60b3047B607C2Bd976401F538c',
    farmName: 'GNT-BNB',
    tokenAddress: '0xF750A26EB0aCf95556e8529E72eD530f3b60f348',
    quoteToken: tokens.wbnb,
    tokenName: 'GreenTrust',
    projectSite: 'https://www.greentrusttoken.com/',
  },
  {
    account: '0x3992D7D9Ed721257d8bD7501d280b857eD7F9C24',
    farmName: 'TT-BUSD',
    tokenAddress: '0x990E7154bB999FAa9b2fa5Ed29E822703311eA85',
    quoteToken: tokens.busd,
    tokenName: 'ThunderCore',
    projectSite: 'https://www.thundercore.com/',
  },
  {
    account: '0x2Ef317299888DD4a4F57FFf99FF2685D544fEAf1',
    farmName: 'TT-BNB',
    tokenAddress: '0x990E7154bB999FAa9b2fa5Ed29E822703311eA85',
    quoteToken: tokens.wbnb,
    tokenName: 'ThunderCore',
    projectSite: 'https://www.thundercore.com/',
  },
  {
    account: '0xB9a32da7F33731FfDa8e7ecCB91325eee8A524AC',
    farmName: 'SMG-BNB',
    tokenAddress: '0x6bfd576220e8444CA4Cc5f89Efbd7f02a4C94C16',
    quoteToken: tokens.wbnb,
    tokenName: 'Smaugs NFT',
    projectSite: 'https://smaugs.com',
  },
  {
    account: '0x5ed6B80F0e8b1c7fdB783202d4a926BbED2d49ee',
    farmName: 'TENFI-BNB',
    tokenAddress: '0xd15C444F1199Ae72795eba15E8C1db44E47abF62',
    quoteToken: tokens.wbnb,
    tokenName: 'TEN Finance',
    projectSite: 'https://ten.finance/',
  },
  {
    account: '0x75015B56dA228A5367d313866f6520495344C65c',
    farmName: 'BNX-BUSD',
    tokenAddress: '0x8C851d1a123Ff703BD1f9dabe631b69902Df5f97',
    quoteToken: tokens.busd,
    tokenName: 'BinaryX',
    projectSite: 'https://www.binaryx.pro/#/',
  },
  {
    account: '0xCbD932aC66f645a3764733aACD30Ce50e522Fac1',
    farmName: 'DVI-BNB',
    tokenAddress: '0x758FB037A375F17c7e195CC634D77dA4F554255B',
    quoteToken: tokens.wbnb,
    tokenName: 'Dvision',
    projectSite: 'https://dvision.network/',
  },
  {
    account: '0xeA96c1970b9E3d4258620F68Af95ddDEB5fbD68F',
    farmName: 'SALE-BNB',
    tokenAddress: '0x97bb08ba41f033beaac315169fc566ac9e0daf52',
    quoteToken: tokens.wbnb,
    tokenName: 'DxSale Network',
    projectSite: 'https://dxsale.app',
  },
  {
    account: '0xaDB2d11817Cd16595E4454aD03F95575c3B388f2',
    farmName: 'MONI-BNB',
    tokenAddress: '0x9573c88ae3e37508f87649f87c4dd5373c9f31e0',
    quoteToken: tokens.wbnb,
    tokenName: 'Monsta Infinite',
    projectSite: 'https://monstainfinite.com/',
  },
  {
    account: '0xDa6e741A7f7d4d88d4210340069348704FDf21bf',
    farmName: 'PROS-BNB',
    tokenAddress: '0xed8c8aa8299c10f067496bb66f8cc7fb338a3405',
    quoteToken: tokens.wbnb,
    tokenName: 'Prosper',
    projectSite: 'https://prosper.so/',
  },
].map((bidderConfig) => ({
  ...bidderConfig,
  lpAddress: getLpAddress(bidderConfig.tokenAddress, bidderConfig.quoteToken),
}))

const UNKNOWN_BIDDER: FarmAuctionBidderConfig = {
  account: '',
  tokenAddress: '',
  quoteToken: tokens.wbnb,
  farmName: 'Unknown',
  tokenName: 'Unknown',
}

export const getBidderInfo = (account: string): FarmAuctionBidderConfig => {
  const matchingBidder = whitelistedBidders.find((bidder) => bidder.account.toLowerCase() === account.toLowerCase())
  if (matchingBidder) {
    return matchingBidder
  }
  return { ...UNKNOWN_BIDDER, account }
}
