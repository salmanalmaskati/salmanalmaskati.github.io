
let text= "Salman AlMaskati "
let text2 ="Data Scientist / Data Analyst"

let i =0
let y = 0 
let v=0




function type (){
    if(i < text.length){
        namee=document.getElementById("intro")
        namee.innerHTML+=text.charAt(i)
        i++
    
      


    }
    setTimeout(type,60)
   
}
type()



function type2 (){
    if(y < text2.length){
        pro=document.getElementById("intro2")
        pro.innerHTML+=text2.charAt(y)
        y++
       
        


    }
    setTimeout(type2,60)
   
}



type2()



