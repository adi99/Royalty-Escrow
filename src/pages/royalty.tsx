import type { NextPage } from "next";
import Head from "next/head";
import { RoyaltyView } from "../views";

const Royalty: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Scaffold</title>
        <meta
          name="description"
          content="Solana Scaffold"
        />
      </Head>
      <RoyaltyView />
    </div>
  );
};

export default Royalty;
