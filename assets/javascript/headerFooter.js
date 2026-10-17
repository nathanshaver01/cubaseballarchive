const header = document.querySelector('#header');
const footer = document.querySelector('#footer');

window.addEventListener('load', function(){
    header.innerHTML = 
        `<img src="./assets/images/header.png" class=headerImage>
        <h1>UNIVERSITY OF COLORADO BASEBALL ARCHIVE</h1>
        <nav>
            <div class="container">
                <p>
                    <a href="">YEARLY ARCHIVE</a>
                    <a href="">PLAYERS</a>
                    <a href="">COACHES</a>
                    <a href="">ABOUT</a>
                </p>
            </div>
            <hr>
        </nav>`;

    footer.innerHTML = 
        `<p>TBD Footer &copy</p>`;

});