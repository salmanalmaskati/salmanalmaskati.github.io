
const urls = [ 'https://press.porsche.com/download/prod/presse_pag/PressBasicData.nsf/Download?OpenAgent&attachmentid=2385111&show=1',
'https://press.porsche.com/download/prod/presse_pag/PressBasicData.nsf/Download?OpenAgent&attachmentid=2378438&show=1',
'https://press.porsche.com/download/prod/presse_pag/PressBasicData.nsf/Download?OpenAgent&attachmentid=2323949&show=1',
'https://press.porsche.com/download/prod/presse_pag/PressBasicData.nsf/Download?OpenAgent&attachmentid=2264192&show=1' 
]

const description =['911 GT3 RS Tribute to Carrera RS Package makes first U.S. appearance',

'Testing of the new Porsche Cayenne',

'The centrepiece of Dream Big, is a white Porsche 911 Carrera',

'911 GT3 – 30 Years of Porsche Supercup: Passion for detail'
]

let i=0
function change(){
    pic.setAttribute('src', urls[i]);
    desc = document.getElementById("description")
    desc.innerHTML = description[i]
    i++
    if(i>3){
        i=0
    }
    setTimeout(change,20000)

    }

change()

