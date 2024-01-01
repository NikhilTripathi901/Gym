function headanimation(){
  gsap.from(".animation1",{
    y:150,
    duration:.5,
    delay:.5,
    stagger:.1
  })
  
  gsap.to("#star",{
    rotation:90,
    duration:.5,
    delay:1,
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



