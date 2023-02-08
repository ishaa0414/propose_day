let button=document.getElementById('btn');
let message=document.getElementById('messageBox');
let background1=document.getElementById('background1');
let background=document.getElementById('background2');
message.style.visibility="hidden";
button.addEventListener("click",function(){
    message.style.visibility="visible";
    message.innerHTML=`HEY MR. BEAN! Aaj kuch hai kya?? I am unable to recall!But yes one thing I know is that you haven't showed me your blushing smile since morning.So, can you just smile for me once!<br><button id="smile" class="smile">SMILE AND CLICK!</button>`
    message.style.fontSize="30px";
let smile=document.getElementById('smile');
smile.addEventListener("click",function(){
smile.style.visibility="hidden";
message.innerHTML=`OH WAIT!!!!OH DON'T GIVE ME THAT FUUCCKKIINGG SMILLEEE!!!!THAT DAMMNN SMILE&#128557;&#128557;&#128557;<br>****DEAD!!!!!!****<br><button id="alive" class="smile">CLICK TO MAKE ME ALIVE!</button>`;
background.style.backgroundImage="url('./broken-heart.png')"
let alive=document.getElementById('alive');
alive.addEventListener("click",function(){
    background.style.backgroundImage="url('./cupid-arrow.png')"
    message.innerHTML=`&#x1F608;&#x1F608;&#x1F608;<br>You have successfully made me alive <br>BUT!I have an evil soul NOW!<br><button class="smile" id="saved">CLICK SAVE YOURSELF</button>`;
message.style.fontSize="50px";
let save=document.getElementById('saved');
save.addEventListener("click",function(){
    background1.style.backgroundImage="url('./hacked.jpg')";
    background.style.visibility="hidden";
    message.style.height="100px";
    message.style.width="300px";
    message.style.borderColor="black";
    message.style.borderRadius="0px";
    message.style.backgroundColor="white";
    message.style.color="black";
    message.style.fontSize="24px";
    message.innerHTML=`&#x26A0; Your PC has been hacked.LOL<br><button id="ok">OK</button>`;
    let ok=document.getElementById('ok');
    ok.addEventListener("click",function(){
        message.innerHTML=`&#x26A0;However, I have just one question for you!<br><button id="okay">OK</button>`;
        let propose=document.getElementById('okay');
        propose.addEventListener("click",function(){
            background1.style.background="linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(115,7,87,1) 52%, rgba(49,91,215,1) 100%)";
            background.style.visibility="visible";
            background.style.backgroundImage="url('./bouquet.png')";
            message.style.height="500px";
            message.style.width="500px";
            message.style.border="4px solid white ";
            message.style.background="linear-gradient(0deg, rgba(125,34,195,1) 0%, rgba(253,45,123,1) 100%)";
            message.style.borderRadius="20px";
            message.style.color="white";
            message.style.fontSize="60px";
            message.innerHTML=`WILL YOU BE MY VALENTINE?&#x1F497;&#x1F48D;<br><button class="yes" id="yes">YES!</button><br><button id="no" class="no">NO!</button>`
            let yes=document.getElementById('yes');
            yes.addEventListener("click",function(){
                message.innerHTML=`OMG!!THANK YOU MR.BEAN!<br>	&#x1F498`
                background.style.backgroundImage="url('./i-love-you.png')"
            })
            let no=document.getElementById('no');
            no.addEventListener("click",function(){
                message.innerHTML=`PLEASE??<br><button class="yes" id="yes1">YES!</button ><br><button id="no2" class="no" >NO!</button>`;
                let yes1=document.getElementById('yes1');
            yes1.addEventListener("click",function(){
                message.innerHTML=`OMG!!THANK YOU MR.BEAN!<br>	&#x1F498`
                background.style.backgroundImage="url('./i-love-you.png')"
            })
           
                let no2=document.getElementById('no2');
                no2.addEventListener("click",function(){
                    message.innerHTML=`PLEASE???&#128520;<br><button class="yes" id="yes2">YES DEFINITELY!</button><br><button class="no">NO</button>`
                    let yes2=document.getElementById('yes2');
            yes2.addEventListener("click",function(){
                message.innerHTML=`OMG!!THANK YOU MR.BEAN!<br>	&#x1F498`
                background.style.backgroundImage="url('./i-love-you.png')"
            })
                })
            })
        })
    })
})
})

})

    
})