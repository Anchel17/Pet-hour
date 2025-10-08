function Header(){
    return (
        <div className="w-full px-24 py-5 flex items-center justify-between shadow-lg">
            <div className="flex gap-3">
                <img src="/pet-hour-icon.svg" alt="Pet Hour icon" className="w-8"/>
                <h1 className="text-2xl">Pet Hour</h1>
            </div>

            <div className="flex">
                <button className="bg-purple-500 px-4 py-2 rounded-xl cursor-pointer">
                    <span className="text-white">Fazer login com google</span>
                </button>
            </div>
        </div>
    )
}

export default Header;