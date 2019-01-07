window.onresize = makeSliderResize
window.onload = makeSliderResize


function makeSlider(slideItem){
    let sliderItems = document.getElementsByClassName(slideItem) 
    sliderItems[0].classList.add("active")
    sliderItems[1].classList.add("not_active")   
    let btnLeft = document.getElementById("prev")
    let btnRight = document.getElementById("next")
    let index = 0
    btnLeft.onclick = getNextSlideLeft
    btnRight.onclick = getNextSlideRight
    function getNextSlideRight(event){
        console.log(sliderItems)
        console.log(index)
        index = ++index > sliderItems.length-1 ? 0 : index
        let currentIndex = index
        console.log(`currnetIndex ${currentIndex}`)
        if (currentIndex > 0) {
            TweenMax.fromTo(sliderItems[(currentIndex-1)], 1, {opacity: "1"}, {opacity: "0"})
            TweenMax.to(sliderItems[(currentIndex-1)], 0, {display: "none"})
            sliderItems[(currentIndex-1)].classList.remove("active")
            sliderItems[(currentIndex-1)].classList.add("not_active")
        } else {
            TweenMax.fromTo(sliderItems[(sliderItems.length-1)], 1, {opacity: "1"}, {opacity: "0"})
            TweenMax.to(sliderItems[(sliderItems.length-1)], 0, {display: "none"})
            sliderItems[(sliderItems.length-1)].classList.remove("active")
            sliderItems[(sliderItems.length-1)].classList.add("not_active") 
        } 
        TweenMax.fromTo(sliderItems[currentIndex], 1, {opacity: "0"}, {opacity: "1"})
        TweenMax.to(sliderItems[(currentIndex)], 1, {display: "block"})    
        sliderItems[currentIndex].classList.remove("not_active")
        sliderItems[currentIndex].classList.add("active")
        console.log(sliderItems)
        
    }
    function getNextSlideLeft(event){
        console.log(sliderItems)
        console.log(index)
        index = --index < 0 ? sliderItems.length-1 : index
        let currentIndex = index
        console.log(currentIndex)
        if (currentIndex === sliderItems.length-1) {
            TweenMax.fromTo(sliderItems[0], 1, {opacity: "1"}, {opacity: "0"})
            TweenMax.to(sliderItems[0], 0, {display: "none"})
            sliderItems[0].classList.remove("active") 
            sliderItems[0].classList.add("not_active")
        } else {
            TweenMax.fromTo(sliderItems[(currentIndex+1)], 1, {opacity: "1"}, {opacity: "0"})
            TweenMax.to(sliderItems[(currentIndex+1)], 0, {display: "none"})
            sliderItems[(currentIndex+1)].classList.remove("active")
            sliderItems[(currentIndex+1)].classList.add("not_active")
        }  
        TweenMax.fromTo(sliderItems[currentIndex], 1, {opacity: "0"}, {opacity: "1"}) 
        TweenMax.to(sliderItems[(currentIndex)], 1, {display: "block"})  
        sliderItems[currentIndex].classList.remove("not_active")
        sliderItems[currentIndex].classList.add("active")
        console.log(sliderItems)
    }
}

function makeSliderResize(event){
    if (document.body.getBoundingClientRect().width <= 768)
        makeSlider("slider_mobile_item")
    else 
        makeSlider("slider_set")
}

