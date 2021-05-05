


let styleNode2 = document.createElement ("style");
styleNode2.type = "text/css";

styleNode2.textContent = 
`@font-face { font-family: Product Sans Regular; src: url(${chrome.extension.getURL ('ProductSans-Regular.woff')}) ; }`
                        
document.head.appendChild(styleNode2);


let styleNode = document.createElement ("style");
styleNode.type = "text/css";

styleNode.textContent = 
`@font-face { font-family: Product Sans Bold; src: url(${chrome.extension.getURL ('ProductSans-Bold.woff')}) ; }`
                        
document.head.appendChild(styleNode);





let banner = document.getElementsByClassName('gb_Jd gb_Xc gb_Zc')[0]
let gtransBlock = document.getElementsByClassName('WFnNle')[0]

let mainParent = document.getElementsByClassName('MOkH4e BSw7K iYelWb LUoOL')[0]

let afterBit = document.getElementsByClassName('MOkH4e BSw7K iYelWb LUoOL')[0].children[0]

let mainBit = document.getElementsByClassName('MOkH4e BSw7K iYelWb LUoOL')[0].children[1]

let otherBit = document.getElementsByClassName('MOkH4e BSw7K iYelWb LUoOL')[0].children[2]





const {['log']:c} = console

let mode = false



document.addEventListener('DOMContentLoaded', ()=>{ })


let button1 = document.createElement('button')
let button2 = document.createElement('button')
let button3 = document.createElement('button')
let buttonContainer = document.createElement('span')

let addTextNode = document.createTextNode('Add')
let printTextNode = document.createTextNode('Print')
let clearTextNode = document.createTextNode('Clear')


button1.setAttribute('id','add-to-list')
button2.setAttribute('id','print-the-list')
button3.setAttribute('id','clear-the-list')



button1.appendChild(addTextNode)
button2.appendChild(printTextNode)
button3.appendChild(clearTextNode)



buttonContainer.setAttribute('id','button-container')
buttonContainer.append(button1, button3)

document.getElementsByClassName("hgbeOc")[0].append(buttonContainer)



let words = [  ]


button1.addEventListener('click', addWord)
button2.addEventListener('click', printWords)
button3.addEventListener('click', clearWords)

















function showMessage() {
    
    let div = document.createElement('div')

    div.setAttribute('id','message-box');

    let phrases;
    if(words.length === 0){  phrases = ''   }
    if(words.length === 1){ phrases = 'phrase'   }
    if(words.length > 1){   phrases = 'phrases' }


    let youHaveCollected = words.length === 0 ? 'Your collection has been cleared' : 'You have collected ';

    let length = words.length === 0 ? '' : words.length;

    div.innerHTML = `<span id="message" >${youHaveCollected}<span class="key-word">${length}</span> <span>${phrases}</span>   </span>`


    document.getElementsByClassName("hgbeOc")[0].append(div)




    setTimeout(()=>{

    div.remove()

    },3000)


}





function addWord() {

    let note = []

    let english = document.getElementsByClassName('er8xn')[0].value
    
    let translation = document.getElementsByClassName("J0lOec")[0].children[0].innerText
    
    note = [ english, translation ]

    if(mode){

        let phonetic = document.getElementsByClassName("kO6q6e")[1].innerText

        note = [ english, translation, phonetic ]
    }




words.push(note)


showMessage()
printWords()



}









function printWords() {

    let string = ''

let newline = `&#013; &#010;`
let newline2 = "\r\n";

    for (let i = 0; i < words.length; i++) {
      
    let pronounced = ''

    if(words[i][2] !== undefined){

    pronounced = `(  ${ words[i][2] }  )`

    }

    string += `${words[i][0]} /  ${words[i][1]}   ${pronounced} ${newline2}` 
    
             
    
        }





chrome.runtime.sendMessage({data:string})




}






function createButton() {


    let div = document.createElement('button')

    // div.setAttribute('id','message')

    let addTextNode = document.createTextNode(`COPY`)

    div.appendChild(addTextNode)

    return div


    
}



function clearWords() {
    
    words = []

    showMessage()

    printWords()

}



function copyWords() {

    c('HELELELEOSL')
    
}



function createToggle(){


 let label = document.createElement('label')
    let checkbox = document.createElement('input')
    let slider = document.createElement('span')
   
    label.setAttribute('class',  'switch')
    
    checkbox.setAttribute('type', 'checkbox')
    
    slider.setAttribute('class', 'slider')
    slider.classList.add('round')
    

    label.append(checkbox, slider)

    checkbox.addEventListener('change', (e)=>{
    
    mode = e.target.checked
    c(mode)
    


    })

c(label)
    return label

}