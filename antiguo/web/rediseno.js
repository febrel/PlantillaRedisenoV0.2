function sourceCode() {
    /*---------MODAL---------*/
    var i, j, k, l, m, n;
    var abrir_modal = document.getElementsByClassName("mostrar-modal");
    for (i = 0; i < abrir_modal.length; i++) {
        abrir_modal[i].addEventListener("click", function () {
            var modal = document.getElementsByClassName("ventana-emergente");
            //var activo=document.getElementsByClassName("activo");
            var activo = document.getElementById("activo");
            activo.classList.add("active");
            for (k = 0; k < modal.length; k++) {
                modal[k].style.display = "flex";

            }
        });
    }
    var cerrar_modal = document.getElementsByClassName("boton-cerrar");
    for (i = 0; i < cerrar_modal.length; i++) {
        cerrar_modal[i].addEventListener("click", function () {
            var modal = document.getElementsByClassName("ventana-emergente");
            var activo = document.getElementById("activo");
            activo.classList.remove("active");
            for (k = 0; k < modal.length; k++) {
                modal[k].style.display = "none";

            }
        });
    }
    /*---------FIN MODAL---------*/

    /*---------MODAL REQUISITOS---------*/
    var abrir_modal = document.getElementsByClassName("mostrar-modal-requisitos");
    for (i = 0; i < abrir_modal.length; i++) {
        abrir_modal[i].addEventListener("click", function () {

            /* for (i = 0; i < abrir_modal.length; i++) {
                 abrir_modal[i].classList.remove("active2")
             }*/
            this.classList.add("active2");
            var modal = this.nextElementSibling;
            modal.style.display = "flex";



        });
    }
    var cerrar_modal = document.getElementsByClassName("boton-cerrar-requisitos");
    for (i = 0; i < cerrar_modal.length; i++) {
        cerrar_modal[i].addEventListener("click", function () {
            var abrir_modal = document.getElementsByClassName("mostrar-modal-requisitos");
            for (n = 0; n < abrir_modal.length; n++) {
                abrir_modal[n].classList.remove("active2");
            }
            var modal = document.getElementsByClassName("ventana-emergente-requisitos");
            for (k = 0; k < modal.length; k++) {
                modal[k].style.display = "none";

            }


        });
    }
    /*---------FIN MODAL REQUISITOS--------*/


    /*---------ACORDEON -------*/

    var acc = document.getElementsByClassName("accordeon");
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("activado");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    /*---------FIN ACORDEON_____*/





    /*---------ACORDEON CONTENIDO BOTON--------------*/

    var acc = document.getElementsByClassName("acordeon-contenido");
    var i;

    var accp = document.getElementsByClassName("panel-cont-accordeon");


    for (i = 0; i < acc.length; i++) {


        acc[i].addEventListener("click", function () {

            for (n = 0; n < acc.length; n++) {
                acc[n].classList.remove("activador");
            }
            //document.getElementsByClassName("panel").style.display = "none";

            this.classList.toggle("activador");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {

                for (i = 0; i < accp.length; i++) {

                    accp[i].style.maxHeight = null;
                    acc[i].classList.remove("activador");
                }
                panel.style.maxHeight = null;

            } else {

                for (i = 0; i < accp.length; i++) {
                    accp[i].style.maxHeight = null;

                }
                panel.style.maxHeight = panel.scrollHeight + "px";

            }
        });
    }

    /*---------FIN ACORDEON CONTENIDO BOTON-------*/

    /*---------MENU PRINCIPAL---------*/
    var seleccion_menu = document.getElementsByClassName("icon");
    for (i = 0; i < seleccion_menu.length; i++) {
        var menu = document.getElementsByClassName("menu-principal");
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
    var boton_mostrar = document.getElementsByClassName("boton-mostrar");
    for (i = 0; i < boton_mostrar.length; i++) {
        boton_mostrar[i].addEventListener("click", function () {
            var link = 'link' + this.id;
            var tab = this.id;
            var cuadro = 'cuadro' + this.id;
            var activo = document.getElementById(tab);
            activo.classList.add("activar");

            document.getElementById(link).style.display = "flex";

            /*    document.getElementById(links).style.display = "flex"; 
                var modal = document.getElementsByClassName("mostrar-actividades");
                for (k = 0; k < modal.length; k++) {
                    modal[k].style.display = "flex";
                }*/
        });
    }

    var boton_ocultar = document.getElementsByClassName("boton-ocultar");
    for (i = 0; i < boton_ocultar.length; i++) {
        boton_ocultar[i].addEventListener("click", function () {

            var contenido = document.getElementsByClassName("actividad");
            for (var i = 0; i < contenido.length; i++) {
                contenido[i].classList.remove("activar");
            }
            var modal = document.getElementsByClassName("mostrar-actividades");
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

    /*---------ACORDEON TEXTO BASICO--------------*/

    var acc = document.getElementsByClassName("acordeon-titulo");
    var i;
    console.log(acc);
    var accp = document.getElementsByClassName("panel-textobasico");

    for (i = 0; i < acc.length; i++) {


        acc[i].addEventListener("click", function () {

            for (n = 0; n < acc.length; n++) {
                acc[n].classList.remove("activador");
            }
            //document.getElementsByClassName("panel").style.display = "none";

            this.classList.toggle("activador");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {

                for (i = 0; i < accp.length; i++) {

                    accp[i].style.maxHeight = null;
                    accp[i].style.padding = 0 + "em";
                    acc[i].classList.remove("activador");
                }
                panel.style.maxHeight = null;
                panel.style.padding = 0 + "em";

            } else {

                for (i = 0; i < accp.length; i++) {
                    accp[i].style.maxHeight = null;
                    accp[i].style.padding = 0 + "em";
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