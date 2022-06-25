import React, { useRef, useState } from 'react';

export const Name = ()=>{

    const [text, setText] = useState<string>("")
    const [textError, setTextError] = useState<string>("input is empty")
    const [style, setStyle] = useState<object>({opacity:0})
    const ref = useRef<HTMLInputElement>(null)

    const changeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value.replace(/[^A-Z a-z]/ig, ''));
        validation();
    }

    const blur = ()=>{
        if (textError!=="true")                    
            setStyle({opacity:1})         
    }
    const focus = () =>{
        setStyle({opacity:0})  
    }
        
    const validation = () =>{
        let val :Array<string>= ref.current!.value.trimEnd().trimStart().split(" ")
        if (val.length!==2){
            setTextError("Input name and second name")
        }else 
            
            if(val[0].length<3){
                setTextError('Your first name is short')
            }
            else if(val[0].length>30){
                setTextError('Your first name is long')
            }
            else if(val[1].length<3){
                setTextError('Your second name is short')
            }
            else if(val[1].length>30){
                setTextError('Your second name is long')
            }         
            else{
                setStyle({opacity:0})  
                setTextError('true')
        }         
    }

    return(
        <div className="name">
        <input 
            onFocus={focus}
            onBlur={blur}
            ref={ref}
            onChange={changeHandler}
            value={text} 
            type="text" 
            placeholder="My name is" 
            name="name" 
            id="name_input"/>
        <div className="tooltip" style={style}>{textError}</div>
    </div>
    )
}