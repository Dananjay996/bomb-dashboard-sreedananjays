import React, { useMemo } from 'react'
import styles from './dashboard.module.css';
// import { style } from '@material-ui/system';

import useCurrentEpoch from '../../hooks/useCurrentEpoch';
import useBombStats from '../../hooks/useBombStats';
import useBondStats from '../../hooks/useBondStats';
import usebShareStats from '../../hooks/usebShareStats';


const Dashboard = () => {

  const BombImageSource = 'https://s3-alpha-sig.figma.com/img/5926/6a82/57bf55ba3b3a7b02695860f5a186a8cf?Expires=1680480000&Signature=F1feRRGr3AZUkgY0mAOefHkhWqB2ZFxfZbbJs6EMJm4lq2vvkNQnJUin0MNFJ8wFSjM6hBFGdHZkc4FPBuR6D4V1qr~FbMaYD0qvPEUaFbTN897vh03APFyOlNUx1spbfOUanz8q9MMH-8runJgS9GZVlDpRG3O9M-yls22MmJtsioRHMQjr4Uzc8u-Wm-qJXgLaf1ARGXfD8b10h9Nia~OSu6y2poeHjD3ashiOwlEsVZukFJzAA2x-QdV2V2DvhXH3lps9gefBUcrpukzMPXjnu2ZpXBP8NAQEuqGT1-nodULMEHp1EqLsEwqVNseWI2B0EN3KYCcjOA6zPYFlBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';

  const BSharesImageSource = 'https://s3-alpha-sig.figma.com/img/a4ce/8dfa/11770664532158db85f355f7654b42d7?Expires=1680480000&Signature=P87bgXTt94eQgf63UTf-GO5A5SV6uOCohnOBX7S6kh6b-yNZDkHeuYj-yX1GCHC4E~yK1b96Xj3zPdzkw6Zwt9gF09ukJPqtIzPNPRieY6iImfwOg9P3DUQc0MmTu1P9hRYmapaEa0TKNI8YvZnu3g2wqO~fqwVDnDgx-x~ZyVKBF-gdnANImIzsb6Z7zvKyt7t0jnZOI0nC4bL~jfBRj4R7l6XarreIPNTzXXnLCVN0y1PVepwfcOHRx636Og4ZD23GxNrDkeKwtlDvlXiYOE5l5ozFR0vxK0hBgW2mVSc9B0JeRGp7PDhp~kq5xLoi4R3z45wByKuIHQ-7J3R02A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';

  const SBBondImageSource = 'https://s3-alpha-sig.figma.com/img/6f3d/b4ce/b810e96028e755fe33c9297e14206ea0?Expires=1680480000&Signature=GH-INeG0BU8LId9nRyY~RFF6CPtkEll1E1EeBdnKX4a3ZEmZD0UOxHS5nh3vY4Za7EG4X1YdXcDq4WUBUQVzHl5P5JA80tQfJiK-Y~ENPhVsZicVKKRY~fjtK2FFGO6MukfBzHJYM09P74vtNmPAvEVhmqJzg8AFxKMBnug0Ykep-146VbWcT2DbI0sOAsodnpXk73SlywO70aQ6Fv6jSxh5ksQN8cjf3nwtyLeqgzBQFMus8jo8bOBld3FkUjAZdhJpVMTq4UVI8CW5MvAwsR9wTOUSYrAqh3TRMxpqlXlP9d~rGjYg1pJOsHzqTyCp9bgmrGiwMYwpqB27OMhKJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';

  const MetaMaskImageSource = 'https://s3-alpha-sig.figma.com/img/9441/1c6a/6485a1c0f3e1a5cb9294b3ceed93ad0a?Expires=1680480000&Signature=kEis3sTH2pciq~x6gscN4pn5UI77wNcv0Hz6mJKr9H5IrRDM9blnzjftLTfV5Lu7s8awS3w5Pl-gDTT2Ztt45a4XzKQvckp4tQ2QDoKmklfuuUxdEDjrMMAkk5D6fINeRs4pZdvZZdI42DbX1pxC8YsGH5tFmlSuuQ6-gtIWpcAKx45nliTx34qMPhsBbvQt2oaEXcyK5QZ4jiWtJ~HPHM~aejMcRovov8qsshhZVIs7UDOf9JAVRz2Ryp~8wSs8N7JC1A7GTtUWTbVY3J5uk9xTuMqrcw0gRDDYTlYNS4qSRLrRF2YJut7izKeoGmUxgOQxYgP2koUto39FWroOXw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';

  const currentEpoch = useCurrentEpoch();
  const bombStats = useBombStats();
  const bShareStats = usebShareStats();
  const tBondStats = useBondStats();



  const bombCirculatingSupply = useMemo(() => (bombStats ? String(bombStats.circulatingSupply) : null), [bombStats]);
  const bombTotalSupply = useMemo(() => (bombStats ? String(bombStats.totalSupply) : null), [bombStats]);
  const bombPriceInDollars = useMemo(
    () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
    [bombStats],
  );

  const bSharePriceInDollars = useMemo(
    () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
    [bShareStats],
  );
  const bShareCirculatingSupply = useMemo(
    () => (bShareStats ? String(bShareStats.circulatingSupply) : null),
    [bShareStats],
  );
  const bShareTotalSupply = useMemo(() => (bShareStats ? String(bShareStats.totalSupply) : null), [bShareStats]);
  
  const tBondPriceInDollars = useMemo(
    () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
    [tBondStats],
  );
  const tBondCirculatingSupply = useMemo(
    () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
    [tBondStats],
  );
  const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);


  const BoxDivComponent = ({name,imgSrc,TVL,Dreturn,YourStakeImg,YourStakeVal1,YourStakeval2,EarnedImg,EarnedVal1,EarnedVal2,width}) => {
    return (
      <div className={styles.BoxDivComponentContainer} style={{width : width}}>
        <div className={styles.BoxDivComponentHeaderContainer}>
          <img src={imgSrc} alt="Main"></img>
          <div className={styles.BoxDivComponentHeaderTextContainer}>
            <div className={styles.BoxDivComponentHeaderText1}>
              <div>{name}</div>
              <div className={styles.recommended}>recommended</div>
            </div>
            <div className={styles.BoxDivComponentHeaderText2}>
              TVL : {TVL}
            </div>
          </div>
        </div>

        <div className={styles.BoxDivComponentBodyContainer}>
          <div className={styles.BoxDivComponentBodyContent}>
            <div className={styles.BoxDivComponentBodyContentItem}>
              <div>Daily returns : </div>
              <div>{Dreturn}</div>
            </div>
            <div className={styles.BoxDivComponentBodyContentItem}>
              <div>Your Stake : </div>
              <div>
                <img src={YourStakeImg} alt="Stake"></img>
                {YourStakeVal1}
                ={YourStakeval2}
              </div>
            </div>
            <div className={styles.BoxDivComponentBodyContentItem}>
              <div>Earned : </div>
              <div>
                <img src={EarnedImg} alt="Earned"></img>
                {EarnedVal1}
                ={EarnedVal2}
              </div>
            </div>
          </div>

          <div className={styles.BoxDivComponentBodyButtonsContainer}>
            <div className={styles.BoxDivComponentBodyButton1}>
              <button>Deposit   <img src="#" alt="Deposit"></img></button>
              <button>Withdraw   <img src="#" alt="Withdraw"></img></button>
            </div>
            <div className={styles.BoxDivComponentBodyButton2}>
              <button>Claim Rewards  <img src="#" alt="Claim Rewards"></img></button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.main}>
      <div className={styles.financeSummaryMainContainer}>
        <div className={styles.financeSummaryMainHeadingContainer}>
          <div className={styles.financeSummaryMainHeading}>
            Bomb Finance Summary
          </div>
          
        </div>

        <div className={styles.financeSummaryMainBodyContainer}>
          <div className={styles.financeSummaryMainBodyTableContainer}>
            <div className={styles.financeSummaryMainBodyTableHeadingContainer}>
              <div className={styles.financeSummaryMainBodyTableHeading}>Current Supply</div>
              <div className={styles.financeSummaryMainBodyTableHeading}>Total Supply</div>
              <div className={styles.financeSummaryMainBodyTableHeading}>Price</div>
            </div>

            <div className={styles.financeSummaryMainBodyTableContentContainer}>
              <div className={styles.financeSummaryMainBodyTableContentItem}>
                <div className={styles.financeSummaryMainBodyTableContentItemDiv}>
                <img src={`${BombImageSource}`} alt="Bomb" className={styles.financeSummaryMainBodyTableContentItemImage}></img>
                <div className={styles.financeSummaryMainBodyTableContentText}>$BOMB</div>
                </div>
                <div className={styles.financeSummaryMainBodyTableContentItemCS}>{bombCirculatingSupply}</div>
                <div className={styles.financeSummaryMainBodyTableContentItemTS}>60.9k</div>
                <div className={styles.financeSummaryMainBodyTableContentItemP}>$0.24 <br /> 1.05 BTCB</div>
                <img className={styles.financeSummaryMainBodyTableContentItemMMImage} src={`${MetaMaskImageSource}`} alt="Meta Mask"></img>
                
              </div>
              <div className={styles.financeSummaryMainBodyTableContentItem}>
              <div className={styles.financeSummaryMainBodyTableContentItemDiv}>
                <img src={`${BSharesImageSource}`} alt="BShare" className={styles.financeSummaryMainBodyTableContentItemImage}></img>
                <div className={styles.financeSummaryMainBodyTableContentText}>BSHARE</div>
                </div>
                <div className={styles.financeSummaryMainBodyTableContentItemCS}>11.4K</div>
                <div className={styles.financeSummaryMainBodyTableContentItemTS}>8.49M</div>
                <div className={styles.financeSummaryMainBodyTableContentItemP}>$300 13000 BTCB</div>
                <img className={styles.financeSummaryMainBodyTableContentItemMMImage} src={`${MetaMaskImageSource}`} alt="Meta Mask"></img>
                
              </div>
              <div className={styles.financeSummaryMainBodyTableContentItem}>
              <div className={styles.financeSummaryMainBodyTableContentItemDiv}>
                <img src={`${SBBondImageSource}`} alt="Bomb" className={styles.financeSummaryMainBodyTableContentItemImage}></img>
                <div className={styles.financeSummaryMainBodyTableContentText}>$BBOND</div>
                </div>
                <div className={styles.financeSummaryMainBodyTableContentItemCS}>20.00K</div>
                <div className={styles.financeSummaryMainBodyTableContentItemTS}>175K</div>
                <div className={styles.financeSummaryMainBodyTableContentItemP}>$0.28 <br /> 1.15 BTCB</div>
                <img className={styles.financeSummaryMainBodyTableContentItemMMImage} src={`${MetaMaskImageSource}`} alt="Meta Mask"></img>
                
              </div>
            </div>

          </div>

          <div className={styles.financeSummaryMainBodyEpochContainer}>
            <div className={styles.financeSummaryMainBodyEpochCurrent}>
              <div className={styles.financeSummaryMainBodyEpochCurrentText}>Current Epoch</div>
              <div className={styles.financeSummaryMainBodyEpochCurrentNumber}>{currentEpoch}</div>
            </div>
            <div className={styles.financeSummaryMainBodyEpochNext}>
              <div className={styles.financeSummaryMainBodyEpochNextTime}>03:38:07</div>
              <div className={styles.financeSummaryMainBodyEpochNextText}>Next Epoch In</div>
            </div>
            <div className={styles.financeSummaryMainBodyEpochLive}>
              <div className={styles.financeSummaryMainBodyEpochLiveTWAP}>Live TWAP : <span className={styles.green}>1.17</span></div>
              <div className={styles.financeSummaryMainBodyEpochLiveTVL}>TVL : <span className={styles.green}>$5,002,412</span></div>
              <div className={styles.financeSummaryMainBodyEpochLiveLastEpoch}>Last Epoch TWAP : <span className={styles.green}>2.42</span></div>
            </div>
          </div>

        </div>

      </div>

      <div className={styles.financeInfoContainer}>
        <div className={styles.financeInfoLeftContainer}>
          <div className={styles.financeInfoLeftTextContentContainer}>
            <a href="https://www.google.com" className={styles.lightBlue}>  Read Investment Strategy   </a>
          </div>

          {/* <div className={styles.financeInfoLeftInvestButtonContainer}> */}
          <button className={styles.financeInfoLeftInvestButton}>Invest now</button>
          {/* </div> */}
          <div className={styleMedia.financeInfoLeftOtherButtonsContainer}>
            <button className={styles.financeInfoLeftOtherButtonsDiscord}>
              <img src="#" alt="Discord"></img>
              Chat on Discord
            </button>
            <button className={styles.financeInfoLeftOtherButtonsDocs}>
              <img src="#" alt="Docs"></img>
              Read Docs
            </button>
          </div>

          <div className={styles.financeInfoLeftBoardroomContainer}>
            <BoxDivComponent name="Boardroom" imgSrc="#" TVL="$1,008,430" Dreturn="2" YourStakeImg="#" YourStakeVal1="124.21" YourStakeval2="$1171.62" EarnedImg="#" EarnedVal1="6.4413" EarnedVal2="$298.88" width="646px"/>
          </div>
        </div>
        <div className={styles.financeInfoRightContainer}>
          <div>Latest News</div>
        </div>
      </div>

      <div className={styles.financeBombFarmContainer}>
        <div className={styles.financeBombFarmHeadingContainer}>
          <div className={styles.financeBombFarmHeadingText}>
          <div>Bomb Farms</div>
          <div>Stake your LP tokens in our farms to start earning $BSHARE</div>
          </div>
          <div className={styles.financeBombFarmHeadingButton}>
            <button>Claim all <img src="#" alt="Claim all"></img></button>
          </div>
        </div>

        <BoxDivComponent width="1046px"/>
        <BoxDivComponent width="1046px"/>

      </div>

      <div className={styles.financeBondsContainer}>
        <div className={styles.financeBondsHeadingContainer}>
          <img src="#" alt="Bonds"></img>
          <div className={styles.financeBondsHeadingTextContainer}>
            <div className={styles.bold}>Bonds</div>
            <div className={styles.small}>BBOND can be purchased only on contraction periods, when TWAP of BOMB is below 1</div>
          </div>
        </div>

        <div className={styles.financeBondsBodyContainer}>
          <div className={styles.financeBondsBodyLeftContainer}>
            <div>Current Price : [Bomb]^2</div>
            <div>BBond = 6.2872 BTCB</div>
          </div>
          <div className={styles.financeBondsBodyMiddleContainer}>
              <div>Available to redeem</div>
              <div className={styles.financeBondsBodyMiddleImageContainer}>
                <img src="#" alt="Bomb"></img>
                <p>456</p>
              </div>
          </div>
          <div className={styles.financeBondsBodyRightContainer}>
              <div className={styles.financeBondsBodyRightTopContainer}>
                <div className={styles.financeBondsBodyRightTopTextContainer}>
                  <div>Purchase BBond</div>
                  <div>Bomb is over peg</div>
                </div>
                <button>Purchase <img src="#" alt="Purchase"></img></button>
              </div>

              <div className={styles.financeBondsBodyRightBottomContainer}>
                <div>Redeem Bomb</div>
                <button>Redeem <img src="#" alt="redeem"></img></button>
              </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;

