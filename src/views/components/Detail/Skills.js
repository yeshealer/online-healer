import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Icon } from '@iconify/react';

const Skills = () => {
    return (
        <div className="rounded-xl p-4 relative h-[500px] md:h-full overflow-scroll overflow-x-hidden">
            <div className="p-2 pt-0">
                <p className="italic text-md font-medium bg-orange-600 p-1 px-5 rounded-xl text-center flex items-center justify-center">
                    <Icon icon="eos-icons:blockchain" className="mr-2" />
                    Blockchain
                </p>
                <div className="p-3">
                    <p className="text-lime-100 text-sm mt-1">Solidity</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-[93%] bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">Web3</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-full bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">Defi / DAPP / DEX</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-[85%] bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">OpenZeppelin</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-[91%] bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">NFT</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-[97%] bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">Token</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-[90%] bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">IPFS</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-full bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">WalletConnect</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-full bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">Ethereum / Polygon</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-[94%] bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">Binance</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-full bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">Rust</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-[77%] bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">Solana</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-[70%] bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">ICO / Bridge</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-[84%] bg-fuchsia-400 rounded-[50px]" />
                </div>
            </div>
            <div className="p-2">
                <p className="italic text-md font-medium bg-rose-600 p-1 px-5 rounded-xl text-center flex items-center justify-center">
                    <Icon icon="clarity:display-solid-alerted" className="mr-2" />
                    Frontend
                </p>
                <div className="p-3">
                    <p className="text-lime-100 text-sm mt-1">React</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-full bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">Javascript / Typescript</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-[99%] bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">Vue</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-[85%] bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">HTML</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-full bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">CSS</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-[97%] bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">SCSS</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-[95%] bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">Responsive Design</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-full bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">Bootstrap</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-full bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">TailwindCSS</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-full bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">Material UI</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-full bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">React Native</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-full bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">Django</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-[84%] bg-fuchsia-400 rounded-[50px]" />
                </div>
            </div>
            <div className="p-2">
                <p className="italic text-md font-medium bg-lime-600 p-1 px-5 rounded-xl text-center flex items-center justify-center">
                    <Icon icon="icon-park-solid:database-setting" className="mr-2" />
                    Backend
                </p>
                <div className="p-3">
                    <p className="text-lime-100 text-sm mt-1">Node.js</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-full bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">PHP</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-[99%] bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">Laravel</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-[90%] bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">Codeigniter</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-[85%] bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">Python</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-[90%] bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">MongoDB</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-[92%] bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">Ruby on rails</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-[93%] bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">SQL</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-full bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">Django</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-[84%] bg-fuchsia-400 rounded-[50px]" />
                </div>
            </div>
            <div className="p-2">
                <p className="italic text-md font-medium bg-blue-600 p-1 px-5 rounded-xl text-center flex items-center justify-center">
                    <Icon icon="bi:tools" className="mr-2" />
                    Tools
                </p>
                <div className="p-3">
                    <p className="text-lime-100 text-sm mt-1">Github</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-[95%] bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">Figma</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-[85%] bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">Photoshop</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-[90%] bg-fuchsia-400 rounded-[50px]" />
                    <p className="text-lime-100 text-sm mt-1">Adobe illustrator</p>
                    <ProgressBar completed="" barContainerClassName="h-[12px] w-full bg-[#ffffff10] rounded-[50px] p-[1px]" completedClassName="h-[10px] w-[85%] bg-fuchsia-400 rounded-[50px]" />
                </div>
            </div>
        </div>
    )
}

export default Skills