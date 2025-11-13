import { PlusIcon, UploadIcon } from "lucide-react";
import Header from "../components/Header";
import PetCard from "../components/PetCard";

function Home(){
    return (
        <div>
            <Header/>
            <div className="w-full px-30 bg-gray-100 min-h-screen">
                <div className="flex justify-between items-center">
                    <div className=" flex flex-col gap-2 py-5">
                        <h1 className="text-3xl font-bold">Meus Pets</h1>
                        <span className="">
                            2 pets cadastrados
                        </span>
                    </div>

                    <div className="flex gap-3">
                        <button className="bg-purple-950 text-white flex items-center 
                        justify-center py-3 px-3 rounded-xl gap-2 font-bold cursor-pointer 
                        hover:shadow-lg hover:shadow-purple-300 hover:scale-[1.03] duration-300">
                            <UploadIcon/>
                            <span className="">Carregar pets</span>
                        </button>
                        
                        <button className="bg-purple-500 text-white flex items-center 
                        justify-center py-3 px-3 rounded-xl gap-2 font-bold cursor-pointer 
                        hover:shadow-lg hover:shadow-purple-300 hover:scale-[1.03] duration-300">
                            <PlusIcon/>
                            <span className="">Adicionar pet</span>
                        </button>
                    </div>
                </div>

                <div className="w-full flex flex-wrap gap-x-7 gap-y-5 py-5">
                    <PetCard/>
                </div>
            </div>
        </div>
    )
}

export default Home;