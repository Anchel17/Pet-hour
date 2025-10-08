import { DogIcon } from "lucide-react";

function PetCard(){
    return (
        <div className="w-72 bg-white pb-5 rounded-xl shadow-lg cursor-pointer hover:scale-[1.03] duration-300">
            <div className="bg-gray-200 rounded-t-xl py-20 flex content-center justify-center">
                <DogIcon size={64}/>
            </div>

            <div className="flex flex-col pt-5 gap-1 px-3">
                <span className="font-bold text-xl">Bela Varela</span>
                <span>Cachorro - 10 anos</span>
                <span>Vira-lata</span>
            </div>
        </div>
    )
}

export default PetCard;