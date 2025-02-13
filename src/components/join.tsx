import toast from "react-hot-toast";
import {useState} from "react";
import posthog from "posthog-js";
import {useFeatureFlagVariantKey} from "posthog-js/react";
import { clsx } from "clsx";

export default function Join(){

    const [email, setEmail] = useState("")
    const variant = useFeatureFlagVariantKey('slate-blue-join-button')

    async function req(){
        const resp = await fetch(`https://n8n.sovre.fr/webhook/7b739d30-dfad-485a-a62a-a86e982e5f39?email=${email}`)
        if(resp.ok){
            posthog.capture("joined",{
                email: email
            })
            return "ok"
        }
        throw Error()
    }

    function handleJoin(){
        toast.promise(
            req(),
            {
                loading: 'Joining...',
                success: <b>Joined !</b>,
                error: <b>Could not join</b>,
            }
        ).then(()=>{setEmail("")})
    }

    return (
        <div className="flex flex-col md:flex-row w-full items-center justify-center gap-2 py-10 pb-20">
                    <span className={clsx(
                        "border-2 rounded-lg py-2 px-5 flex w-xs",
                                variant === "control" ? "border-zinc-500" : "border-blue-500"
                        )}>
                        <input value={email} onChange={(e)=>(setEmail(e.target.value))} placeholder="your@email.com" type="text" className="outline-0 text-white w-full"/>
                    </span>
            <button onClick={()=>{handleJoin()}} className={clsx(
                "text-white bg-gradient-to-r rounded-lg py-2 px-5 transition-all hover:scale-105",
                variant === "control" ? "from-slate-500 to-slate-700" : "from-blue-500 to-blue-700"
            )}
                >
                Join waitlist !
            </button>
        </div>
    )
}