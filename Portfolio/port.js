
let text= "Salman AlMaskati "
let text2 ="Data Scientist / Data Analyst"
let text3 = "Github URL: https://github.com/salmanalmaskati"
let imageURL=[
    "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    "https://w7.pngwing.com/pngs/276/472/png-transparent-linkedin-computer-icons-blog-logo-watercolor-butterfly-angle-text-rectangle.png"
]




let i =0
let y = 0 
let v=0
let a=0
let position =0



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


function type3 (){
    if(v < text3.length){
        git=document.getElementById("intro3")
        git.innerHTML+=text3.charAt(v)
        v++
       
        


    }
    setTimeout(type3,60)
   
}
type3()

