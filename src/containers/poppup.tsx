import { useEffect, useRef, useState } from "react"

export const Poppup:React.FC<{status:object}> = props =>{

    const [state,setState] = useState<string>("")
    const [style,setStyle] = useState<object>({})

    useEffect(()=>{
        setState(write(props.status))
        setTimeout(() => {
            setStyle({display:'none'})  
        }, 2000);
    },[props.status])

    const write = (obj:any) =>{
        if (obj.status!==undefined){
            if (obj.status){  
                setStyle({display:'block', color:'green'})             
                return obj.text
            }
            else{         
                setStyle({display:'block', color:'red'})           
                return obj.text
            }
        } 
    }

    return(
    <div style={style} className="poppup">
        {state}
    </div>
    )
}