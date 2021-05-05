

function printWords() {


    let string = ''

    for (let i = 0; i < words.length; i++) {
      
    let pronounced = ''

    if(words[i][2] !== undefined){

    pronounced = `(  ${ words[i][2] }  )`

    }

    string += `<div style=""> ${words[i][0]} /  ${words[i][1]}   ${pronounced} </div>` 
    
             
    
        }
 
    



        // myWindow = window.open("data:text/html,",
        // "<h1>HELLOS WORLD</h1>", `width=500,height=700`).document.write(string, `<script> 

        // var styles = " .div { background: green;}; "

        // var styleSheet = document.createElement("style");
        // styleSheet.type = "text/css";
        // styleSheet.innerText = styles;
        // document.head.appendChild(styleSheet);
        
        // </script>`)


//CURRENT
       let myWindow = setTimeout (window.open("",
        "", `width=500,height=700`).document.write(`
        <html>
        <head></head>
        <body>


        ${string}

        </body>
        <script> 

        var styles = "div { background: white;} body{display:flex; align-items:center; justify-content:center; flex-direction:column;} "
        
        var styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
        
        </script>
      
        </html>
        
        `) , 3000 )

        c(myWindow)
        
        // self.focus();

        // const url = chrome.runtime.getURL('child.html');
        // window.open(url, string, `width=500,height=700`)
        // c(url)




       // body{display:flex; align-items:center; justify-content:center;};"

        //BUTTON AND SCRIPT
        // '<button id="copy-all-button">Hellos</button> <script> document.getElementById("copy-all-button").addEventListener("click", ()=>{ window.open("", ParentWindowName).focus();}   ) </script> '

// let win = window.open("", "newwindow", "width=500, height=700, top=100, left=100" ); 

// win.document.body.innerHTML = `<html><head><title>Translations</title></head><body style="display: flex; justify-content:center; align-items:center;">${string}</body></html>`



// chrome.tabs.create({url: "http://www.google.com", selected: false});

// c(window.location)


    }



    // for (let i = 0; i < children.length; i++) {if(children[i].nodeType === 3){console.log(children[i])}}


    // copyText.select();
    // copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    // /* Copy the text inside the text field */
    // document.execCommand("copy");
  
    // /* Alert the copied text */
    // alert("Copied the text: " + copyText.value);
  
    // const children=document.getElementsByTagName("div"); console.log(children);  for (let i = 0; i < children.length; i++) { children[i].select(); 









function printWords() {

    let string = ''

    for (let i = 0; i < words.length; i++) {
      
    let pronounced = ''

    if(words[i][2] !== undefined){

    pronounced = `(  ${ words[i][2] }  )`

    }

    string += `<div style=""> ${words[i][0]} /  ${words[i][1]}   ${pronounced} </div>` 
    
             
    
        }





chrome.runtime.sendMessage({data:string})




}
