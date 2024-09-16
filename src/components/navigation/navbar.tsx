"use client";
import Link from "next/link";
import { useAccount } from "wagmi";
// import AppLogo from '../assets/app-logo.png'

const style = {
  wrapper: `bg-black w-screen px-[1.2rem] py-[0.8rem] flex `,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
  walletAddress: `flex mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c] text-white px-2`,
};

export default function Navbar() {
  const { address, isConnecting } = useAccount();
  return (
    <div className={style.wrapper}>
      <Link href="/">
        <div className={style.logoContainer}>
          {/* <Image src={mantleSeaLogo} height={80} width={200} alt="mantle logo" /> */}
          <div className="text-[32px] text-white font-serif">MyLogo</div>
          <div className={style.logoText}></div>
        </div>
      </Link>

      {/* search bar to search streams */}
      <div className={style.walletAddress}>
        {isConnecting && "Connecting"}
        {address && <p>{address}</p>}
      </div>
    </div>
  );
}
