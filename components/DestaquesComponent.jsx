import { STARFILD } from "@/config/constant"
import { RED_DEAD_2 } from "@/config/constant"

export default function DestaquesComponent() {

    return (
        <>

            <div class="bg-[#1F1E1E] w-full h-auto relative">
                       
                        
                <div>
                    
                    <div class='relative' style={{zIndex:9999}}>
                        <img class='w-3/5 rounded-tr-full' src="Rectangle45.png" alt="" />
                        <h1 id="fontediferente" style={{ fontSize: "84px"}} class='absolute top-96 left-20'>Redenção da<br /> morte vermelha</h1>
                        <p style={{ fontSize: "28px" }} class='absolute bottom-52 left-20 w-2/4'>
                            {RED_DEAD_2}
                        </p>
                        <button style={{ fontSize: "24px" }} class='px-8 py-2 rounded-3xl absolute bottom-20 left-52 bg-[#46009F]'>COMPRE JÁ</button>
                    </div>
                        

                    <div class='relative' style={{zIndex:999}}>
                        <img class='w-3/5 rounded-br-full' src="Rectangle26.png" alt="" />
                        <h1 style={{ fontSize: "84px", fontFamily: "'Quantico',sans-serif" }} class='absolute top-44 left-20'>Escudo estelar</h1>
                        <p style={{ fontSize: "28px" }} class='absolute top-80 left-20 w-1/4'>
                         {STARFILD}
                        </p>
                        <button style={{ fontSize: "24px" }} class='px-8 py-2 rounded-3xl absolute bottom-96 left-52 bg-[#46009F]'>COMPRE JÁ</button>
                    </div>
                    <img class='w-4/5 absolute bottom-3/4 right-0 ' src="Vector19.png" alt="" style={{zIndex:0}} />
                    <img class='w-4/5 absolute bottom-2/4 right-0' src="Vector19.png" alt="" />
                    <img class='w-4/5 absolute bottom-1/4 right-0' src="Vector19.png" alt="" />


                </div>
            </div>

        </>
    )
}