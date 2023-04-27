import { ReactNode } from "react"

interface Props {
    headerTitle?: string,
    children?: ReactNode
}

export default function Box(props: Props) {
    const shouldDisplayHeader = !!props.headerTitle
    
    return (
        <>
        <div className="flex flex-col h-96">
            { shouldDisplayHeader &&
                <div className="h-24 bg-zinc-200 rounded-t-3xl flex justify-center items-center">
                    <span className="font-bold text-xl">{props.headerTitle}</span>
                </div>
            }
            <div className="bg-zinc-100 rounded-b-3xl overflow-auto h-full">
                {props.children}
            </div>
        </div>
        </>
    )
}