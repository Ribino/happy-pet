import { ReactNode } from "react"

interface Props {
    headerTitle?: string,
    children?: ReactNode
}

export default function Box(props: Props) {
    const shouldDisplayHeader = !!props.headerTitle
    
    return (
        <>
            <div className="bg-zinc-100 rounded-3xl overflow-hidden">
                { shouldDisplayHeader &&
                <div hidden={true} className="h-1/5 bg-zinc-200 flex justify-center items-center">
                    <span className="font-bold text-xl">{props.headerTitle}</span>
                </div>
                }
                <div className="flex justify-center items-center">
                    {props.children}
                </div>
            </div>
        </>
    )
}