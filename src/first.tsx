import {Spotlight} from "./components/ui/spotlight-new.tsx";
import playgroundDevelopped from "./assets/playground-developped.png";
import logo from "./assets/logo.svg"
import Join from "./components/join.tsx";
import {clsx} from "clsx";
import {useFeatureFlagVariantKey} from "posthog-js/react";

export default function First(){

    const variant = useFeatureFlagVariantKey('slate-blue-join-button')
    const txtVariant = useFeatureFlagVariantKey('heroe-title-content')

    function getText() {
        switch (txtVariant) {
            case "control":
                return "Deploy apps and manage your server easier than ever";
            case "option1":
                return "Deploy Apps Without Worrying About Docker or Kubernetes—Just Click & Go";
            case "option2":
                return "Your time is valuable. Deploy your apps the smart way – simple, fast, and open-source"
            default:
                return "Deploy apps and manage your server easier than ever";
        }
    }

    return(
        <>
            <nav className="text-white max-w-7xl w-full flex flex-row justify-between items-center mb-20 mt-5 px-10">
                <img alt="logo" src={logo} className="w-40 hidden md:flex" />
                <div className="flex flex-row gap-5 justify-between w-full md:justify-center md:w-fit items-center">
                    <a href="https://github.com/composecraft/next">Github</a>
                    <a href="mailto:contact@entrecompetents.fr">contact</a>
                    <a href="/#join" className={clsx(
                        "text-white bg-gradient-to-r rounded-lg py-2 px-5 transition-all hover:scale-105",
                        variant === "control" ? "from-slate-500 to-slate-700" : "from-blue-500 to-blue-700"
                    )}>
                        Join waitlist !
                    </a>
                </div>
            </nav>
            <Spotlight/>
            <div className="flex flex-col p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    {getText()}
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    Do not waste time learning docker, kubernetes or whatever, deploy apps now, for free. It's Open source.
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