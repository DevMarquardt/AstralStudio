export default function FooterComponent() {
    return (
        <>
            <div className="h-[247px] bg-[#292828] overflow-hidden">
                <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start" }}>
                    <div id="imagem-logo" style={{ alignSelf: "flex-start" }}>
                        <img src="logoTela.png" className="h-[90px] relative top-[1rem] pl-[2rem]" />
                        <div className="w-full relative top-[-3rem] pl-[90rem]">
                            <h3>Suporte</h3>
                        </div>
                        <div className="w-full relative top-[-4.5rem] pl-[97rem]">
                            <h3>Loja</h3>
                        </div>
                        <div className="w-full relative top-[-6rem] pl-[102rem]">
                            <h3>Colaborador</h3>
                        </div>
                        <div id="redes" className="w-[88vw] relative top-[-1rem] pl-[12rem] flex justify-center">
                            <div>
                                <img src="redes.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[102px] bg-[#380B71] text-white text-center flex justify-center items-center">
                © Astral Studio. Todos os direitos reservados
            </div>
        </>
    );
}
