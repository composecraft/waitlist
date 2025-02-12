import First from "./first.tsx";
import { Suspense, lazy } from "react";
import {Toaster} from "react-hot-toast";

const Second = lazy(() => import("./second.tsx"));

export default function App() {

    return(
        <>
            <Toaster/>
            <div
                className="w-full flex flex-col md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
                <First />
                <Suspense fallback={<div>Loading...</div>}>
                    <Second />
                </Suspense>
            </div>
        </>
    )
}