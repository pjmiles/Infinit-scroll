
const holder = document.querySelector('.container');
const images = Array.from(document.querySelectorAll('.img-container'));
// console.log(images);

window.addEventListener('scroll', ()=>{
    const {scrollHeight, scrollTop, clientHeight} = document.documentElement;
    if(scrollTop + clientHeight > scrollHeight - 5){
        createPost();
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