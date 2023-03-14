const burger = document.getElementById('burger')
const linkList = document.getElementById('link_list')

function toggleMenu() {
    linkList.classList.toggle('link_list_visible')
    burger.classList.toggle('burger_in_x_form')
}


burger.addEventListener('click', toggleMenu)




img_src_array = ["img/slide/0_slide1.jpg", "img/slide/1_slide2.jpg", "img/slide/2_slide3.jpg","img/slide/3_slide4.jpg","img/slide/4_slide5.jpg","img/slide/5_slide6.jpg","img/slide/6_slide7.jpg","img/slide/7_slide8.jpg","img/slide/8_slide9.jpg"]

function changePhotoRight() {
    var length = document.getElementById('slide_img').src.length
    
    var index = eval(document.getElementById('slide_img').src[length - 12])
    if (index < img_src_array.length - 1) {document.getElementById('slide_img').src = img_src_array[index + 1]}
    else {document.getElementById('slide_img').src = img_src_array[0]}
    
}

function changePhotoLeft() {
    var length = document.getElementById('slide_img').src.length
    
    var index = eval(document.getElementById('slide_img').src[length - 12])
    if (index > 0) {document.getElementById('slide_img').src = img_src_array[index - 1]}
    else {document.getElementById('slide_img').src = img_src_array[img_src_array.length - 1]}
        
    
}


document.getElementById('listerner-left').addEventListener("click", changePhotoLeft)

document.getElementById('listerner-right').addEventListener("click", changePhotoRight)
