
# Solana Escrow

Overcollateralized loans are widely famous in the Decentralized Finance world. 

Problem with Royalty:-
1- Buyer does not want to pay for roylty. If they have chance to not pay the royalty then most buyers are not paying the royalty </br>
2- Royalty is a way to get additional revenue for Creators. 
3- If a Platform enforce royalty Buyer will find a different platform to buys the NFTs.

Solution:-

Undercollaterlized loans have never been used before in DeFI ecosystem before so In this concept if buyer haven't paid or partly paid the royalty still the creator will receive the royalty.

In Magic Eden there are three option
1- Paid with Full royalty (will exclude this case)
2- paid with Half Royalty (royalty 2.5%)
3- Didn't paid the Royalty(royalty 0%)

Needed from Magic Eden:-
A private Curve Pool with fund (100k)

In case of 2.5% and 0% royalty, Following process will be followed:-
1- Buyer will pay the NFT price in Sol/ETH and deposited into a platform with 5% APY(The deposited aaset can not be withdrawn before maturity period)
2- The deposited Sol/ETH will be converted to (1.025 in case of 2.5% royalty and 1.05 in case of 0% royalty) mSol/mETH.
3- mSol/mETH will be converted to equivalent Sol/ETH(1.025 in case of 2.5% royalty and 1.05 in case of 0% royalty) with the private Curve Pool.
4- Seller will be receive his asked bid/price and creator will receive the whole royalty (extra 2.5% in case of half royalty and 5% in case of no royalty) 
5- The deposited Sol/ETH can removed from the deposited platform after 6 month or 12 months (Base APY 5%) by burning mSol/mETH and sent to treasery or to Curve Pool for liquidity.
6- In this case both creator will get full royalty and Buyer can choose to pay royalty based on his preference.
7- Only Magic Eden have to build a Private Curve Pool with some Liquidity and Some Liquidity will be locked which can be removed within 6/12 months with original value. In this nobody looses, only some liquidity (earning APY 5%) from Magic Eden will be locked. They can remove liquidity from Curve Pool anytime.
