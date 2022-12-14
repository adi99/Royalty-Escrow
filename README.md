
# Solana Escrow



## 🧠 Challenges
- NFT Buyer does not want to pay for royalty. If they have chance to not pay the royalty then most NFT buyers are not paying the royalty </br>
- Royalty is a way to get additional revenue for Creators for long term. </br> 
- If a Platform enforces royalty NFT Buyer will find a different platform to buys the NFTs. </br>

## Solution 
Overcollateralized loans are widely famous in the Decentralized Finance world. </br>
Undercollaterlized loans have never been used before in DeFI ecosystem before so In this concept if buyer haven't paid or partly paid the royalty still the creator will receive the royalty.

### In Magic Eden there are three option </br>
1- Paid with Full royalty (will exclude this case) </br>
2- paid with Half Royalty (royalty 2.5%) </br>
3- Didn't paid the Royalty(royalty 0%) </br>

### Needed from Magic Eden:-</br>
A private Curve Pool with fund (100k) </br>


### Process
In case of 2.5% and 0% royalty, Following process will be followed:- </br>
- Buyer will pay the NFT price in Sol/ETH and deposited into a platform with 5% APY(The deposited aaset can not be withdrawn before maturity period) </br>
- The deposited Sol/ETH will be converted to (1.025 in case of 2.5% royalty and 1.05 in case of 0% royalty) mSol/mETH. </br>
- mSol/mETH will be converted to equivalent Sol/ETH(1.025 in case of 2.5% royalty and 1.05 in case of 0% royalty) with the private Curve Pool. </br>
- Seller will be receive his asked bid/price and creator will receive the whole royalty (extra 2.5% in case of half royalty and 5% in case of no royalty) </br>
- The deposited Sol/ETH can removed from the deposited platform after 6 month or 12 months (Base APY 5%) by burning mSol/mETH and sent to treasery or to Curve Pool for liquidity. </br>
- In this case both creator will get full royalty and Buyer can choose to pay royalty based on his preference. </br>
- Only Magic Eden have to build a Private Curve Pool with some Liquidity and Some Liquidity will be locked which can be removed within 6/12 months with original value. </br>
- In this nobody looses, only some liquidity (earning APY 5%) from Magic Eden will be locked. Magic Eden can remove liquidity from Curve Pool anytime. </br>

## ▶️ Demo

[![Solana Patreon Demo](https://github.com/adi99/Royalty-Escrow/blob/main/public/Royaltylite.jpg)](https://www.youtube.com/watch?v=IlzuWDVpTv0 'Solana Patreon')

## Installation

```bash
npm install
# or
yarn install
```

## Build and Run

Next, run the development server:

```bash
npm run dev
# or
yarn dev
```
