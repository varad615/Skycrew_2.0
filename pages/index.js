import Image from "next/image";
import Logo from "../public/Logo.png";
import WhiteLogo from "../public/Logo_White.png";
import Trophy from "../public/Trophy.png";
import Saly from "../public/Saly.png";
import Shapes from "../public/Shapes.png";
import Bulb from "../public/lightbulb.png";
import Community from "../public/community.png";
import Calendar from "../public/Calendar.png";
import Build from "../public/Build.png";
import StudGuy from "../public/StudGuy.png";
import Sections from "../public/Sections.png";
import NFT from "../public/NFT.png";
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { useState } from "react";
import React from "react";
// metamask login
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { signIn } from "next-auth/react";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import { useRouter } from "next/router";
import { useAuthRequestChallengeEvm } from "@moralisweb3/next";

function Home() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  //metamask login
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { requestChallengeAsync } = useAuthRequestChallengeEvm();
  const { push } = useRouter();

  const handleAuth = async () => {
    if (isConnected) {
      await disconnectAsync();
    }

    const { account, chain } = await connectAsync({
      connector: new MetaMaskConnector(),
    });

    const { message } = await requestChallengeAsync({
      address: account,
      chainId: chain.id,
    });

    const signature = await signMessageAsync({ message });

    // redirect user after success authentication to '/user' page
    const { url } = await signIn("moralis-auth", {
      message,
      signature,
      redirect: false,
      callbackUrl: "/home",
    });
    /**
     * instead of using signIn(..., redirect: "/user")
     * we get the url from callback and push it to the router to avoid page refreshing
     */
    push(url);
  };

  return (
    <>
      <div>
        {/* Hero */}
        <div className="h-screen overflow-hidden bg-gradient-to-r  from-[#171717] to-[#361748] md:bg-hero bg-cover bg-no-repeat bg-center">
          {/* Navbar */}
          <div className="flex justify-between items-center md:max-w-6xl bg-white mx-auto p-3 md:px-7 xl:mt-5 xl:rounded-md">
            <Image src={Logo} width={100} height={100} alt="Logo" />

            <button
              onClick={handler}
              className="bg-gradient-to-r from-[#5808FB] to-[#DD78BB] text-white px-5 py-2 text-base font-normal rounded-md"
            >
              Connect
            </button>
            <Modal
              closeButton
              blur
              css={{ backgroundColor: "white" }}
              aria-labelledby="modal-title"
              open={visible}
              onClose={closeHandler}
            >
              <Modal.Header>
                <Text id="modal-title" b size={18}>
                  Welcome to SkyCrew
                </Text>
              </Modal.Header>
              <Modal.Body>
                <button
                  onClick={handleAuth}
                  type="button"
                  class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
                >
                  <svg
                    aria-hidden="true"
                    class="w-6 h-5 mr-2 -ml-1"
                    viewBox="0 0 2405 2501"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <g clip-path="url(#clip0_1512_1323)">
                      {" "}
                      <path
                        d="M2278.79 1730.86L2133.62 2221.69L1848.64 2143.76L2278.79 1730.86Z"
                        fill="#E4761B"
                        stroke="#E4761B"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1848.64 2143.76L2123.51 1767.15L2278.79 1730.86L1848.64 2143.76Z"
                        fill="#E4761B"
                        stroke="#E4761B"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M2065.2 1360.79L2278.79 1730.86L2123.51 1767.15L2065.2 1360.79ZM2065.2 1360.79L2202.64 1265.6L2278.79 1730.86L2065.2 1360.79Z"
                        fill="#F6851B"
                        stroke="#F6851B"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1890.29 1081.17L2285.34 919.338L2265.7 1007.99L1890.29 1081.17ZM2253.21 1114.48L1890.29 1081.17L2265.7 1007.99L2253.21 1114.48Z"
                        fill="#763D16"
                        stroke="#763D16"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M2253.21 1114.48L2202.64 1265.6L1890.29 1081.17L2253.21 1114.48ZM2332.34 956.82L2265.7 1007.99L2285.34 919.338L2332.34 956.82ZM2253.21 1114.48L2265.7 1007.99L2318.65 1052.01L2253.21 1114.48Z"
                        fill="#763D16"
                        stroke="#763D16"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1542.24 2024.17L1641 2055.7L1848.64 2143.75L1542.24 2024.17Z"
                        fill="#E2761B"
                        stroke="#E2761B"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M2202.64 1265.6L2253.21 1114.48L2296.64 1147.8L2202.64 1265.6ZM2202.64 1265.6L1792.71 1130.55L1890.29 1081.17L2202.64 1265.6Z"
                        fill="#763D16"
                        stroke="#763D16"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1987.86 617.696L1890.29 1081.17L1792.71 1130.55L1987.86 617.696Z"
                        fill="#763D16"
                        stroke="#763D16"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M2285.34 919.338L1890.29 1081.17L1987.86 617.696L2285.34 919.338Z"
                        fill="#763D16"
                        stroke="#763D16"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1987.86 617.696L2400.16 570.1L2285.34 919.338L1987.86 617.696Z"
                        fill="#763D16"
                        stroke="#763D16"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M2202.64 1265.6L2065.2 1360.79L1792.71 1130.55L2202.64 1265.6Z"
                        fill="#F6851B"
                        stroke="#F6851B"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M2382.31 236.33L2400.16 570.1L1987.86 617.696L2382.31 236.33Z"
                        fill="#763D16"
                        stroke="#763D16"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M2382.31 236.33L1558.3 835.45L1547.59 429.095L2382.31 236.33Z"
                        fill="#E2761B"
                        stroke="#E2761B"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M934.789 380.309L1547.59 429.095L1558.3 835.449L934.789 380.309Z"
                        fill="#F6851B"
                        stroke="#F6851B"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1792.71 1130.55L1558.3 835.449L1987.86 617.696L1792.71 1130.55Z"
                        fill="#763D16"
                        stroke="#763D16"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1792.71 1130.55L2065.2 1360.79L1682.65 1403.04L1792.71 1130.55Z"
                        fill="#E4761B"
                        stroke="#E4761B"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1682.65 1403.04L1558.3 835.449L1792.71 1130.55L1682.65 1403.04Z"
                        fill="#E4761B"
                        stroke="#E4761B"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1987.86 617.696L1558.3 835.45L2382.31 236.33L1987.86 617.696Z"
                        fill="#763D16"
                        stroke="#763D16"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M940.144 2134.24L1134.69 2337.11L869.939 2096.16L940.144 2134.24Z"
                        fill="#C0AD9E"
                        stroke="#C0AD9E"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1848.64 2143.75L1940.86 1793.33L2123.51 1767.15L1848.64 2143.75Z"
                        fill="#CD6116"
                        stroke="#CD6116"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M151.234 1157.92L487.978 803.917L194.666 1115.67L151.234 1157.92Z"
                        fill="#E2761B"
                        stroke="#E2761B"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M2123.51 1767.15L1940.86 1793.33L2065.2 1360.79L2123.51 1767.15ZM1558.3 835.449L1230.48 824.74L934.789 380.309L1558.3 835.449Z"
                        fill="#F6851B"
                        stroke="#F6851B"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M2065.2 1360.79L1940.86 1793.33L1930.74 1582.12L2065.2 1360.79Z"
                        fill="#E4751F"
                        stroke="#E4751F"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1682.65 1403.04L2065.2 1360.79L1930.74 1582.12L1682.65 1403.04Z"
                        fill="#CD6116"
                        stroke="#CD6116"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1230.48 824.74L1558.3 835.449L1682.65 1403.04L1230.48 824.74Z"
                        fill="#F6851B"
                        stroke="#F6851B"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1230.48 824.74L345.784 6.08252L934.79 380.309L1230.48 824.74ZM934.195 2258.58L165.513 2496.56L12.0146 1910.53L934.195 2258.58Z"
                        fill="#E4761B"
                        stroke="#E4761B"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M265.465 1304.27L555.803 1076.41L799.14 1132.93L265.465 1304.27Z"
                        fill="#763D16"
                        stroke="#763D16"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M799.139 1132.93L555.803 1076.41L686.098 538.567L799.139 1132.93Z"
                        fill="#763D16"
                        stroke="#763D16"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M194.666 1115.67L555.803 1076.41L265.465 1304.27L194.666 1115.67Z"
                        fill="#763D16"
                        stroke="#763D16"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1930.74 1582.12L1780.81 1506.56L1682.65 1403.04L1930.74 1582.12Z"
                        fill="#CD6116"
                        stroke="#CD6116"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M194.666 1115.67L169.083 980.618L555.803 1076.41L194.666 1115.67Z"
                        fill="#763D16"
                        stroke="#763D16"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1749.88 1676.72L1780.81 1506.56L1930.74 1582.12L1749.88 1676.72Z"
                        fill="#233447"
                        stroke="#233447"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1940.86 1793.33L1749.88 1676.72L1930.74 1582.12L1940.86 1793.33Z"
                        fill="#F6851B"
                        stroke="#F6851B"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M555.803 1076.41L169.082 980.618L137.55 866.982L555.803 1076.41ZM686.098 538.567L555.803 1076.41L137.55 866.982L686.098 538.567ZM686.098 538.567L1230.48 824.74L799.139 1132.93L686.098 538.567Z"
                        fill="#763D16"
                        stroke="#763D16"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M799.14 1132.93L1230.48 824.74L1422.65 1411.96L799.14 1132.93ZM1422.65 1411.96L826.508 1399.47L799.14 1132.93L1422.65 1411.96Z"
                        fill="#E4761B"
                        stroke="#E4761B"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M265.465 1304.27L799.14 1132.93L826.508 1399.47L265.465 1304.27ZM1682.65 1403.04L1422.65 1411.96L1230.48 824.74L1682.65 1403.04Z"
                        fill="#F6851B"
                        stroke="#F6851B"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1780.81 1506.56L1749.88 1676.72L1682.65 1403.04L1780.81 1506.56Z"
                        fill="#CD6116"
                        stroke="#CD6116"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M345.784 6.08252L1230.48 824.74L686.098 538.567L345.784 6.08252Z"
                        fill="#763D16"
                        stroke="#763D16"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M12.0146 1910.53L758.088 1879.59L934.195 2258.58L12.0146 1910.53Z"
                        fill="#E4761B"
                        stroke="#E4761B"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M934.194 2258.58L758.088 1879.59L1124.58 1861.75L934.194 2258.58Z"
                        fill="#CD6116"
                        stroke="#CD6116"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1749.88 1676.72L1940.86 1793.33L2046.16 2041.42L1749.88 1676.72ZM826.508 1399.47L12.0146 1910.53L265.465 1304.27L826.508 1399.47ZM758.088 1879.59L12.0146 1910.53L826.508 1399.47L758.088 1879.59ZM1682.65 1403.04L1731.43 1580.33L1495.83 1594.02L1682.65 1403.04ZM1495.83 1594.02L1422.65 1411.96L1682.65 1403.04L1495.83 1594.02Z"
                        fill="#F6851B"
                        stroke="#F6851B"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1134.69 2337.11L934.194 2258.58L1631.48 2375.79L1134.69 2337.11Z"
                        fill="#C0AD9E"
                        stroke="#C0AD9E"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M265.465 1304.27L151.234 1157.91L194.666 1115.67L265.465 1304.27Z"
                        fill="#763D16"
                        stroke="#763D16"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1710.61 2288.92L1631.48 2375.79L934.194 2258.58L1710.61 2288.92Z"
                        fill="#D7C1B3"
                        stroke="#D7C1B3"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1748.09 2075.93L934.194 2258.58L1124.58 1861.75L1748.09 2075.93Z"
                        fill="#E4761B"
                        stroke="#E4761B"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M934.194 2258.58L1748.09 2075.93L1710.61 2288.92L934.194 2258.58Z"
                        fill="#D7C1B3"
                        stroke="#D7C1B3"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M137.55 866.982L110.777 409.462L686.098 538.567L137.55 866.982ZM194.665 1115.67L115.536 1035.35L169.082 980.618L194.665 1115.67Z"
                        fill="#763D16"
                        stroke="#763D16"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1289.38 1529.76L1422.65 1411.96L1403.61 1699.92L1289.38 1529.76Z"
                        fill="#CD6116"
                        stroke="#CD6116"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1422.65 1411.96L1289.38 1529.76L1095.43 1630.31L1422.65 1411.96Z"
                        fill="#CD6116"
                        stroke="#CD6116"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M2046.16 2041.42L2009.87 2014.65L1749.88 1676.72L2046.16 2041.42Z"
                        fill="#F6851B"
                        stroke="#F6851B"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1095.43 1630.31L826.508 1399.47L1422.65 1411.96L1095.43 1630.31Z"
                        fill="#CD6116"
                        stroke="#CD6116"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1403.61 1699.92L1422.65 1411.96L1495.83 1594.02L1403.61 1699.92Z"
                        fill="#E4751F"
                        stroke="#E4751F"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M89.3589 912.199L137.55 866.982L169.083 980.618L89.3589 912.199Z"
                        fill="#763D16"
                        stroke="#763D16"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1403.61 1699.92L1095.43 1630.31L1289.38 1529.76L1403.61 1699.92Z"
                        fill="#233447"
                        stroke="#233447"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M686.098 538.567L110.777 409.462L345.784 6.08252L686.098 538.567Z"
                        fill="#763D16"
                        stroke="#763D16"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1631.48 2375.79L1664.2 2465.03L1134.69 2337.12L1631.48 2375.79Z"
                        fill="#C0AD9E"
                        stroke="#C0AD9E"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1124.58 1861.75L1095.43 1630.31L1403.61 1699.92L1124.58 1861.75Z"
                        fill="#F6851B"
                        stroke="#F6851B"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M826.508 1399.47L1095.43 1630.31L1124.58 1861.75L826.508 1399.47Z"
                        fill="#E4751F"
                        stroke="#E4751F"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1495.83 1594.02L1731.43 1580.33L2009.87 2014.65L1495.83 1594.02ZM826.508 1399.47L1124.58 1861.75L758.088 1879.59L826.508 1399.47Z"
                        fill="#F6851B"
                        stroke="#F6851B"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1495.83 1594.02L1788.55 2039.64L1403.61 1699.92L1495.83 1594.02Z"
                        fill="#E4751F"
                        stroke="#E4751F"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1403.61 1699.92L1788.55 2039.64L1748.09 2075.93L1403.61 1699.92Z"
                        fill="#F6851B"
                        stroke="#F6851B"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1748.09 2075.93L1124.58 1861.75L1403.61 1699.92L1748.09 2075.93ZM2009.87 2014.65L1788.55 2039.64L1495.83 1594.02L2009.87 2014.65Z"
                        fill="#F6851B"
                        stroke="#F6851B"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M2068.18 2224.07L1972.99 2415.05L1664.2 2465.03L2068.18 2224.07ZM1664.2 2465.03L1631.48 2375.79L1710.61 2288.92L1664.2 2465.03Z"
                        fill="#C0AD9E"
                        stroke="#C0AD9E"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1710.61 2288.92L1768.92 2265.72L1664.2 2465.03L1710.61 2288.92ZM1664.2 2465.03L1768.92 2265.72L2068.18 2224.07L1664.2 2465.03Z"
                        fill="#C0AD9E"
                        stroke="#C0AD9E"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M2009.87 2014.65L2083.05 2059.27L1860.54 2086.04L2009.87 2014.65Z"
                        fill="#161616"
                        stroke="#161616"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1860.54 2086.04L1788.55 2039.64L2009.87 2014.65L1860.54 2086.04ZM1834.96 2121.15L2105.66 2088.42L2068.18 2224.07L1834.96 2121.15Z"
                        fill="#161616"
                        stroke="#161616"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M2068.18 2224.07L1768.92 2265.72L1834.96 2121.15L2068.18 2224.07ZM1768.92 2265.72L1710.61 2288.92L1748.09 2075.93L1768.92 2265.72ZM1748.09 2075.93L1788.55 2039.64L1860.54 2086.04L1748.09 2075.93ZM2083.05 2059.27L2105.66 2088.42L1834.96 2121.15L2083.05 2059.27Z"
                        fill="#161616"
                        stroke="#161616"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1834.96 2121.15L1860.54 2086.04L2083.05 2059.27L1834.96 2121.15ZM1748.09 2075.93L1834.96 2121.15L1768.92 2265.72L1748.09 2075.93Z"
                        fill="#161616"
                        stroke="#161616"
                        stroke-width="5.94955"
                      />{" "}
                      <path
                        d="M1860.54 2086.04L1834.96 2121.15L1748.09 2075.93L1860.54 2086.04Z"
                        fill="#161616"
                        stroke="#161616"
                        stroke-width="5.94955"
                      />{" "}
                    </g>{" "}
                    <defs>
                      {" "}
                      <clipPath id="clip0_1512_1323">
                        {" "}
                        <rect
                          width="2404"
                          height="2500"
                          fill="white"
                          transform="translate(0.519043 0.132812)"
                        />{" "}
                      </clipPath>{" "}
                    </defs>{" "}
                  </svg>
                  Connect with MetaMask
                </button>
              </Modal.Body>
              <Modal.Footer>
                <Button auto flat color="error" onPress={closeHandler}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>

          {/* hero section  */}
          <div className="flex flex-col justify-center md:justify-start md:max-w-5xl mx-auto max-w-xl md:w-70 xl:w-full my-8 px-5 text-white py-5  relative">
            {/* Tagline */}
            <div className="flex flex-col items-center md:flex-row justify-center xl:justify-start">
              <Image
                src={WhiteLogo}
                width={100}
                height={100}
                alt="white logo"
              />
              <p className="pl-2 pt-2 md:mb-2 font-oxy text-center md:align-baseline">
                Rewarding the Next Generation of Learners
              </p>
            </div>

            {/* flex image and content */}
            <div className="flex flex-row justify-center xl:justify-start items-center py-3">
              {/* boxes */}
              <div className="my-5 flex flex-col items-center justify-center">
                {/* Row 1 */}
                {/* Container 1 */}
                <div className="bg-gradient-to-br from-[#2E293A66] via-[#9C9C9C3D] to-[#2C273666] p-5 rounded-lg border px-10 border-slate-500">
                  <h1 className="text-3xl font-bold lg:text-5xl lg:leading-[60px]">
                    {" "}
                    <span className="text-[#d1d4fb]"> SkyRocket </span> your
                    Skills <br /> by building{" "}
                    <span className="text-[#d1d4fb]">EPIC</span> Stuff.
                  </h1>
                </div>

                {/* Row 2 */}
                <div className="flex flex-row items-center justify-around py-5">
                  {/* container 2 */}
                  <div className="flex items-center flex-col text-center w-[17rem] md:w-full mr-3 md:mr-8 bg-gradient-to-br from-[#2E293A66] via-[#9C9C9C3D] to-[#2C273666] p-4 lg:px-9 rounded-lg border border-slate-500">
                    <Image
                      src={Trophy}
                      height={200}
                      width={200}
                      alt="trophy image"
                    />
                    <h2 className="text-base font-semibold pt-3 lg:text-xl">
                      Rewards & Incentives <br /> for Active Learners
                    </h2>
                  </div>
                  {/* container 3 */}
                  <div className=" flex items-center flex-col text-center h-[16.8rem] md:h-full bg-gradient-to-br from-[#2E293A66] via-[#9C9C9C3D] to-[#2C273666] px-3 py-10 lg:py-5 lg:px-10 md:w-full rounded-lg border border-slate-500">
                    <Image
                      src={Saly}
                      height={200}
                      width={200}
                      alt="trophy image"
                    />
                    <h2 className="text-base font-semibold pt-3 lg:text-xl">
                      Learn along with <br /> the Community
                    </h2>
                  </div>
                </div>
              </div>

              {/* right side */}
              <div className="hidden xl:block absolute -right-[14rem] top-[5rem] ">
                <Image
                  src={Shapes}
                  width={600}
                  height={600}
                  alt="shapes image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 1 */}
        <div className="md:h-screen py-[10rem] bg-white flex justify-center items-center">
          <div className="inline-flex flex-col space-y-10 items-center justify-end">
            <div className="flex flex-col space-y-7 items-center justify-end px-5">
              <p className="text-2xl md:text-6xl font-bold text-black">
                Learn by{" "}
                <span className="text-[#8E58B0]"> Actually Making Stuff </span>
              </p>
              <p className="text-sm md:text-2xl md:tracking-wide text-center text-black font-medium">
                Say goodbye to 30-Hour Long recorded courses that are difficult
                to finish.
                <br />
                Say Hello to a mode of learnig that focuses on actually doing
                the thing.
              </p>
            </div>

            {/* Card rows */}
            <div className="grid grid-rows-1 gap-y-5 mx-12 md:grid-cols-3 md:gap-x-6 md:max-w-4xl md:py-5">
              {/* Card 1 */}
              <div className="bg-gradient-to-r from-[#481D52] to-[#291D58] rounded-3xl flex flex-col justify-evenly px-5 py-10">
                <div className="flex justify-center py-5 md:pb-12">
                  {" "}
                  <Image
                    src={Calendar}
                    height={100}
                    width={100}
                    alt="Calender"
                  />{" "}
                </div>
                <h2 className="text-2xl font-semibold text-left px-3">
                  Weekly Challenges
                </h2>
                <p className="py-3 px-3 text-xl">
                  Getting started is difficult so we make the start of every
                  cohort a special event.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-gradient-to-r from-[#481D52] to-[#291D58] rounded-3xl flex flex-col justify-evenly  px-5 py-10">
                <div className="flex justify-center pb-5">
                  <Image
                    src={Community}
                    height={100}
                    width={100}
                    alt="Communityr"
                  />
                </div>
                <h2 className="text-2xl font-semibold text-left px-3 ">
                  Pro-active community.
                </h2>
                <p className="py-3 px-3 text-xl">
                  Make progress on your project alongside other builders to keep
                  you accountable
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-gradient-to-r from-[#481D52] to-[#291D58] rounded-3xl flex flex-col justify-evenly px-5 py-10">
                <div className="flex justify-center pb-5">
                  <Image src={Bulb} height={100} width={100} alt="Light Bulb" />{" "}
                </div>
                <h2 className="text-2xl font-semibold text-left px-3">
                  Unique Project Guides
                </h2>
                <p className="py-3 px-3 text-xl">
                  Projects that you can customize + make your own. Build it.
                  Deploy it. Share it
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div>
          <div className="md:h-screen bg-gradient-to-r  from-[#171717] to-[#361748] md:bg-hero bg-cover bg-no-repeat bg-center flex justify-center items-center flex-col py-14 pb-28 px-8 md:pt-32">
            {/* Row 1 */}
            <div className="relative md:w-full md:max-w-4xl">
              <div className=" bg-gradient-to-br from-[#2E293A66] via-[#9C9C9C3D] to-[#2C273666] border-2 rounded-3xl px-6 pt-5 pb-16">
                <p className="text-3xl md:text-4xl font-bold py-3 md:px-5">
                  Build alongside other
                  <br />
                  <span className="text-[#BE89F2]">
                    Developers & Designers.
                  </span>
                </p>
                <p className="text-base pr-10 md:w-[35em] md:px-5 md:text-md md:pt-3">
                  All Great things were built in TEAMS. Once you enroll we'll
                  assign you a channel where you'll get to share progress with a
                  plethora of skilled and talented professionals.
                </p>
              </div>
              {/* Image */}
              <div className="absolute -right-8 -bottom-16 md:-right-20">
                <Image
                  src={Build}
                  width={200}
                  height={200}
                  alt="build photo"
                  className="md:h-[25rem] md:w-[25rem] "
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="relative md:w-full md:max-w-4xl mt-24 md:mt-28">
              <div className=" bg-gradient-to-br from-[#2E293A66] via-[#9C9C9C3D] to-[#2C273666] border-2 rounded-3xl px-6 pt-5 pb-16">
                <p className="text-3xl md:text-4xl font-bold py-3 md:px-5 text-right md:text-start md:pl-[20rem]">
                  Learning Opportunities
                  <br />
                  <span className="text-[#BE89F2]">Get an Internship!</span>
                </p>
                <p className="text-base pl-10 md:pl-[20rem] md:text-start md:text-md md:pt-3  md:pr-32 text-right">
                  The Tokens and NFTs you have earned will act as a Proof of
                  your work. You can use these tokens to apply for various Jobs
                  and Internship based on the skills you have acquired.
                </p>
              </div>
              {/* Image */}
              <div className="absolute -left-8 -bottom-20 md:-left-20">
                <Image
                  src={StudGuy}
                  width={200}
                  height={200}
                  alt="build photo"
                  className="md:h-[25rem] md:w-[25rem] "
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-white py-10 px-5 md:py-28">
          <div className="text-black">
            <h1 className="text-3xl md:text-4xl font-extrabold text-center py-3">
              How does the{" "}
              <span className="text-[#8E58B0]">Rewarding System Work?</span>{" "}
            </h1>
            <p className="text-center font-base md:text-xl ">
              Section wise Incentivization is provided to the Learners. After
              every section <br /> tokens are awarded to the Learner, directly
              transferred in their digital wallet.
            </p>
            <div className="flex justify-center items-center py-8">
              <Image
                src={Sections}
                width={450}
                height={450}
                alt="sections"
                className="md:w-[30rem] md:h-[3rem]"
              />
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="md:h-screen overflow-hidden bg-gradient-to-r  from-[#171717] to-[#361748] md:bg-hero bg-cover bg-no-repeat bg-center p-10 md:flex md:justify-center ">
          <div className="flex flex-col items-center md:flex-row justify-center">
            {/* Left */}
            <div className="z-10">
              <Image
                src={NFT}
                height={500}
                width={500}
                alt="NFT"
                className="md:h-[23rem] md:w-[23rem]"
              />
            </div>

            {/* Right */}
            <div className="md:-ml-10">
              <div className="bg-gradient-to-br from-[#2E293A66] via-[#9C9C9C3D] to-[#2C273666] rounded-lg border p-5 border-slate-500 md:h-[20rem] md:w-[45rem]">
                <h1 className="text-2xl text-center font-bold lg:leading-[60px] md:text-3xl md:text-left md:pl-10">
                  Mint your Own{" "}
                  <span className="text-[#D8B0FE]">NFT Certificates!</span>
                </h1>
                <p className="text-center py-3 px-5 md:text-left md:pl-10 md:pr-24">
                  All the Certifications on the platform are in the form of NFT
                  Certificates. These ensure that the Learner has actually
                  completed all sections of the course thoroughly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
