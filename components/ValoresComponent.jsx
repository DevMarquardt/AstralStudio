export default function ValoresComponent() {
    return (
        <>
            <div className="bg-[#1F1E1E] text-[#F4ECFF]">
                <div className='flex justify-center pt-28 w-[545] h-[87] z-1 relative top-[39rem]' style={{ zIndex: 9999 }}>
                    <h1 className='flex text-[64px]'>SOBRE <p className="px-[24px]">A</p> ASTRAL</h1>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="2000" height="1008" viewBox="0 0 1900 550" fill="none" className="top-[-rem] z-0" style={{ zIndex: 0 }}>
                    <path d="M1811 213.311L-1106 1008L-942.896 939.551L-864.752 899.399L-787.133 858.865L-708.466 809.153L-629.798 757.147L-593.086 730.379L-557.424 703.612L-498.685 654.665L-423.164 586.598L1811 0V213.311Z" fill="url(#paint0_linear_44_177)" fill-opacity="0.6" />
                    <defs>
                        <linearGradient id="paint0_linear_44_177" x1="352.5" y1="0" x2="352.5" y2="1008" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#46009F" />
                            <stop offset="1" stop-color="#46009F" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="flex justify-center gap-28 pt-28 relative z-1 top-[-21rem] " style={{ zIndex: 9999 }}>
                    <div className="w-[364px] h-[525px] bg-[#353535] rounded-[30px] ">
                        <div className="flex flex-col items-center w-full">
                            <h1 className=" text-4xl pt-8">Missão</h1>
                            <div className="pt-8 text-2xl p-10">
                                <p className="text-center ">Nossa missão é levar aos jogadores aventuras épicas, que inspiram, cativam e transportam os jogadores para novos universos totalmente imersivos. Com paixão, desenvolvemos jogos que residem em mundos fascinantes e nos desafiam a nos tornarmos cada dia melhores.</p>
                            </div>
                        </div>

                    </div>
                    <div className="flex w-[364px] h-[525px] bg-[#353535] rounded-[30px] ">
                        <div className="flex flex-col items-center w-full">
                            <h1 className=" text-4xl pt-8">Visão</h1>
                            <div className="pt-8 text-2xl p-7">
                                <p className="text-center ">Trazer experiências novas e ideias diferentes das quais já estão no mercado, arriscando tornar a Astral Studios a maior produtora de jogos, além de eternizar os jogos na vida das pessoas e na história proporcionando-lhes momentos inesquecíveis e histórias que ressoam muito além do jogo.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-[364px] h-[525px] bg-[#353535] rounded-[30px]">
                        <div className="flex flex-col items-center w-full">
                            <h1 className=" text-4xl pt-8">Valores</h1>
                            <div className="pt-8 text-2xl p-10">
                                <li>Diversidade e inclusão</li>
                                <li>Comunidade</li>
                                <li>Sustentabilidade</li>
                                <li>Inovação</li>
                                <li>Qualidade</li>
                                <li>Paixão</li>
                                <li>Ética</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}