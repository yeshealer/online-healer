import React from "react";
import { Icon } from '@iconify/react';

const Projects = () => {
    return (
        <div className="bg-[#ffffff15] rounded-xl p-4 h-[500px] md:h-full overflow-scroll overflow-x-hidden">
            <p className="text-md italic bg-violet-600 p-1 font-medium w-1/2 rounded-xl text-center flex items-center justify-center">
                <Icon icon="cil:education" className="mr-2" />
                Education
            </p>
            <div className="flex items-start">
                <div className="ml-10 mr-3 mt-3 w-full">
                    <p className="text-xl font-bold text-green-500">University of Quebec at Chicoutimi</p>
                    <div className="flex items-center justify-between">
                        <p className="text-md italic text-gray-400">Computer Science</p>
                        <p className="text-md italic text-gray-400">2012. 2 - 2016. 4</p>
                    </div>
                    <ul className="list-disc ml-5 mt-1">
                        <li className="text-sm">Computer Engineering</li>
                        <li className="text-sm">UI / UX Design</li>
                        <li className="text-sm">Information Security</li>
                        <li className="text-sm">Information Technology</li>
                    </ul>
                </div>
            </div>
            <p className="text-md italic bg-pink-600 p-1 font-medium w-1/2 rounded-xl text-center mt-5 flex items-center justify-center">
                <Icon icon="ic:baseline-work" className="mr-2" />
                Experience
            </p>
            <div className="flex items-start">
                <div className="ml-10 mr-3 mt-3 w-full">
                    <p className="text-xl font-bold text-orange-600">9s Seafood</p>
                    <div className="flex items-center justify-between">
                        <p className="text-md italic text-gray-400">Full-stack developer</p>
                        <p className="text-md italic text-gray-400">2016. 5 - 2017. 4</p>
                    </div>
                    <ul className="list-disc ml-5 mt-1">
                        <li className="text-sm">I was involved in completing Frontend(PHP + Laravel) with 3 team members.</li>
                        <li className="text-sm">I have integrated MongoDB into backend server.</li>
                        <li className="text-sm">I imagined, created and implemented a new delivery system.</li>
                    </ul>
                </div>
            </div>
            <div className="flex items-start">
                <div className="ml-10 mr-3 mt-3 w-full">
                    <p className="text-xl font-bold text-rose-600">Lusion</p>
                    <div className="flex items-center justify-between">
                        <p className="text-md italic text-gray-400">Frontend developer</p>
                        <p className="text-md italic text-gray-400">2017. 5 - 2018. 1</p>
                    </div>
                    <ul className="list-disc ml-5 mt-1">
                        <li className="text-sm">I helped the Lusion team come up with ideas for the project.</li>
                        <li className="text-sm">UI Design for Landing page with Figma.</li>
                        <li className="text-sm">Create animation for projects and implement it to site using Three.js.</li>
                    </ul>
                </div>
            </div>
            <div className="flex items-start">
                <div className="ml-10 mr-3 mt-3 w-full">
                    <p className="text-xl font-bold text-lime-600">Fastswap</p>
                    <div className="flex items-center justify-between">
                        <p className="text-md italic text-gray-400">Frontend developer</p>
                        <p className="text-md italic text-gray-400">2018. 2 - 2019. 10</p>
                    </div>
                    <ul className="list-disc ml-5 mt-1">
                        <li className="text-sm">Landing page design and interface for protocol features like exchange, liquidity, yield farming.</li>
                        <li className="text-sm">Deployed and integrated subgraph to make real time analytic view, chart to seek tokens, pairs and transaction detail.</li>
                        <li className="text-sm">Worked on wallet management and LP farming implementation.</li>
                    </ul>
                </div>
            </div>
            <div className="flex items-start">
                <div className="ml-10 mr-3 mt-3 w-full">
                    <p className="text-xl font-bold text-slate-600">Formation Finance</p>
                    <div className="flex items-center justify-between">
                        <p className="text-md italic text-gray-400">Senior Blockchain developer</p>
                        <p className="text-md italic text-gray-400">2020. 2 - 2020. 11</p>
                    </div>
                    <ul className="list-disc ml-5 mt-1">
                        <li className="text-sm">Built out farms, pools, dark pools, swap, stable swap, bridge.</li>
                        <li className="text-sm">Newly created v1 ALPHA page and increased TVL.</li>
                        <li className="text-sm">Implemented multi chain DEX platforms with ETH and BNB chain.</li>
                        <li className="text-sm">Led 2 newbie developers who learning about Blockchain.</li>
                    </ul>
                </div>
            </div>
            <div className="flex items-start">
                <div className="ml-10 mr-3 mt-3 w-full">
                    <p className="text-xl font-bold text-blue-600">Croxswap</p>
                    <div className="flex items-center justify-between">
                        <p className="text-md italic text-gray-400">Blockchain Full-stack developer</p>
                        <p className="text-md italic text-gray-400">2021. 4 - 2021. 11</p>
                    </div>
                    <ul className="list-disc ml-5 mt-1">
                        <li className="text-sm">Built out farms, pools, dual-farms(only live on croxswap), nextgen-pool, bridge, exchange.</li>
                        <li className="text-sm">Held out croxmas event containing 15 partner reward pools and grandpools. During this, we hit 2M total value just getting 700K more extra profit.</li>
                        <li className="text-sm">Implemented multi chain DEX platforms with BNB and HECO chain.</li>
                        <li className="text-sm">Built out ICO launchpad for RxSeedCoin on Croxswap.</li>
                    </ul>
                </div>
            </div>
            <div className="flex items-start">
                <div className="ml-10 mr-3 mt-3 w-full">
                    <p className="text-xl font-bold text-purple-600">CosmicVoyagersCollective</p>
                    <div className="flex items-center justify-between">
                        <p className="text-md italic text-gray-400">NFT Co-developer</p>
                        <p className="text-md italic text-gray-400">2022. 3</p>
                    </div>
                    <ul className="list-disc ml-5 mt-1">
                        <li className="text-sm">Wrote smart contract for NFT mint with arts.</li>
                        <li className="text-sm">Generate NFT metadata and deploy it to Pinata Cloud.</li>
                        <li className="text-sm">I have completed a cool Minting site that will attract users.</li>
                        <li className="text-sm">Finally deploy their NFT to Opensea with unrevealed image.</li>
                    </ul>
                </div>
            </div>
            <div className="flex items-start">
                <div className="ml-10 mr-3 mt-3 w-full">
                    <p className="text-xl font-bold text-stone-600">The Uncanny Country Club</p>
                    <div className="flex items-center justify-between">
                        <p className="text-md italic text-gray-400">NFT Co-developer</p>
                        <p className="text-md italic text-gray-400">2022. 5</p>
                    </div>
                    <ul className="list-disc ml-5 mt-1">
                        <li className="text-sm">Wrote smart contract for NFT mint with arts.</li>
                        <li className="text-sm">Generate NFT metadata and deploy it to Pinata Cloud.</li>
                        <li className="text-sm">I have completed a cool Minting site that will attract users.</li>
                        <li className="text-sm">Finally deploy their NFT to Opensea with unrevealed image.</li>
                    </ul>
                </div>
            </div>
            <div className="flex items-start">
                <div className="ml-10 mr-3 mt-3 w-full">
                    <p className="text-xl font-bold text-purple-600">Terraspaces</p>
                    <div className="flex items-center justify-between">
                        <p className="text-md italic text-gray-400">Smart Contract(Rust) developer</p>
                        <p className="text-md italic text-gray-400">2022. 5 - 2022. 6</p>
                    </div>
                    <ul className="list-disc ml-5 mt-1">
                        <li className="text-sm">Wrote Smart contract for NFT staking and farming with Rust.</li>
                        <li className="text-sm">Get the NEAR chain NFT informations using para API.</li>
                        <li className="text-sm">Updated and completed the Frontend using the Figma mockup design.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects