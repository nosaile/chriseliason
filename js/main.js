"use strict";


renderHTML()

function renderHTML() {
    let html = "";
    html +=
        `<div>
<h1 class="main-header" style="text-align: left">chris_eliason</h1>
</div>
<div>
<h4 class="sub-header" style="text-align: start">full-stack_developer</h4>
</div>
<a href="#menu" class="menu">
<img id="menu" src="../assets/menu.png" alt="Menu button">
</a>
<div class="btngrp hide">
<div>
<button id="gallery-btn">gallery</button>
<p id="gallery" class="gallery" style="display: none">on this page you can browse some of my work</p>
</div>
<div>
<button id="about-btn">about</button>
<p id="about" class="about" style="display: none">get to know me</p>
</div>
<div>
<button id="contact-btn">contact</button>
<p id="contact" class="contact" style="display: none">if you like what you see or have any questions, feel free to contact me though the following ways</p>
</div>
</div>`
    $('#body').html(html)
    $('#menu').on('click', function(e){
        e.preventDefault();
        $('.btngrp').toggleClass('hide');
    });



}
