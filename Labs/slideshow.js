let urls = [ 'https://press.porsche.com/download/prod/presse_pag/PressBasicData.nsf/Download?OpenAgent&attachmentid=2385111&show=1',
'https://press.porsche.com/download/prod/presse_pag/PressBasicData.nsf/Download?OpenAgent&attachmentid=2378438&show=1',
'https://press.porsche.com/download/prod/presse_pag/PressBasicData.nsf/Download?OpenAgent&attachmentid=2323949&show=1',
'https://press.porsche.com/download/prod/presse_pag/PressBasicData.nsf/Download?OpenAgent&attachmentid=2264192&show=1' 
]








let i=0
function change(){
    pic.setAttribute('src', urls[i]);
    i++
    if(i>3){
        i=0
    }
    setTimeout(change,20000)
    }

change()






