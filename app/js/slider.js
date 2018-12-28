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
        console.log(currentIndex)
        if (currentIndex > 0) {
            sliderItems[(currentIndex-1)].classList.remove("active")
            sliderItems[(currentIndex-1)].classList.add("not_active")
        } else {
            sliderItems[(sliderItems.length-1)].classList.remove("active")
            sliderItems[(sliderItems.length-1)].classList.add("not_active") 
        }      
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
            sliderItems[0].classList.remove("active") 
            sliderItems[0].classList.add("not_active")
        } else {
            sliderItems[(currentIndex+1)].classList.remove("active")
            sliderItems[(currentIndex+1)].classList.add("not_active")
        }     
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

