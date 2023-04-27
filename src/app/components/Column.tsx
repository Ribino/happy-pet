import Field from "./Field"

interface Props {
    value:any
    className?:string
    applyHighlite?: boolean
}

export default function Column(props: Props) {

    return (
        <>
            <div className={`${props.applyHighlite ? 'bg-[#F4AA41] text-white font-semibold' : 'bg-white flex-auto'}  ${props?.className ?? ''}`}>
                <Field type={typeof props.value} className={`flex h-full ml-2 mr-2 justify-center items-center`} value={props.value} />
            </div>
        </>
    )
}
