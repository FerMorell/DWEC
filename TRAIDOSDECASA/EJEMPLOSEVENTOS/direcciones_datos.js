const listaUsuarios = `tziemens0,Franecki LLC,Ongabelen
gsmorthit1,Will-Lubowitz,Chancay
ckamiyama2,Hammes LLC,Guarumal
gmorales3,"O'Kon, Hessel and Kshlerin",
mheathcott4,Okuneva-Haley,Casillas
dknyvett5,Russel-Hayes,Maanĭt
crosnau6,Wintheiser-Ferry,
gsaur7,"Von, Raynor and Gorczany",
rbasindale8,Weissnat-Connelly,Mkiriwadjumoi
kgarvagh9,Kautzer-Kuhic,Kajuru
mbellissa,"Cronin Konopelski and Keeling",Calape
cdashb,Keebler-Kozey,Nanyuki
vskentelberyc,Okuneva Group,Umm Ruwaba
,Howell Inc,Laoxialu
,Bernier Inc,Banjar Ambengan
,Strosin Group,San Antonio
kfeechumg,"Wolff Hammes and Towne",Gostagayevskaya
czannollih,Hirthe and Sons,Wenci
cwardsi,"Pacocha Hand and Bergnaum",Nador
apembridgej,"Murazik Fritsch and Fay",Taozixi
btreatk,Torphy-Kunde,Brahin
mswendelll,Bergnaum Group,Kimry
colanderm,"Gerlach Reichel and Mayert",Saint-Chamond
rcominon,Muller-McCullough,Ulset
dcastelloneo,Jast Inc,Mampong
kaimsonp,"Funk Brekke and Oberbrunner",Rauna
rshilvockq,,Dongtai
scoonr,Shields-Ritchie,Binkolo
cbeachs,Streich-Rutherford,Skoútari
vpitkint,Hammes-Lueilwitz,Espinosa
gmccullumu,"Osinski, Bailey and Brekke",
edelacroixv,Kling-Walter,Darkovice
tfriddw,"Kunde, Witting and Funk",Maumere
momandx,Tremblay Inc,Satipo
pmcallany,Jerde LLC,Hamburg
hshicklez,,Bilhó
tlewins10,Hartmann-Bechtelar,
fchorlton11,Hintz-Adams,Placer
,Schaefer-Barrows,
britchman13,"Mills Gutkowski and Hegmann",Shawan
sparton14,Zemlak LLC,Angadanan`

let usuarioActivo = false;
let empresaActivo = false;
let ciudadActivo = false;


function usuario() {
    //Dividimos los datos en 
    let division = listaUsuarios.split("\n");
    let html = '<table>';
    html += '<tr><th> Usuario</th></tr > ';
    for (let i = 0; i < division.length; i++) {
        let usuario = division[i].split(",");
        if (usuario[0] && usuario[0].trim()) {

            html += `<tr><td>${usuario[0]}</td></tr>`;
        }
        //  else {
        //     html += `<tr><td>No hay datos</td></tr>`;
        // }
    }
    html += '</table>';
    // document.getElementById("lienzo").innerHTML = html;
    return html;

}
function empresa() {
    //Dividimos los datos en linea
    let division = listaUsuarios.split("\n");
    let html = '<table>';
    html += '<tr><th> Empresa</th></tr > ';
    for (let i = 0; i < division.length; i++) {
        let empresa = division[i].split(",");
        if (empresa[1] && empresa[1].trim()) {  /*Primero verifica que empresa[1] no sea nulo o indefinido.
            Luego, verifica que el valor en empresa[1] no sea una cadena vacía
             o que no esté compuesto únicamente por espacios en blanco. */
            html += `<tr><td>${empresa[1]}</td></tr>`;
        }

        // else {
        //     html += `<tr><td>No hay datos</td></tr>`;
        // }
    }
    html += '</table>';

    // document.getElementById("lienzo").innerHTML = html;
    return html;
}

function ciudad() {
    //Dividimos los datos en linea
    let division = listaUsuarios.split("\n");
    let html = '<table>';
    html += '<tr><th>Ciudad</th></tr > ';
    for (let i = 0; i < division.length; i++) {
        let ciudad = division[i].split(",");
        if (ciudad[2].trim() && ciudad[2]) {
            html += `<tr><td>${ciudad[2]}</td></tr>`;
        }

        // else {
        //     html += `<tr><td>No hay datos</td></tr>`;
        // }
    }
    html += '</table>';
    // document.getElementById("lienzo").innerHTML = html;
    return html;

}

function juntar() {

    let html = "";/*Para limpiar */

    if (usuarioActivo) {
        html += usuario();
    }
    if (empresaActivo) {
        html +=
            empresa();
    } if (ciudadActivo) {
        html +=
            ciudad();
    }
    document.getElementById("lienzo").innerHTML = html;
}

function usuarioJuntar() {
    usuarioActivo = !usuarioActivo;/*cAMBIAMOS EL ESTADO*/
    juntar();
}

function empresaJuntar() {
    empresaActivo = !empresaActivo;/*cAMBIAMOS EL ESTADO*/
    juntar();
}
function ciudadJuntar() {
    ciudadActivo = !ciudadActivo;/*cAMBIAMOS EL ESTADO*/
    juntar();
}
document.getElementById("btnusuario").addEventListener("click", usuarioJuntar);
document.getElementById("btnempresa").addEventListener("click", empresaJuntar);
document.getElementById("btnciudad").addEventListener("click", ciudadJuntar);
