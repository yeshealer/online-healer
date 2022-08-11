import React, { useEffect } from "react";
import { Icon } from '@iconify/react';
import "@lottiefiles/lottie-player";
import './overview.scss'

const Overview = () => {

    useEffect(() => {
        const glowInTexts = document.querySelectorAll(".glowIn");
        glowInTexts.forEach(glowInText => {
            const letters = glowInText.textContent.split("");
            glowInText.textContent = "";
            letters.forEach((letter, i) => {
                let span = document.createElement("span");
                span.textContent = letter;
                span.style.animationDelay = `${i * 0.02}s`;
                glowInText.append(span);
            });
        });
    }, [])

    return (
        <div>
            <div className="bg-[#ffffff15] w-full h-40 shadow-2xl rounded-xl flex justify-around lg:justify-between items-center max-h-40">
                <img className="h-[150px] w-auto rounded-xl m-1" draggable={false} alt="avatar" src="/images/avatar.jpg" />
                <div className="h-[140px] overflow-hidden inline-flex flex-col justify-center items-center">
                    <div className="hidden md:inline-flex xl:hidden">
                        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded inline-flex items-center" onClick={() => window.open("https://raw.githubusercontent.com/yeshealer/online-healer/main/public/Adan-Cui.pdf", "_blank")}>
                            <Icon icon="akar-icons:cloud-download" width="20" height="20" />
                            <span className="ml-1">Download CV</span>
                        </button>
                        <button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded inline-flex items-center ml-2" onClick={() => window.open("https://drive.google.com/file/d/1bMJuBc1BcpSNMw2LN2r2-2AEHCeuYvPo/view", "_blank")}>
                            <Icon icon="el:eye-open" width="20" height="20" />
                            <span className="ml-1">Look</span>
                        </button>
                    </div>
                    <p className="hidden md:block xl:hidden mx-3 overflow-y-auto overflow-x-hidden glowIn text-lime-50">
                        I am an experienced & talented & enthusiast developer interested in building usable, useful, well- constructed Blockchain & NFT projects. Proficient at performing well as working in a group or independently in a fast- paced setting. Deep understanding of distributed ledger, blockchain safety, blockchain design principles, and various blockchain protocols and environments.
                        Interested in continuation of learning and cooperation with excellent people.
                    </p>
                </div>
                <div className="col-span-2 p-3 px-1 xl:pl-6">
                    <div className="flex flex-col xl:flex-row justify-between items-center">
                        <div className="flex flex-col items-center xl:items-start">
                            <img className="max-h-[70px] -my-2 -ml-5 w-auto rounded-xl" draggable={false} alt="name" src="/images/name.png" />
                            <p className="italic text-center text-gray-400 glowIn">Senior Frontend & Blockchain Engineer</p>
                        </div>
                        <div className="hidden xl:inline-flex">
                            <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded inline-flex items-center" onClick={() => window.open("https://raw.githubusercontent.com/yeshealer/online-healer/main/public/Adan-Cui.pdf", "_blank")}>
                                <Icon icon="akar-icons:cloud-download" width="20" height="20" />
                                <span className="ml-1">Download CV</span>
                            </button>
                            <button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded inline-flex items-center ml-2" onClick={() => window.open("https://drive.google.com/file/d/1bMJuBc1BcpSNMw2LN2r2-2AEHCeuYvPo/view", "_blank")}>
                                <Icon icon="el:eye-open" width="20" height="20" />
                                <span className="ml-1">Look</span>
                            </button>
                        </div>
                        <div className="flex items-center">
                            <a href="https://www.linkedin.com/in/yeshealer">
                                <lottie-player
                                    autoplay
                                    loop
                                    src="https://assets2.lottiefiles.com/private_files/lf30_tgzwnxcf.json"
                                    style={{ height: '35px', width: '35px' }}
                                />
                            </a>
                            <a href="https://t.me/yeshealer">
                                <lottie-player
                                    autoplay
                                    loop
                                    src="https://assets8.lottiefiles.com/packages/lf20_pqnhnube.json"
                                    style={{ height: '45px', width: '45px' }}
                                />
                            </a>
                            <a href="https://join.skype.com/invite/BkdGgxqSeZxJ">
                                <lottie-player
                                    autoplay
                                    loop
                                    src="https://assets8.lottiefiles.com/packages/lf20_ucsyy44s.json"
                                    style={{ height: '40px', width: '40px' }}
                                />
                            </a>
                            <a href="mailto:yeshealer@gmail.com">
                                <lottie-player
                                    autoplay
                                    loop
                                    src="https://assets5.lottiefiles.com/packages/lf20_tszzqucf.json"
                                    style={{ height: '45px', width: '45px' }}
                                />
                            </a>
                            <a href="https://github.com/yeshealer">
                                <Icon icon="bytesize:github" width="35" height="35" />
                            </a>
                        </div>
                    </div>
                    <p className="mt-2 hidden xl:block glowIn text-lime-50">I am an experienced & talented & enthusiast developer interested in building usable, useful, well- constructed Blockchain & NFT projects. Proficient at performing well as working in a group or independently in a fast- paced setting. Deep understanding of distributed ledger, blockchain safety, blockchain design principles, and various blockchain protocols and environments.
                        Interested in continuation of learning and cooperation with excellent people.</p>
                </div>
            </div>
            <div className="inline-flex flex-col items-end md:hidden mt-2 bg-[#ffffff15] rounded-xl p-3">
                <p className="glowIn text-lime-50">I am an experienced & talented & enthusiast developer interested in building usable, useful, well- constructed Blockchain & NFT projects. Proficient at performing well as working in a group or independently in a fast- paced setting. Deep understanding of distributed ledger, blockchain safety, blockchain design principles, and various blockchain protocols and environments.
                    Interested in continuation of learning and cooperation with excellent people.</p>
                <div className="inline-flex md:hidden mt-1">
                    <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded inline-flex items-center" onClick={() => window.open("https://raw.githubusercontent.com/yeshealer/online-healer/main/public/Adan-Cui.pdf", "_blank")}>
                        <Icon icon="akar-icons:cloud-download" width="20" height="20" />
                        <span className="ml-1 text-lime-50">Download CV</span>
                    </button>
                    <button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded inline-flex items-center ml-2" onClick={() => window.open("https://drive.google.com/file/d/1bMJuBc1BcpSNMw2LN2r2-2AEHCeuYvPo/view", "_blank")}>
                        <Icon icon="el:eye-open" width="20" height="20" />
                        <span className="ml-1 text-lime-50">Look</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Overview