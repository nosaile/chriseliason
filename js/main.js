"use strict";


renderHTML()

function renderHTML() {
    let html = "";
    html +=
        `
<container style="position: fixed">
<div class="main row">
<h1 class="main-header col-12" style="text-align: left">chris_eliason</h1>
</div>
<div>
<h6 class="sub-header" style="text-align: start">full-stack developer</h6>
</div>
<div class="btngrp row">
<div class="col-4">
<button id="gallery-btn">gallery</button>
<p id="gallery" class="gallery" style="display: none">on this page you can browse some of my work</p>
</div>
<div class="col-4">
<button id="about-btn">about</button>
<p id="about" class="about" style="display: none">get to know me</p>
</div>
<div class="col-4">
<button id="contact-btn">contact</button>
<p id="contact" class="contact" style="display: none">if you like what you see or have any questions, feel free to contact me though the following ways</p>
</div>
</div>
<hr style="max-width: 400px">
<div class="intro" style="font-size: 10px">
<p>here on this page you will be able to view some of my work</p>
<p>please contact me with any questions you may have and enjoy your stay</p>
</div>
</container>


`
    $('#body').html(html)
    $('#menu').on('click', function(e){
        e.preventDefault();
        $('.btngrp').toggleClass('hide');
    });



}
