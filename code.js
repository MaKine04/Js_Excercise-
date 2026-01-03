window.addEventListener('DOMContentLoaded', function(){
    const color_text = document.getElementById('color_text');
    let color_block = document.getElementById('color_block');

    color_text.addEventListener('input',() => {
        color_block.style.backgroundColor = color_text.value;
    })
})

