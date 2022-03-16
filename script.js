
// document.querySelector(".container").style.height = "1000px";

// window.addEventListener("scroll", function() {
//     var body = document.querySelector(".container");
//     var height = body.style.height;
//     // console.log(height);
//     height = height.slice(0, -2);
//     height = Number(height);
//     return function() {
//         if(height - window.scrollY < 600) {
//             height += height / 2;
//             console.log(height)
//         }
//         body.style.height = height + "px";
//     };
// }());

const holder = document.querySelector('.container');
const images = Array.from(document.querySelectorAll('.img-container'));
// console.log(images);

window.addEventListener('scroll', ()=>{
    const {scrollHeight, scrollTop, clientHeight} = document.documentElement;
    if(scrollTop + clientHeight > scrollHeight - 5){
        setTimeout(createPost);
    }
});

function createPost(){
    const post = document.createElement('container');
    images.forEach(item =>{
    post.className = 'img-comtainer';
    post.innerHTML = holder.innerHTML;
    })
    holder.append(post);
}