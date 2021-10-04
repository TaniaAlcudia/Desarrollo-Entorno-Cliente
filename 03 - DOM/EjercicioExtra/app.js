const provincias = new Array("Araba", "Bizkaia", "Gipuzkoa", "Nafarroa", "Lapurdi", "Zuberoa", "Nafarroa Beherea");

const municipios_1 = new Array("Seleccione Municipio", "Vitoria-Gasteiz", "Amurrio", "El Ciego", "La Guardia");
const municipios_2 = new Array("Seleccione Municipio", "Bilbao", "Barakaldo", "Durango", "Elorrio", "Muzkiz");
const municipios_3 = new Array("Seleccione Municipio", "Donostia-San Sebastián", "Arrasate-Mondragón", "Eibar");
const municipios_4 = new Array("Seleccione Municipio", "Iruña", "Burlada", "Estella-Lizarra", "Tafalla");
const municipios_5 = new Array("Seleccione Municipio", "Baiona", "Bastida", "Hendaya", "Miarritze");
const municipios_6 = new Array("Seleccione Municipio", "Maule", "Barkoxe", "Sohüta");
const municipios_7 = new Array("Seleccione Municipio", "Baigorri", "Garazi", "Oztibarre");

const todosMunicipios = [
    [],
    municipios_1,
    municipios_2,
    municipios_3,
    municipios_4,
    municipios_5,
    municipios_6,
    municipios_7,
];

function cargarMunicipios()
{
    const provinciasHtml = document.getElementById('provincias');
    const index = provinciasHtml.selectedIndex;
    const municipiosHtml = document.getElementById('municipios');
    municipiosHtml.onchange = () => 
    {
        const provincia = provinciasHtml[index].value;
        const indexM = municipiosHtml.selectedIndex;
        const municipio = municipiosHtml[indexM].value;
        imprimirMensaje(provincia, municipio);
    }
    
    resetMunicipios();
    
    if (index != 0)
    {
        const municipios = todosMunicipios[index];

        for (let i = 0; i < municipios.length; i++) 
        {
            const opcionMunicipio = document.createElement('option');
            opcionMunicipio.innerHTML = municipios[i];
            opcionMunicipio.value = municipios[i];
            municipiosHtml.appendChild(opcionMunicipio);
        }
    }
    else
    {
        const opcionMunicipio = document.createElement('option');
        opcionMunicipio.innerHTML = "Seleciona Municipio";
        municipiosHtml.appendChild(opcionMunicipio);
    }

}

function resetMunicipios()
{
    const municipiosHtml = document.getElementById('municipios');
    municipiosHtml.innerHTML = ""; 
}

function imprimirMensaje(provincia, municipio)
{
    const mensajeHtml = document.getElementById('mensaje');
    mensajeHtml.innerHTML = "Ha seleccionado <strong>" + municipio + "</strong> en <strong>" + provincia + "</strong>";
}

window.onload = () => {

    const provinciasHtml = document.getElementById('provincias');
    provinciasHtml.onchange = () => cargarMunicipios();

    const opcionProvincia = document.createElement('option');
    opcionProvincia.innerHTML = "Seleccione Provincia";

    provinciasHtml.appendChild(opcionProvincia);

    for (let i = 0; i < provincias.length; i++) 
    {
        const opcionProvincia = document.createElement('option');
        opcionProvincia.innerHTML = provincias[i];
        opcionProvincia.value = provincias[i];
        provinciasHtml.appendChild(opcionProvincia);
    }
}


