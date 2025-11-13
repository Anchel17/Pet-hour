import { Clock4Icon, PillIcon, RefreshCcwIcon } from "lucide-react";

function MedicacaoCard(){
    return (
        <div className="w-80 bg-white flex flex-col gap-3 items-center pb-5 rounded-xl shadow-lg">
            <div className="flex flex-row">
                <div className="flex content-center justify-center pt-2">
                    <PillIcon size={48} className="bg-purple-200 rounded-full px-2 py-2"/>
                </div>

                <div className="flex flex-col pt-5 gap-2 px-3">
                    <span className="font-bold text-xl">Glicopan</span>

                    <div className="flex gap-2 items-center">
                        <PillIcon size={20}/>
                        <span> Dosagem: 2 comprimidos</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Clock4Icon size={20}/>
                        <span>Horário: 23:99</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <RefreshCcwIcon size={20}/>
                        <span>Ciclo: 12 horas</span>
                    </div>
                </div>
            </div>
            
            <button className="bg-purple-500 px-2 py-2 w-50 text-white font-bold rounded-xl
             hover:cursor-pointer hover:scale-[1.03] duration-300">
                Dose aplicada
            </button>
        </div>
    )
}

export default MedicacaoCard;