import React, { useRef, useState } from 'react';
export const Name = ()=>{
    const [text, setText] = useState<string>("")
    const ref = useRef<HTMLInputElement>(null)

    const changeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value.replace(/[^A-Z a-z]/ig, ''))
    }
    const validation = () =>{
        let rez:string = ""
        let val :Array<string>= ref.current!.value.trimEnd().split(" ")
        if (val.length!==2){
            console.log("Input name and second name")
        }else 
            if(val[0].length<3){
                console.log('Your first name is short')
            }
            else if(val[0].length>30){
                console.log('Your first name is long')
            }
            else if(val[1].length<3){
                console.log('Your second name is short')
            }
            else if(val[1].length>30){
                console.log('Your second name is long')
            }         
            else{
            console.log('ok')
        }         
    }

    return(
        <div className="name">
        <input 
            onBlur={validation}
            ref={ref}
            onChange={changeHandler}
            value={text} 
            type="text" 
            placeholder="My name is" 
            name="name" 
            id="name_input"/>
        <div className="tooltip">Hover here</div>
    </div>
    )
}