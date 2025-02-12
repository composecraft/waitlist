import {Spotlight} from "./components/ui/spotlight-new.tsx";
import playgroundDevelopped from "./assets/playground-developped.png";
import logo from "./assets/logo.svg"
import Join from "./components/join.tsx";

export default function First(){
    return(
        <>
            <nav className="text-white max-w-7xl w-full flex flex-row justify-between items-center mb-20 mt-5 px-10">
                <img src={logo} className="w-40" />
                <div className="flex flex-row gap-5 justify-center items-center">
                    <a href="mailto:contact@entrecompetents.fr">contact</a>
                    <a href="/#join" className="text-white bg-gradient-to-r from-slate-500 to-slate-700 rounded-lg py-2 px-5">
                        Join waitlist !
                    </a>
                </div>
            </nav>
            <Spotlight/>
            <div className="flex flex-col p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Deploy and manage your server easier than ever
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    Do not waste time learning docker, kubernetes or whatever, deploy apps now, for free.
                </p>
            </div>
            <span id="join"></span>
            <Join />
            <div className="w-1/2 shadow-lg rounded-md overflow-hidden mx-auto"
                 style={{boxShadow: '0 4px 6px rgba(255, 255, 255, 0.5)'}}>
                <img
                    src={playgroundDevelopped}
                    alt="dummy image"
                    className="object-contain"
                />
            </div>
        </>
    )
}