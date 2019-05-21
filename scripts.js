var hbr= document.getElementsByTagName("p");


hbr[0].onmouseover = function(){this.id="hbr";};
hbr[0].onmouseout= function(){this.id=""}

 var img=document.getElementsByTagName("p2");
 // trying something new out...
 img[0].onmouseover=function(){
        document.body.background="img src/mark-1 b.jpg";
    }
 img[1].onmouseover=function(){
    document.body.background="img src/mark-4 b.jpg";
    }

img[2].onmouseover=function(){
        document.body.background="img src/mark-XLII b.jpg";
    }
img[3].onmouseover=function(){
        document.body.background="img src/mark-XLVII b.jpg";
}
img[4].onmouseover=function(){
    document.body.background="img src/hulkbuster b.jpg";
}
img[5].onmouseover=function(){
    document.body.background="img src/mark-L b.jpg";
}

img[0].onmouseout= function(){document.body.background="img src/back.jpg";}
img[1].onmouseout= function(){document.body.background="img src/back.jpg";}
img[2].onmouseout= function(){document.body.background="img src/back.jpg";}
img[3].onmouseout= function(){document.body.background="img src/back.jpg";}
img[4].onmouseout= function(){document.body.background="img src/back.jpg";}
img[5].onmouseout= function(){document.body.background="img src/back.jpg";}

