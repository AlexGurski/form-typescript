import React, { useRef} from 'react';

export const Message = ()=>{
  const ref = useRef<HTMLTextAreaElement>(null)
    return(
    <div className="message">
      <textarea       
      name="message" 
      ref={ref}
      placeholder="I'd like to send feedback about..." 
      ></textarea>
      <span>sdfsdfsf</span>
    </div>
    )
}