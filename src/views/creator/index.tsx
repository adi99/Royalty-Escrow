// Next, React
import tokenLogo from './token-logo.png';
import ethLogo from './eth-logo.png';
import { SendTransaction } from '../../components/SendTransaction';
import React, { FC, useEffect, useState, Component } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../../components/RequestAirdrop';
import pkg from '../../../package.json';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

export const CreatorView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()
  var date = new Date().toDateString();

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])


  return (
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
          Half Royalty Paid <span className='text-sm font-normal align-top text-slate-700'>v{pkg.version}</span>
        </h1>
        <h4 className="md:w-full text-center text-slate-300 my-2">
          <p>Undercollateralized Loan</p>
          Generate additional Royalty through Staking
         </h4>

          <form className="mb-3" onSubmit={(event) => {
          event.preventDefault()
          let etherAmount
          etherAmount = this.input.value.toString()
          etherAmount = window.web3.utils.toWei(etherAmount, 'Ether')
          this.props.buyTokens(etherAmount)
        }}>
        <div>
          <label className="float-left"><b>Input</b></label>
          <span className="float-right text-muted">
            Balance: {(balance || 0).toLocaleString()}
          </span>
        </div>
        <div className="input-group input-group-lg">
          <input
            type="text"
            onChange={(event) => {
              const etherAmount = this.input.value.toString()
              this.setState({
                output: etherAmount * 1.025
              })
            }}
            className="form-control form-control-lg"
            placeholder="0"
            required />
          <div className="input-group-append">
            <div className="input-group-text">
              <img src={ethLogo} height='32' alt=""/>
              &nbsp;&nbsp;&nbsp; SOL
            </div>
          </div>
        </div>
        <div>
          <label className="float-left"><b>Output</b></label>
          <span className="float-right text-muted">
            Balance: 0
          </span>
        </div>
        <div className="input-group input-group-lg">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="0"
            disabled
          />
          <div className="input-group-append">
            <div className="input-group-text">
              <img src={tokenLogo} height='32' alt=""/>
              &nbsp; mSOL
            </div>
          </div>
        </div>
        <div className="mb-5">
          <span className="float-left text-muted">Exchange Rate</span>
          <span className="float-right text-muted">1 SOL = 1.025 mSOL</span>
        </div>

         <div class="card" className="mb-5">
          <span className="float-left text-muted">Maturity</span>
          <span className="float-right text-muted">{date}</span>
        </div>
        <SendTransaction />
      </form>
      </div>
    </div>
  );
};
