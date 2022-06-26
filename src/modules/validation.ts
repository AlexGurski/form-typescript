export const lastValidation = (obj:object) =>{
    let rez = 0;
    Object.values(obj).forEach(e=>e.valid?rez=rez+1:null)
    return rez===5?true:false
  }

export const JSONtoSend = (obj:object) =>{
    return lastValidation(obj)?JSON.stringify({...obj,status:true}):JSON.stringify({status:false})
    }