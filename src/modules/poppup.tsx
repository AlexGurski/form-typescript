import { useEffect, useRef, useState } from "react"

export const Poppup:React.FC<{status:object}> = props =>{

    const ref = useRef<HTMLDivElement>(null)

    const write = (obj:any) =>{
        if (obj.status!==undefined){
            if (obj.status){               
                return obj.text
            }
            else{               
                return obj.text
            }
        } 
    }
    return(
    <div ref={ref} className="poppup">
        {write(props.status)}
    </div>
    )
}