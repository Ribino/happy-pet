interface Props {
    className?:string,
    type: string,
    value:any
}

enum FieldTypes {
    TEXT = 'string',
    NUMBER = 'number',
    DATE = 'date',
    ICON = 'object'
}



export default function Field(props: Props) {

    return (
        <>  
            {
                generateFied(props.type, props.value, props.className)
            } 
        </>
    )
}


function generateFied(type: string, value: any, className?: string) {
    switch(type) {
        case FieldTypes.TEXT: 
            return <span className={`text-xs ${className}`}>{value}</span>;
        case FieldTypes.ICON: 
            return <div className={`text-4xl flex-none ${className}`} >{value}</div>;
        default: 
            return <div className={className}> {value} </div>;
    }
}

