function sourceCode() {
    // Variables
    let i, j, k, l, m, n;

    /*---------MODAL---------*/
    let abrir_modal = document.getElementsByClassName("mostrar-modal");
    for (i = 0; i < abrir_modal.length; i++) {
        abrir_modal[i].addEventListener("click", function () {
            let modal = document.getElementsByClassName("ventana-emergente");
            //let activo=document.getElementsByClassName("activo");
            let activo = document.getElementById("activo");
            activo.classList.add("active");
            for (k = 0; k < modal.length; k++) {
                modal[k].style.display = "flex";

            }
        });
    }

    let cerrar_modal = document.getElementsByClassName("boton-cerrar");
    for (i = 0; i < cerrar_modal.length; i++) {
        cerrar_modal[i].addEventListener("click", function () {
            let modal = document.getElementsByClassName("ventana-emergente");
            let activo = document.getElementById("activo");
            activo.classList.remove("active");
            for (k = 0; k < modal.length; k++) {
                modal[k].style.display = "none";

            }
        });
    }
    /*---------FIN MODAL---------*/

    /*---------MODAL REQUISITOS---------*/
    let abrir_modal_req = document.getElementsByClassName("mostrar-modal-requisitos");
    for (i = 0; i < abrir_modal_req.length; i++) {
        abrir_modal_req[i].addEventListener("click", function () {

            /* for (i = 0; i < abrir_modal.length; i++) {
                 abrir_modal[i].classList.remove("active2")
             }*/
            this.classList.add("active2");
            let modal = this.nextElementSibling;
            modal.style.display = "flex";



        });
    }
    let cerrar_modal_req = document.getElementsByClassName("boton-cerrar-requisitos");
    for (i = 0; i < cerrar_modal_req.length; i++) {
        cerrar_modal_req[i].addEventListener("click", function () {
            let abrir_modal_req = document.getElementsByClassName("mostrar-modal-requisitos");
            for (n = 0; n < abrir_modal_req.length; n++) {
                abrir_modal_req[n].classList.remove("active2");
            }
            let modal = document.getElementsByClassName("ventana-emergente-requisitos");
            for (k = 0; k < modal.length; k++) {
                modal[k].style.display = "none";

            }


        });
    }
    /*---------FIN MODAL REQUISITOS--------*/



    /*---------MENU PRINCIPAL---------*/
    let seleccion_menu = document.getElementsByClassName("icon");
    for (i = 0; i < seleccion_menu.length; i++) {
        let menu = document.getElementsByClassName("menu-principal");
        seleccion_menu[i].addEventListener("click", function () {
            for (j = 0; j < menu.length; j++) {
                if (menu[j].className === "menu-principal") {
                    menu[j].className += " responsive";
                } else {
                    menu[j].className = "menu-principal";
                }

            }
        });
    }
    /*---------FIN MENU PRINCIPAL---------*/
    /*---------MOSTRAR ACTIVIDADES CALIFICADAS---------*/
    let boton_mostrar = document.getElementsByClassName("boton-mostrar");
    for (i = 0; i < boton_mostrar.length; i++) {
        boton_mostrar[i].addEventListener("click", function () {
            let link = 'link' + this.id;
            let tab = this.id;
            let cuadro = 'cuadro' + this.id;
            let activo = document.getElementById(tab);
            activo.classList.add("actilet");

            document.getElementById(link).style.display = "flex";

            /*    document.getElementById(links).style.display = "flex"; 
                let modal = document.getElementsByClassName("mostrar-actividades");
                for (k = 0; k < modal.length; k++) {
                    modal[k].style.display = "flex";
                }*/
        });
    }

    let boton_ocultar = document.getElementsByClassName("boton-ocultar");
    for (i = 0; i < boton_ocultar.length; i++) {
        boton_ocultar[i].addEventListener("click", function () {

            let contenido = document.getElementsByClassName("actividad");
            for (let i = 0; i < contenido.length; i++) {
                contenido[i].classList.remove("actilet");
            }
            let modal = document.getElementsByClassName("mostrar-actividades");
            for (k = 0; k < modal.length; k++) {
                modal[k].style.display = "none";

            }
        });
    }

    // Obtener foto de perfil de la plataforma SICA

    $(document).ready(function () {
        if ($("#usuarioDocente").val() != null) {
            term = document.querySelector('#usuarioDocente');

            $.ajax({
                url: 'https://sica.utpl.edu.ec/api/persons/' + term.textContent + '/?token=rWMxU5jI6KLhT2k',
                type: 'GET',
                data: {},
                dataType: 'jsonp',
                success: function (data) {
                    console.log(data.image);
                    term_img = document.querySelector('.fce img#fotoPerfil');
                    term_img.src = data.image;
                }
            });
        }
    });


}


function sourceAcordeon() {
    // Variables
    let i, j, k, l, m, n;

    /*---------ACORDEON -------*/

    let acc = document.getElementsByClassName("accordeon");

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("activado");
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    /*---------FIN ACORDEON_____*/


    /*---------ACORDEON CONTENIDO BOTON--------------*/

    let acct_btn = document.getElementsByClassName("acordeon-contenido");
    let accp_btn = document.getElementsByClassName("panel-cont-accordeon");


    for (i = 0; i < acct_btn.length; i++) {

        acct_btn[i].addEventListener("click", function () {

            for (n = 0; n < acct_btn.length; n++) {
                acct_btn[n].classList.remove("activador");
            }
            //document.getElementsByClassName("panel").style.display = "none";

            this.classList.toggle("activador");
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {

                for (i = 0; i < accp_btn.length; i++) {

                    accp_btn[i].style.maxHeight = null;
                    acct_btn[i].classList.remove("activador");
                }
                panel.style.maxHeight = null;

            } else {

                for (i = 0; i < accp_btn.length; i++) {
                    accp_btn[i].style.maxHeight = null;

                }
                panel.style.maxHeight = panel.scrollHeight + "px";

            }
        });
    }

    /*---------FIN ACORDEON CONTENIDO BOTON-------*/

    /*---------ACORDEON TEXTO BASICO--------------*/

    let acct_txt = document.getElementsByClassName("acordeon-titulo");
    let accp_txt = document.getElementsByClassName("panel-textobasico");

    for (i = 0; i < acct_txt.length; i++) {


        acct_txt[i].addEventListener("click", function () {

            for (n = 0; n < acc.length; n++) {
                acct_txt[n].classList.remove("activador");
            }
            //document.getElementsByClassName("panel").style.display = "none";

            this.classList.toggle("activador");
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {

                for (i = 0; i < accp_txt.length; i++) {

                    accp_txt[i].style.maxHeight = null;
                    accp_txt[i].style.padding = 0 + "em";
                    acct_txt[i].classList.remove("activador");
                }
                panel.style.maxHeight = null;
                panel.style.padding = 0 + "em";

            } else {

                for (i = 0; i < accp_txt.length; i++) {
                    accp_txt[i].style.maxHeight = null;
                    accp_txt[i].style.padding = 0 + "em";
                }
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.style.padding = 1 + "em";

            }
        });
    }
}


var time = setInterval(function () {
    window.onload = function () {
        sourceCode();
    }
}, 600);


clearInterval(time);


var time2 = setInterval(function () {
    sourceCode();
    clearInterval(time2);
}, 600);



var time3 = setInterval(function () {
    window.onload = function () { sourceAcordeon(); }
  }, 600);
  
  clearInterval(time3);
  

var time4 = setInterval(function () {
  
    sourceAcordeon();
  
    clearInterval(time4);
  
  }, 600);
