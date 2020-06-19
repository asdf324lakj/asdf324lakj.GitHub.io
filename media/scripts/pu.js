<div class="dandelion">
  <span class="smalldan"></span>
  <span class="bigdan"></span>
</div>
<style type="text/css">
@media screen and (max-width:600px){
.dandelion{display: none !important;}
}
 .dandelion .smalldan {
width: 36px;
height: 60px;
left: 88px;   
background-position: 0 -90px;
border: 0px solid red;
}
.dandelion span {
-webkit-animation: ball-x 3s linear 2s infinite;
 -moz-animation: ball-x 3s linear 2s infinite;
 animation: ball-x 3s linear 2s infinite;
-webkit-transform-origin: bottom center;
 -moz-transform-origin: bottom center;
 transform-origin: bottom center;
}
.dandelion span {
display: block;
position: fixed;
z-index:9999999999;
bottom: 0px;
background-image: url(http://www.12580sky.com/content/uploadfile/201610/45da1476877560.png);
background-repeat: no-repeat;
_background: none;
}
.dandelion .bigdan {
width: 64px;
height: 115px;
left: 41px;
background-position: -86px -36px;
border: 0px solid red;
}
@keyframes ball-x {
 0% { transform:rotate(0deg);}
 25% { transform:rotate(5deg); }
 50% { transform:rotate(0deg);}
 75% { transform:rotate(-5deg);}
 100% { transform:rotate(0deg);}  
}
@-webkit-keyframes ball-x {
 0% { -webkit-transform:rotate(0deg);}
 25% { -webkit-transform:rotate(5deg); }
 50% { -webkit-transform:rotate(0deg);}
 75% { -webkit-transform:rotate(-5deg);}
 100% { -webkit-transform:rotate(0deg);}
}
@-moz-keyframes ball-x {
 0% { -moz-transform:rotate(0deg);}
 25% { -moz-transform:rotate(5deg); }
 50% { -moz-transform:rotate(0deg);}
 75% { -moz-transform:rotate(-5deg);}
 100% { -moz-transform:rotate(0deg);}
}
</style>