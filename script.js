
let tl = gsap.timeline();
tl.from("#loader h3",{
  x:20,
  opacity:0,
  delay:.5,
  stagger:.1,
  duration:1
})

tl.to("#loader h3",{
  x:-20,
  opacity:0,
  delay:.5,
  stagger:.1,
  duration:.5
})

tl.to("#loader",{
  opacity:0,
  display:"none"
})



function headanimation(){
  tl.from(".animation1",{
    y:150,
    duration:.5,
   
    stagger:.1
  })
  
  tl.to("#star",{
    rotation:90,
    duration:.5,
    transformOrigin:"50% 50%"
  })
}

headanimation()

function animation2(){
  let textcontainer=document.getElementById("righttext")
let text1=document.getElementById("text1")
let text2=document.getElementById("text2")
let text3=document.getElementById("text3")


setInterval(function(){setTimeout(function(){text1.style.color="white"
text3.style.color="rgba(255, 255, 255, 0.312)"},1000)
setTimeout(function(){
  text1.style.color="rgba(255, 255, 255, 0.312)"
  text2.style.color="white"},2000)

setTimeout(function(){
    text2.style.color="rgba(255, 255, 255, 0.312)"
    text3.style.color="white"},3000)},3000)
}
animation2()
function navanimation(){
  let cursor = document.getElementById("cursorfollower")
  let nav = document.getElementById("navtop")
  nav.addEventListener("mouseenter",()=>{
    gsap.to("#cursorfollower",{
      scale:1,
      opacity:1
   })
  })
  
  nav.addEventListener("mouseleave",()=>{
    gsap.to("#cursorfollower",{
      scale:0,
      opacity:0
   })
  })
  
  nav.addEventListener("mousemove",(dets)=>{
    gsap.to(cursor,{
      top:dets.y,
      left:dets.x
    })
  })
}
navanimation()


function pricing(){
  
let starter = document.getElementById("starter")
let basic = document.getElementById("basic")
let pro = document.getElementById("pro")
starter.addEventListener("mouseenter",()=>{
  gsap.to("#starterplan",{
    scale:1,
    rotation:10,
  })
})


starter.addEventListener("mousemove",(dets)=>{
  gsap.to("#starterplan",{
    left:dets.x
  })
})

starter.addEventListener("mouseleave",()=>{
  gsap.to("#starterplan",{
    scale:0,
    rotation:0,
  })
})


basic.addEventListener("mouseenter",()=>{
  gsap.to("#basicplan",{
    scale:1,
    rotation:10,
  })
})


basic.addEventListener("mousemove",(dets)=>{
  gsap.to("#basicplan",{
    left:dets.x
  })
})

basic.addEventListener("mouseleave",()=>{
  gsap.to("#basicplan",{
    scale:0,
    rotation:0,
  })
})


pro.addEventListener("mouseenter",()=>{
  gsap.to("#proplan",{
    scale:1,
    rotation:10,
  })
})


pro.addEventListener("mousemove",(dets)=>{
  gsap.to("#proplan",{
    left:dets.x
  })
})

pro.addEventListener("mouseleave",()=>{
  gsap.to("#proplan",{
    scale:0,
    rotation:0,
  })
})
}

pricing()


function endanimation(){
  let linkarea = document.getElementById("link1")
linkarea.addEventListener("mouseenter",function(){
  gsap.to("#link1right",{
    scale:1,
    duration:.5
  })
})

linkarea.addEventListener("mouseleave",function(){
  gsap.to("#link1right",{
    scale:0,
    duration:.5
  })
})

let linkarea2 = document.getElementById("link2")
linkarea2.addEventListener("mouseenter",function(){
  gsap.to("#link2right",{
    scale:1,
    duration:.5
  })
})

linkarea2.addEventListener("mouseleave",function(){
  gsap.to("#link2right",{
    scale:0,
    duration:.5
  })
})
}
endanimation()

let btn1= document.getElementById("btn")
let btn2=document.getElementById("freepass")

btn1.addEventListener("mousemove",function(){
  gsap.to("#freebtn",{
    scale:1,
    y:-60,
    duration:.125,
   
  })

})

btn2.addEventListener("mouseleave",function(){
  gsap.to("#freebtn",{
    y:-120,
    duration:.1,
    y:0
   
  })

})


