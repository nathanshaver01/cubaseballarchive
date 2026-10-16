const header = document.querySelector('#header');
const footer = document.querySelector('#footer');

window.addEventListener('load', function(){
    header.innerHTML = 
        `<img src="./assets/images/header.png" class=headerImage>
        <h1 style="display:flex; justify-content: center">Archives of CU Baseball</h1>
        <p style="display:flex; justify-content: space-around;">
            <a href="">Link 1</a>
            <a href="">Link 2</a>
            <a href="">Link 3</a>
        </p>`;

    footer.innerHTML = 
        `<p>TBD Footer &copy</p>`;

});