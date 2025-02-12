import {FeaturesGrid} from "./components/ui/feature-grid.tsx";
import {Tabs} from "./components/ui/tabs.tsx";
import playgroundDevelopped from "./assets/playground-developped.png";
import logsimg from "./assets/Logs.png";
import hostimg from "./assets/Host.png";
import uptime from "./assets/Uptime.png";
import dns from "./assets/dns.gif";
import {
    IconArrowsUpDown,
    IconBrandDocker,
    IconBrandSpeedtest, IconDatabaseExport, IconDragDrop, IconFileSmile, IconHomeShield,
    IconHourglass,
    IconLogs,
    IconTerminal2,
    IconWorldShare
} from "@tabler/icons-react";
import { motion } from "motion/react";
import Join from "./components/join.tsx";

export default function Second(){

    const tabs = [
        {
            title: "Deploy Apps",
            value: "deploy",
            content: (
                <div className="w-full flex flex-col justify-between overflow-hidden relative h-full rounded-2xl p-10 pb-0 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Deploy apps with diagram like UI</p>
                    <img
                        src={playgroundDevelopped}
                        alt="dummy image"
                        className="object-contain rounded-tl-md rounded-tr-md"
                    />
                </div>
            ),
        },
        {
            title: "Manage Logs",
            value: "logs",
            content: (
                <div className="w-full flex flex-col justify-between overflow-hidden relative h-full rounded-2xl p-10 pb-0 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Keep your logs and watch them</p>
                    <img
                        src={logsimg}
                        alt="dummy image"
                        className="object-contain rounded-tl-md rounded-tr-md"
                    />
                </div>
            ),
        },
        {
            title: "Host performance",
            value: "host",
            content: (
                <div
                    className="w-full flex flex-col justify-between overflow-hidden relative h-full rounded-2xl p-10 pb-0 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Monitor your host performances</p>
                    <img
                        src={hostimg}
                        alt="dummy image"
                        className="object-contain rounded-tl-md rounded-tr-md"
                    />
                </div>
            ),
        },
        {
            title: "Uptime monitoring",
            value: "uptime",
            content: (
                <div
                    className="w-full flex flex-col justify-between overflow-hidden relative h-full rounded-2xl p-10 pb-0 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Uptime included</p>
                    <img
                        src={uptime}
                        alt="dummy image"
                        className="object-contain rounded-tl-md rounded-tr-md"
                    />
                </div>

            ),
        },
        {
            title: "Auto set DNS records",
            value: "dns",
            content: (
                <div
                    className="w-full flex flex-col justify-between overflow-hidden relative h-full rounded-2xl p-10 pb-0 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>No more need to manage DNS record yourself</p>
                    <img
                        src={dns}
                        alt="dummy image"
                        className="object-contain rounded-tl-md rounded-tr-md bg-white"
                    />
                </div>
            ),
        }
    ]

    const features = [
        {
            title: "A visual easy UI",
            description:
                "The fanciest UI you can find, that is node based to manage your server",
            icon: <IconDragDrop />,
        },
        {
            title: "Import your own docker-compose",
            description:
                "You can import you own docker-compose.yaml files",
            icon: <IconFileSmile />,
        },
        {
            title: "Easy to install",
            description:
                "Install it with only one cmd line from any linux",
            icon: <IconTerminal2 />,
        },
        {
            title: "Auto DNS records",
            description:
                "Do not waste your time messing with dns records. We take care of everything",
            icon: <IconWorldShare />,
        },
        {
            title: "Gather all logs",
            description: "Just Stdout we keep care of your logs",
            icon: <IconLogs />,
        },
        {
            title: "Monitor host performances",
            description: "We monitor the hardware, so you can watch for your performances",
            icon: <IconBrandSpeedtest />,
        },
        {
            title: "Uptime Monitoring",
            description: "Keep track and be notified on downtime",
            icon: <IconHourglass />,
        },
        {
            title: "Database Backups",
            description: "Easy backup your databases",
            icon: <IconDatabaseExport />,
        },
        {
            title: "Based on docker",
            description: "We base as much things as possible things on docker natives features",
            icon: <IconBrandDocker />,
        },
        {
            title: "Auto Scaling",
            description: "We improve docker swarm to allow auto-scaling",
            icon: <IconArrowsUpDown />,
        },
        {
            title: "Keep your data secure",
            description: "You self-hots it and it's 100% open source",
            icon: <IconHomeShield />,
        }
    ]

    return(
        <>
            <span className="mt-20">
                <FeaturesGrid features={features} />
            </span>
            <Join />
            <motion.div className="flex mt-20"
                        initial={{ opacity: 0, y: 1000 }}
                        animate={{ y: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{once: false}}
            >
                <div
                    className="h-[30rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start mb-40 md:mb-40">
                    <Tabs tabs={tabs}/>
                </div>
            </motion.div></>
    )
}