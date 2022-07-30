let li=document.querySelectorAll(".actv li");
    let ul=document.querySelector(".actv");
    console.log(li);    
    li.forEach(el=>{
        el.onclick=function(){
        if(ul.classList.contains("mnu")){
            if(el.style.backgroundColor!=="rgb(250, 212, 0)"){
            el.style.backgroundColor="rgb(250, 212, 0)";
            el.style.borderRadius="30px";
            el.style.color="hsl(198, 62%, 26%)";
            el.style.fontFamily='Fraunces';
            li.forEach(ele=>{
                console.log(ele.style.backgroundColor);
                if(ele.style.backgroundColor==="rgb(250, 212, 0)"&&el!=ele){
                ele.style.backgroundColor="inherit";
                ele.style.borderRadius="0";
                ele.style.color="hsl(232, 10%, 55%) !important";
                ele.style.fontFamily='Barlow';
                }
            })
            }
            else{
            el.style.backgroundColor="inherit";
            el.style.borderRadius="0";
            // el.style.color="white";
            el.style.fontFamily='Barlow';
            }
        }
        else{
        if(el.style.backgroundColor!=="white"){
            el.style.backgroundColor="white";
            el.style.borderRadius="30px";
            el.style.color="hsl(232, 10%, 55%)";
            el.style.fontFamily='Fraunces';
            li.forEach(ele=>{
                if(ele.style.backgroundColor==="white"&&ele!=el){
                ele.style.backgroundColor="inherit";
                ele.style.borderRadius="0";
                ele.style.color="white";
                ele.style.fontFamily='Barlow';
                }
            })
            }
            else{
            el.style.backgroundColor="inherit";
            el.style.borderRadius="0";
            el.style.color="white";
            el.style.fontFamily='Barlow';
            }
        }
        }
    });
    //menu click
    let menu=document.querySelector(".menu");
    let lst=document.querySelector(".actv");
    menu.onclick=function(){
        if(lst.classList.contains("mnu")){
        lst.classList.remove("mnu");
        }
        else{
        lst.classList.add("mnu");
        }
    }
    let hidere=document.querySelector(".actv");
    hidere.onresize=function(){
        this.classList.remove(".mnu");
    }