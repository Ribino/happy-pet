import { ReactNode } from "react"

interface Props {
    headerTitle?: string
    emptyMessage?: string
    children?: ReactNode
}

export default function Box(props: Props) {
    const shouldDisplayHeader = !!props.headerTitle
    const emptyInfo = !props.children 
    return (
        <>
            <div className="flex flex-col h-5/6">
                { shouldDisplayHeader &&
                    <div className="h-24 bg-zinc-200 rounded-t-3xl flex justify-center items-center">
                        <span className="font-bold text-xl">{props.headerTitle}</span>
                    </div>
                }

                <div className="bg-zinc-100 rounded-b-3xl overflow-auto h-full">
                    {
                        emptyInfo ?
                        <div className="h-full flex justify-center items-center italic text-neutral-600 text-sm">
                            {props.emptyMessage}
                        </div>
                        : 
                        props.children
                    }
                </div>
            </div>
        </>
    )
}