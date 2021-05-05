const {['log']:c} = console





chrome.runtime.onMessage.addListener((message, sender, sendResponse)=>{
chrome.tabs.getAllInWindow(null, (tabs)=>{


c(tabs)
let idx = sender.tab.index
let words = message.data


c(words)




if(words.length === 0){

words = 'You currently have no phrases'

}



for (let i = 0; i < tabs.length; i++) {

c(tabs[i])

   if(tabs[i].url === ""){
    chrome.tabs.remove(tabs[i].id)
   }
    
}



window.open('', '_blank', '').document.write(`<html><head>

<title>Translations</title>

<link rel="stylesheet" href="popupStyles.css">

</head>

<body><img src="google-translate.png"></img><textarea cols=120  rows=30>${words}</textarea>


</body>

<script src="content.js" ></script> <script> let selector = document.getElementById("selectAll")</script>

</html>`)


chrome.tabs.update(tabs[idx].id,{active:true})


})

})



//window.getSelection().selectAllChildren(element);


// hash   =    sha256-IX1gm3eT3skqXDLXkETdwh9I3YT6reDPKAy/vSevxMc=