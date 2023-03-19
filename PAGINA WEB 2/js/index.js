window.addEventListener("scroll", function(){
    var header = this.document.getElementById("nav-bar");
    var logoImg = this.document.getElementById("logo");
    var logoImgmenu1 = this.document.getElementById("logo1");
    var logoImgmenu2 = this.document.getElementById("logo2");
    var logoImgmenu3 = this.document.getElementById("logo3");
    var logoImgmenu4 = this.document.getElementById("logo4");
    var logoImgmenu5 = this.document.getElementById("logo5");
    header.classList.toggle("abajo",window.scrollY>0);

    if(header.classList.contains("abajo")){
        
        logoImg.src = "./img/logo_topdevz-azul.png";
        logoImgmenu1.src = "./img/logo_topdevz-azul.png";
        logoImgmenu2.src = "./img/logo_topdevz-azul.png";
        logoImgmenu3.src = "./img/logo_topdevz-azul.png";
        logoImgmenu4.src = "./img/logo_topdevz-azul.png";
        logoImgmenu5.src = "./img/logo_topdevz-azul.png";
    }
    else{
        logoImg.src = "./img/logo_topdevz.png";
        logoImgmenu1.src = "./img/logo_topdevz.png";
        logoImgmenu2.src = "./img/logo_topdevz.png";
        logoImgmenu3.src = "./img/logo_topdevz.png";
        logoImgmenu4.src = "./img/logo_topdevz.png";
        logoImgmenu5.src = "./img/logo_topdevz.png";
    }
});