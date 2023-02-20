import { Input } from "@nextui-org/react";
import { useState } from "react";

const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

export default function certi() {
  const [address, setUserAddress] = useState();
  const handlesubmit = async () => {
    await Moralis.start({
      apiKey: "z9e4mn8Byp58cVJe6xvVNbEdiT8xuaJFiohJRF6awbfLTs0wqlkQ5tJp5nSxTYGA"
      // ...and any other configuration
    });

    const address = "0x3c3BaF56e295BF91724c3Fd6C85e901460AE00bE";

    const chain = EvmChain.MUMBAI;

    const tokenId = 2;

    const response = await Moralis.EvmApi.nft.getNFTMetadata({
      address,
      chain,
      tokenId
    });

    console.log(response.toJSON());
  };
  return (
    <div>
      0xb47B8e6da00D6aDEDF9eF45e4d722f62BD2EDe5D <br />
      <input
        type="text"
        placeholder="Address"
        onChange={(e) => setUserAddress(e.target.value)}
      />
      <br />
      <button onClick={handlesubmit}>test</button>
    </div>
  );
}
