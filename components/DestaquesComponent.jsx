import { STARFILD } from "@/config/constant"
import { RED_DEAD_2 } from "@/config/constant"

export default function DestaquesComponent() {

    return (
        <>

            <div class="bg-[#1F1E1E] w-full h-auto ">
                <div>
                    
                        <img class='w-3/4 absolute right-0' src="Vector19.png" alt="" />
                    <div class='relative'>
                        <img class='w-3/5 rounded-tr-full' src="Rectangle45.png" alt="" />
                        <h1 style={{ fontSize: "64px", fontFamily: "'Quantico',sans-serif" }} class='absolute top-72 left-20'>Redenção da<br /> morte vermelha</h1>
                        <p style={{ fontSize: "20px" }} class='absolute bottom-52 left-20 w-1/4'>
                            {RED_DEAD_2}
                        </p>
                        <button style={{ fontSize: "20px" }} class='px-8 py-2 rounded-3xl absolute bottom-20 left-52 bg-[#46009F]'>COMPRE JÁ</button>

                    </div>
                    <img src="../public/Vector18.png" alt="" />
                        <img class='w-3/4 absolute right-0' src="Vector19.png" alt="" />

                    <div class='relative'>
                        <img class='w-3/5 rounded-br-full w-auto' src="Rectangle26.png" alt="" />
                        <h1 style={{ fontSize: "64px", fontFamily: "'Quantico',sans-serif" }} class='absolute top-20 left-20'>Escudo estelar</h1>
                        <p style={{ fontSize: "20px" }} class='absolute top-56 left-20 w-1/4'>
                         {STARFILD}
                        </p>
                        <button style={{ fontSize: "20px" }} class='px-8 py-2 rounded-3xl absolute top-96 left-52 bg-[#46009F]'>COMPRE JÁ</button>
                    </div>
                </div>
            </div>

        </>
    )
}