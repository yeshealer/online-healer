import React from "react";
import { Icon } from '@iconify/react';

const Services = () => {
    return (
        <div className="rounded-xl p-4 relative h-[500px] md:h-full overflow-scroll overflow-x-hidden">
            <p className="italic text-md font-medium bg-orange-600 p-1 px-5 rounded-xl text-center flex items-center justify-center">
                <Icon icon="ep:service" className="mr-2" />
                My Services
            </p>
            <div className="p-3">
                <p className="italic text-orange-400 underline">Blockchain Development</p>
                <p className="p-2 text-sm">As the owner of a wealth of experience that cannot be ignored, we will fill your wallet with money in the field of blockchain development.</p>
                <p className="italic text-lime-400 underline">Web Development</p>
                <p className="p-2 text-sm">With many years of experience in website development, I can make your dream come true. Arbitrary languages and frameworks are available.</p>
                <p className="italic text-purple-400 underline">Web Design</p>
                <p className="p-2 text-sm">I can make your website more beautiful and smart with an extraordinary eye for design. Properly animation combinations will make your website even better.</p>
                <p className="italic text-pink-400 underline">Quick Support</p>
                <p className="p-2 text-sm">I can take over some parts of your website to make changes and show you how to do things quickly and accurately. In a word, part-time also available.</p>
            </div>
            <p className="italic text-md font-medium bg-orange-600 p-1 px-5 rounded-xl text-center flex items-center justify-center">
                <Icon icon="entypo:price-tag" className="mr-2" />
                Prices
            </p>
            <div className="p-3 grid grid-cols-2 gap-2">
                <div className="bg-[#ffffff15] p-3 rounded-xl">
                    <p className="text-amber-800 font-bold">Bronze</p>
                    <div className="flex items-end justify-center">
                        <p className="text-center italic text-2xl mr-1 text-amber-800">29$</p>
                        <p className="text-gray-400 italic">hour</p>
                    </div>
                    <ul className="list-disc ml-5 mt-2">
                        <li className="text-sm">Figma design</li>
                        <li className="text-sm">Frontend development</li>
                        <li className="text-sm">Responsive</li>
                        <li className="text-sm text-gray-500"><del>Web3 integration</del></li>
                        <li className="text-sm text-gray-500"><del>Smart contract</del></li>
                    </ul>
                </div>
                <div className="bg-[#ffffff15] p-3 rounded-xl">
                    <p className="text-gray-600 font-bold">Silver</p>
                    <div className="flex items-end justify-center">
                        <p className="text-center italic text-2xl mr-1 text-gray-600">39$</p>
                        <p className="text-gray-400 italic">hour</p>
                    </div>
                    <ul className="list-disc ml-5 mt-2">
                        <li className="text-sm">Figma design</li>
                        <li className="text-sm">Frontend development</li>
                        <li className="text-sm">Responsive</li>
                        <li className="text-sm">Web3 integration</li>
                        <li className="text-sm text-gray-500"><del>Smart contract</del></li>
                    </ul>
                </div>
                <div className="bg-[#ffffff15] p-3 rounded-xl">
                    <p className="text-amber-400 font-bold">Gold</p>
                    <div className="flex items-end justify-center">
                        <p className="text-center italic text-2xl mr-1 text-amber-400">59$</p>
                        <p className="text-gray-400 italic">hour</p>
                    </div>
                    <ul className="list-disc ml-5 mt-2">
                        <li className="text-sm">Figma design</li>
                        <li className="text-sm">Frontend development</li>
                        <li className="text-sm">Responsive</li>
                        <li className="text-sm">Web3 integration</li>
                        <li className="text-sm">Smart contract</li>
                        <li className="text-sm">Other support</li>
                    </ul>
                </div>
                <div className="bg-[#ffffff15] p-3 rounded-xl">
                    <p className="text-purple-500 font-bold">Special (NFT)</p>
                    <div className="flex items-end justify-center">
                        <p className="text-center italic text-2xl mr-1 text-purple-500">79$</p>
                        <p className="text-gray-400 italic">hour</p>
                    </div>
                    <ul className="list-disc ml-5 mt-2">
                        <li className="text-sm">Write Smart contract for minting</li>
                        <li className="text-sm">Generate metadata</li>
                        <li className="text-sm">Complete minting site</li>
                        <li className="text-sm">Deploying arts to your Pinata Cloud</li>
                        <li className="text-sm">Finally deploying to Opensea</li>
                        <li className="text-sm">Support you until sale finish</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Services