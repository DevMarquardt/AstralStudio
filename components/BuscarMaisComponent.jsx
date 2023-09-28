export default function BuscarMaisComponent(){
    return(
        <>

            <div className="h-[90vh] bg-[#1F1E1E] font-semibold text-lg">
                <h1 className="flex justify-center pt-10 text-white text-6xl ">BUSCAR POR MAIS JOGOS</h1>
                <div className="flex justify-around pt-20">
                    <div className="pt-10 cursor-pointer"><img src="papersPlease.png" alt="" /></div>
                    <div>
                        <div className=" cursor-pointer"><img className="h-[25rem]"  src="reddead.png" alt="" /></div>
                        <div>
                            <p className="py-3 cursor-pointer">
                                Redenção da morte vermelha II
                            </p>
                            <div className="flex flex-row gap-4">
                                <img className="h-8" src="xbox.png" alt="" />
                                <img className="h-8" src="ps.png" alt="" />
                                <img className="h-8" src="windows.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" cursor-pointer"><img className="h-[25rem]" src="ori.png" alt="" /></div>
                        <div>
                        <p className="py-3 cursor-pointer">
                                Ori na floresta triste
                            </p>
                            <div className="flex flex-row gap-4">
                                <img className="h-8" src="xbox.png" alt="" />
                                <img className="h-8" src="windows.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" cursor-pointer"><img className="h-[25rem]" src="starfield.png" alt="" /></div>
                        <div>
                        <p className="py-3 cursor-pointer">
                                Escudo estelar
                            </p>
                            <div className="flex flex-row gap-4">
                                <img className="h-8" src="xbox.png" alt="" />
                                <img className="h-8" src="windows.png" alt="" />
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <div className=" cursor-pointer"><img className="h-[25rem]" src="tlou.png" alt="" /></div>
                        <div>
                        <p className="py-3 cursor-pointer">
                                A volta dos que não foram
                            </p>
                            <div className="flex flex-row gap-4">
                                <img className="h-8" src="ps.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="pt-10 cursor-pointer"><img src="inside.png" alt="" /></div>
                </div>
            </div>

        </>
    )
}