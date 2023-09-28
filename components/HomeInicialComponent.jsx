import { useState } from "react";

export default function HomeInicialComponent() {
    let vetor = ["https://assetsio.reedpopcdn.com/user-1007518-originalxoriginal-18-06-58.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp","https://images3.alphacoders.com/109/thumb-1920-1090801.jpg"
    , "https://i.pinimg.com/originals/2c/8e/7c/2c8e7c856120a9e4687caad46bf6ec49.jpg", "https://i.pinimg.com/originals/60/07/a5/6007a516fddb512caa8a67597c675163.jpg",
    "https://images8.alphacoders.com/868/868259.png"]
    let vetorTexto1 = ["O BOM DA GUERRA","A VOLTA DOS QUE NÃO FORAM 2", "The Witcher 3: Wild Hunt", "Red Dead Redemption 2", "The Legend of Zelda: Breath of the Wild"]
    let vetorTexto2 = [`Seja um verdadeiro Deus da guerra que almeja apenas pela paz, porém, durante sua jornada é assombrado por seu passado`,"Em um mundo pós-apocalíptico devastado por um fungo que transforma humanos em criaturas agressivas, Ellie embarca em uma jornada de vingança, enfrentando dilemas morais e as terríveis consequências de suas ações."
    ,"O caçador de monstros Geralt de Rívia busca sua filha adotiva, enquanto enfrenta criaturas sobrenaturais e dilemas morais em um mundo medieval.", "No final do Velho Oeste, Arthur Morgan, um fora da lei, luta pela sobrevivência com sua gangue enquanto enfrenta a decadência do mundo dos foras da lei.", 
    "Um herói chamado Link explora um vasto e aberto mundo de fantasia, combatendo inimigos e desvendando os mistérios de um reino arruinado." ]
    
    const [index, setIndex] = useState(0);
    const [image, setImage] = useState(vetor[index])
    const [text1, setText1] = useState(vetorTexto1[index])
    const [text2, setText2] = useState(vetorTexto2[index])
    

    function moveCarrosel(num) {
        if(index>0 && index<4){
            if(num>0){
                setIndex(index+1)
                
            }else{
                setIndex(index-1)
                
            }
        }

        else if(index==0){
            if(num>0){
                
                setIndex(index+1)
            }else{
                setIndex(4)
            }
        }

        else if(index==4){
            if(num>0){
                setIndex(0)
            }else{
                
                setIndex(index-1)
            }
        }
        console.log(index)
        setImage(vetor[index])
        setText1(vetorTexto1[index])
        setText2(vetorTexto2[index])

        pintarBolas();
    }

    function pintarBolas(){
        const bolas = document.querySelectorAll(".bolas")
        bolas.forEach(element => {
            if(bolas[index] == element){
                element.classList.add("bg-[#46009F]")
                element.classList.remove("bg-white")
            }
            if(bolas[index] != element){
                element.classList.remove("bg-[#46009F]")
                element.classList.add("bg-white")
            }
        });
    }




    return (
        <>
            
            <div className="h-[95vh] w-full bg-no-repeat bg-cover" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${image})` }} >
                <div className="flex h-full items-center px-12">
                    <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg" className="duration-200 hover:skew-y-[-8deg] cursor-pointer" onClick={() => moveCarrosel(-1)}>
                        <path d="M49.875 55.125V7.87502C49.8735 7.39664 49.7415 6.92772 49.4934 6.51875C49.2452 6.10977 48.8902 5.77622 48.4665 5.554C48.0429 5.33179 47.5667 5.22932 47.0891 5.25763C46.6116 5.28593 46.1508 5.44394 45.7563 5.71465L11.6313 29.3396C10.2165 30.3188 10.2165 32.676 11.6313 33.6578L45.7563 57.2828C46.1499 57.5562 46.611 57.7166 47.0893 57.7464C47.5677 57.7763 48.045 57.6745 48.4696 57.452C48.8941 57.2296 49.2496 56.8951 49.4974 56.4849C49.7451 56.0746 49.8757 55.6043 49.875 55.125Z" fill="#F4ECFF" fill-opacity="0.6" />
                    </svg>

                    <div className="h-full w-full flex flex-col justify-center pt-[16%]">
                        <div className="text-center w-full h-full flex flex-col items-center">
                            <h1 className="font-bold text-7xl">{text1}</h1>
                            <h1 className=" text-2xl pt-10 w-[50%]">
                                {text2}
                            </h1>

                            <div className="pt-[8.5%] w-full h-[15rem] flex justify-center items-center gap-[5rem]">
                                <button className="w-[16rem] h-[4.5rem] bg-[#46009F] rounded-[1.5rem] text-xl duration-300 font-semibold hover:w-[16.5rem] hover:h-[5rem]">COMPRE JÁ</button>
                                <button className="w-[16rem] h-[4.5rem] bg-[#46009F] rounded-[1.5rem] text-xl duration-300 font-semibold hover:w-[16.5rem] hover:h-[5rem]">ASSISTA O TRAILER</button>
                            </div>
                        </div>
                        <div className="w-full flex justify-center gap-4 pb-16">
                            <div className="w-5 h-5 bg-[#46009F] rounded-full bolas"></div>
                            <div className="w-5 h-5 bg-white rounded-full bolas"></div>
                            <div className="w-5 h-5 bg-white rounded-full bolas"></div>
                            <div className="w-5 h-5 bg-white rounded-full bolas"></div>
                            <div className="w-5 h-5 bg-white rounded-full bolas"></div>
                        </div>
                    </div>
                    <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg" className="duration-200 hover:skew-y-[8deg] cursor-pointer" onClick={() => moveCarrosel(1)}>
                        <path d="M13.125 7.87498L13.125 55.125C13.1265 55.6034 13.2585 56.0723 13.5066 56.4813C13.7548 56.8902 14.1098 57.2238 14.5335 57.446C14.9571 57.6682 15.4333 57.7707 15.9109 57.7424C16.3884 57.7141 16.8492 57.5561 17.2437 57.2854L51.3687 33.6604C52.7835 32.6812 52.7835 30.324 51.3687 29.3422L17.2437 5.71723C16.8501 5.44377 16.389 5.28341 15.9107 5.25356C15.4323 5.22372 14.955 5.32554 14.5304 5.54795C14.1059 5.77037 13.7504 6.10488 13.5026 6.51514C13.2549 6.92539 13.1243 7.39571 13.125 7.87498Z" fill="#F4ECFF" fill-opacity="0.6" />
                    </svg>
                </div>
            </div>
        </>
    )
}
