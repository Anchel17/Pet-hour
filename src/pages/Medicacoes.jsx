import { ArrowLeftIcon, PlusIcon } from "lucide-react";
import Header from "../components/Header";
import MedicacaoCard from "../components/MedicacaoCard";
import { useNavigate } from "react-router-dom";

function Medicacoes(){
    const navigate = useNavigate();

    function voltarParaHome(){
        navigate('/');
    }

    return (
        <div>
            <Header/>
            <div className="w-full px-30 bg-gray-100 min-h-screen">
                <button className="flex justify-center items-center gap-2 font-semibold bg-purple-950 text-white 
                px-2 py-2 rounded-xl mt-5 hover:cursor-pointer" onClick={voltarParaHome}>
                    <ArrowLeftIcon/>
                    <span>Voltar</span>
                </button>
                <div className="flex justify-between items-center">
                    <div className=" flex flex-col gap-2 py-5">
                        <h1 className="text-3xl font-bold">Bela Varela</h1>
                        <span className="">
                            2 medicações
                        </span>
                    </div>

                    
                    <button className="bg-purple-500 text-white flex items-center 
                    justify-center py-3 px-3 rounded-xl gap-2 font-bold cursor-pointer 
                    hover:shadow-lg hover:shadow-purple-300 hover:scale-[1.03] duration-300">
                        <PlusIcon/>
                        <span className="">Adicionar medicação</span>
                    </button>
                </div>

                <div className="w-full flex flex-wrap justify-center gap-x-7 gap-y-5 py-5">
                    <MedicacaoCard/>
                    <MedicacaoCard/>
                    <MedicacaoCard/>
                    <MedicacaoCard/>
                </div>
            </div>
        </div>
    )
}

export default Medicacoes;