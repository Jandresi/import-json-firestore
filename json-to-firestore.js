const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBgCN_zVkp0b0Z8I1U6qP2BSlSkwjKj_XQ",
    authDomain: "sop3-a207a.firebaseapp.com",
    projectId: "sop3-a207a"
});

var db = firebase.firestore();

var llamadas = [{
        "id": 1,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-02",
        "contrato": 90535,
        "barrio": "Bellavista",
        "motivo": "Información",
        "descripcion": "Proceso de desafiliación",
        "solucion": "Se da información"
    },
    {
        "id": 2,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-02",
        "contrato": 3682,
        "barrio": "6 De Enero",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 3,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-02",
        "contrato": 22687,
        "barrio": "Centro",
        "motivo": "Información",
        "descripcion": "Traslado pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 4,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-02",
        "contrato": 23280,
        "barrio": "Urb. San Antonio 2",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 5,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-02",
        "contrato": "W21169",
        "barrio": "Pueblo Nuevo",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 6,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-02",
        "contrato": 14195,
        "barrio": "Cristal",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 7,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-02",
        "contrato": 24047,
        "barrio": "Firme",
        "motivo": "Información",
        "descripcion": "Traslado pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 8,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-02",
        "contrato": "N/A",
        "barrio": "N/A",
        "motivo": "Información",
        "descripcion": "Proceso de afiliación",
        "solucion": "Se da información"
    },
    {
        "id": 9,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-02",
        "contrato": 21783,
        "barrio": "El Triunfo",
        "motivo": "Información",
        "descripcion": "Proceso de desafiliación",
        "solucion": "Se da información"
    },
    {
        "id": 10,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-02",
        "contrato": 24645,
        "barrio": "Urb. San Antonio 2",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 11,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-02",
        "contrato": 12680,
        "barrio": "Paloseco",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 12,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-02",
        "contrato": 22669,
        "barrio": "Cristal",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 13,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-02",
        "contrato": 10259,
        "barrio": "El Carmen",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 14,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-02",
        "contrato": 21079,
        "barrio": "Eucaristico",
        "motivo": "Disponibilidad",
        "descripcion": "Sin ambos servicios",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 15,
        "atiende": "Comodín",
        "fecha": "2021-01-02",
        "contrato": 22147,
        "barrio": "Comfamar",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 16,
        "atiende": "Comodín",
        "fecha": "2021-01-02",
        "contrato": "W6609",
        "barrio": "Centenario",
        "motivo": "Disponibilidad",
        "descripcion": "Sin señal de TV",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 17,
        "atiende": "Comodín",
        "fecha": "2021-01-02",
        "contrato": "W6609",
        "barrio": "Centenario",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 18,
        "atiende": "Comodín",
        "fecha": "2021-01-02",
        "contrato": 1824,
        "barrio": "Independencia",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para instaladores"
    },
    {
        "id": 19,
        "atiende": "Comodín",
        "fecha": "2021-01-02",
        "contrato": 22961,
        "barrio": "Urb. San Antonio 2",
        "motivo": "Disponibilidad",
        "descripcion": "Sin ambos servicios",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 20,
        "atiende": "Comodín",
        "fecha": "2021-01-02",
        "contrato": 23483,
        "barrio": "Cristal",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 21,
        "atiende": "Comodín",
        "fecha": "2021-01-02",
        "contrato": "N/A",
        "barrio": "Centro",
        "motivo": "Información",
        "descripcion": "Proceso de afiliación",
        "solucion": "Se da información"
    },
    {
        "id": 22,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 23889,
        "barrio": "Centro",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 23,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 13521,
        "barrio": "Rockefeller",
        "motivo": "Información",
        "descripcion": "Traslado pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 24,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 11678,
        "barrio": "Transformacion",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se da información"
    },
    {
        "id": 25,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 22961,
        "barrio": "Urb. San Antonio 2",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 26,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 16494,
        "barrio": "Cristal",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 27,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 20963,
        "barrio": "Oriente",
        "motivo": "Calidad",
        "descripcion": "TV lluviosa y caídas frecuentes",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 28,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 21296,
        "barrio": "Juan 23",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 29,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 8645,
        "barrio": "Urb. San Antonio 2",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 30,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 23472,
        "barrio": "El Triunfo",
        "motivo": "Calidad",
        "descripcion": "Lentitud",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 31,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 15106,
        "barrio": "San Luis",
        "motivo": "Disponibilidad",
        "descripcion": "Sin ambos servicios",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 32,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 16365,
        "barrio": "Antonio Nariño",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 33,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": "N/A",
        "barrio": "Bellavista",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 34,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 9340,
        "barrio": "Juan 23",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 35,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 37257,
        "barrio": "Miraflores",
        "motivo": "Calidad",
        "descripcion": "Señal lluviosa",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 36,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": "N/A",
        "barrio": "Los Pinos",
        "motivo": "Información",
        "descripcion": "Proceso de afiliación",
        "solucion": "Se da información"
    },
    {
        "id": 37,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 17109,
        "barrio": "Juan 23",
        "motivo": "Disponibilidad",
        "descripcion": "Sin ambos servicios",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 38,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 23140,
        "barrio": "Juan 23",
        "motivo": "Disponibilidad",
        "descripcion": "Sin ambos servicios",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 39,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 1276,
        "barrio": "Independencia",
        "motivo": "Calidad",
        "descripcion": "Lentitud",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 40,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 21429,
        "barrio": "Bellavista",
        "motivo": "Calidad",
        "descripcion": "TV lluviosa y caídas frecuentes",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 41,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 21429,
        "barrio": "Bellavista",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 42,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 21370,
        "barrio": "Cabal Pombo",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 43,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 23491,
        "barrio": "Bellavista",
        "motivo": "Información",
        "descripcion": "Traslado pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 44,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 22179,
        "barrio": "Transformacion",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 45,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 23010,
        "barrio": "Inmaculada",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 46,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": "N/A",
        "barrio": "N/A",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 47,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 22133,
        "barrio": "Porvenir",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 48,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": "W20095",
        "barrio": "Juan 23",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se da información"
    },
    {
        "id": 49,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 21194,
        "barrio": "Independencia",
        "motivo": "Disponibilidad",
        "descripcion": "Módem formateado",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 50,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 18346,
        "barrio": "El Carmen",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se da información"
    },
    {
        "id": 51,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 63946,
        "barrio": "Jardin",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se toma O de S para instaladores"
    },
    {
        "id": 52,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": "N/A",
        "barrio": "Transformacion",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 53,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 10650,
        "barrio": "Playita",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 54,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 16561,
        "barrio": "Modelo",
        "motivo": "Información",
        "descripcion": "Proceso de afiliación",
        "solucion": "Se da información"
    },
    {
        "id": 55,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 21275,
        "barrio": "Urb. San Antonio 2",
        "motivo": "Facturación",
        "descripcion": "Cortado en sistema",
        "solucion": "Se remite con otra persona"
    },
    {
        "id": 56,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 20402,
        "barrio": "Maria Eugenia",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 57,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 23784,
        "barrio": "Bellavista",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 58,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 22024,
        "barrio": "San Luis",
        "motivo": "Facturación",
        "descripcion": "Consulta de saldo",
        "solucion": "Se da información"
    },
    {
        "id": 59,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 18733,
        "barrio": "Cristal",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 60,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 24550,
        "barrio": "Bellavista",
        "motivo": "Información",
        "descripcion": "Instalación pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 61,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 22614,
        "barrio": "Alfonso Lopez Michelsen",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se da información"
    },
    {
        "id": 62,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 12356,
        "barrio": "Los Pinos",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se da información"
    },
    {
        "id": 63,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": "N/A",
        "barrio": "Rockefeller",
        "motivo": "Información",
        "descripcion": "Proceso de afiliación",
        "solucion": "Se da información"
    },
    {
        "id": 64,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 14188,
        "barrio": "Firme",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Procedimiento general"
    },
    {
        "id": 65,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 21275,
        "barrio": "Urb. San Antonio 2",
        "motivo": "Facturación",
        "descripcion": "Cortado en sistema",
        "solucion": "Se remite con otra persona"
    },
    {
        "id": 66,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 21252,
        "barrio": "Cascajal",
        "motivo": "Facturación",
        "descripcion": "Cortado en sistema",
        "solucion": "Se remite con otra persona"
    },
    {
        "id": 67,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 19179,
        "barrio": "Eucaristico",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 68,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 14651,
        "barrio": "Cascajal",
        "motivo": "Calidad",
        "descripcion": "Lentitud",
        "solucion": "Se da información"
    },
    {
        "id": 69,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 10650,
        "barrio": "Playita",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 70,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 23432,
        "barrio": "Centro",
        "motivo": "Calidad",
        "descripcion": "TV lluviosa y caídas frecuentes",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 71,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 7294,
        "barrio": "Centenario",
        "motivo": "Información",
        "descripcion": "Traslado pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 72,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": "N/A",
        "barrio": "Maria Eugenia",
        "motivo": "Información",
        "descripcion": "Proceso de afiliación",
        "solucion": "Se da información"
    },
    {
        "id": 73,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 23001,
        "barrio": "Urb. San Antonio 2",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 74,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 23001,
        "barrio": "Urb. San Antonio 2",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 75,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 12345678,
        "barrio": "Ciudadela Colpuertos",
        "motivo": "Disponibilidad",
        "descripcion": "Módem formateado",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 76,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 20548,
        "barrio": "Miramar",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 77,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-04",
        "contrato": 10920,
        "barrio": "Transformacion",
        "motivo": "Información",
        "descripcion": "Traslado pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 78,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 13647,
        "barrio": "Antonio Nariño",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 79,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 17280,
        "barrio": "Urb. San Antonio 1",
        "motivo": "Disponibilidad",
        "descripcion": "Sin ambos servicios",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 80,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 20741,
        "barrio": "Urb. San Antonio 1",
        "motivo": "Facturación",
        "descripcion": "Consulta de saldo",
        "solucion": "Se da información"
    },
    {
        "id": 81,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 19805,
        "barrio": "Centro",
        "motivo": "Información",
        "descripcion": "Proceso de desafiliación",
        "solucion": "Se da información"
    },
    {
        "id": 82,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 14683,
        "barrio": "Urb. San Antonio 2",
        "motivo": "Disponibilidad",
        "descripcion": "Sin ambos servicios",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 83,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 22354,
        "barrio": "Miraflores",
        "motivo": "Facturación",
        "descripcion": "Consulta de saldo",
        "solucion": "Se da información"
    },
    {
        "id": 84,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 24047,
        "barrio": "firme",
        "motivo": "Información",
        "descripcion": "Traslado pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 85,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 17935,
        "barrio": "Rockefeller",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 86,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 21476,
        "barrio": "Gran Colombiana",
        "motivo": "Calidad",
        "descripcion": "Lentitud",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 87,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 93602,
        "barrio": "Colon",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 88,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 19337,
        "barrio": "Kennedy",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 89,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 21990,
        "barrio": "Urb. San Antonio 1",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 90,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 14506,
        "barrio": "Antonio Nariño",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 91,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 21694,
        "barrio": "Comfamar",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 92,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 19886,
        "barrio": "Inmaculada",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 93,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 23121,
        "barrio": "Antonio Nariño",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 94,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 23119,
        "barrio": "Urb. San Antonio 2",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 95,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 17131,
        "barrio": "Rockefeller",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 96,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 17057,
        "barrio": "Antonio Nariño",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 97,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 13344,
        "barrio": "Urb. San Antonio 2",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 98,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 77289,
        "barrio": "Juan 23",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 99,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": "W20095",
        "barrio": "Juan 23",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 100,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 22978,
        "barrio": "El Ruiz",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 101,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 24198,
        "barrio": "Transformacion",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 102,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 93194,
        "barrio": "Nayita",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 103,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 16531,
        "barrio": "La Dignidad",
        "motivo": "Información",
        "descripcion": "Proceso de desafiliación",
        "solucion": "Se da información"
    },
    {
        "id": 104,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 24013,
        "barrio": "Ciudadela Nueva Buenaventura",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 105,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 12536,
        "barrio": "Ciudadela Colpuertos",
        "motivo": "Facturación",
        "descripcion": "Consulta de saldo",
        "solucion": "Se da información"
    },
    {
        "id": 106,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 20898,
        "barrio": "Urb. San Antonio 2",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 107,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 24190,
        "barrio": "Porvenir",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 108,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 8506,
        "barrio": "Bellavista",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 109,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 21252,
        "barrio": "Cascajal",
        "motivo": "Facturación",
        "descripcion": "Consulta de saldo",
        "solucion": "Se da información"
    },
    {
        "id": 110,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 21766,
        "barrio": "Bahia",
        "motivo": "Calidad",
        "descripcion": "Lentitud",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 111,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 13521,
        "barrio": "Rockefeller",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 112,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 5301,
        "barrio": "12 De Abril",
        "motivo": "Calidad",
        "descripcion": "Lentitud",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 113,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 23969,
        "barrio": "Juan 23",
        "motivo": "Facturación",
        "descripcion": "Consulta de saldo",
        "solucion": "Se da información"
    },
    {
        "id": 114,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 19225,
        "barrio": "Rockefeller",
        "motivo": "Disponibilidad",
        "descripcion": "Sin señal de TV",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 115,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 20963,
        "barrio": "Oriente",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 116,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 93602,
        "barrio": "Colon",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se remite con otra persona"
    },
    {
        "id": 117,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 15940,
        "barrio": "Pueblo Nuevo",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 118,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 54449,
        "barrio": "Centenario",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 119,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 11427,
        "barrio": "Colon",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 120,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 16351,
        "barrio": "Alfonso Lopez Michelsen",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 121,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 7067,
        "barrio": "Antonio Nariño",
        "motivo": "Información",
        "descripcion": "Traslado pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 122,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 20335,
        "barrio": "Juan 23",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 123,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": 88468,
        "barrio": "La Campiña",
        "motivo": "Disponibilidad",
        "descripcion": "Sin señal de TV",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 124,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-04",
        "contrato": "N/A",
        "barrio": "N/A",
        "motivo": "Información",
        "descripcion": "Proceso de afiliación",
        "solucion": "Se da información"
    },
    {
        "id": 125,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 23388,
        "barrio": "Independencia",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 126,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 24143,
        "barrio": "San Buenaventura",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 127,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 19489,
        "barrio": "Jardin",
        "motivo": "Disponibilidad",
        "descripcion": "Módem formateado",
        "solucion": "Se da información"
    },
    {
        "id": 128,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 21842,
        "barrio": "Kennedy",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 129,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 19310,
        "barrio": "Jardin",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 130,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 20518,
        "barrio": "Transformacion",
        "motivo": "Disponibilidad",
        "descripcion": "Módem formateado",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 131,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 21681,
        "barrio": "Independencia",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 132,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 5678,
        "barrio": "Independencia",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 133,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 18688,
        "barrio": "Centenario",
        "motivo": "Calidad",
        "descripcion": "Lentitud",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 134,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 23239,
        "barrio": "El Carmen",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Procedimiento general"
    },
    {
        "id": 135,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": "W12025",
        "barrio": "Centro",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 136,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 20695,
        "barrio": "Juan 23",
        "motivo": "Calidad",
        "descripcion": "Lentitud",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 137,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 21203,
        "barrio": "Bellavista",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 138,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 92318,
        "barrio": "Independencia",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Procedimiento general"
    },
    {
        "id": 139,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 13019,
        "barrio": "Juan 23",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 140,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 18346,
        "barrio": "El Carmen",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 141,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 3512,
        "barrio": "Panamericano",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 142,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 9121,
        "barrio": "Bolivar",
        "motivo": "Calidad",
        "descripcion": "Señal lluviosa",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 143,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": "N/A",
        "barrio": "Nayita",
        "motivo": "Información",
        "descripcion": "Proceso de afiliación",
        "solucion": "Se da información"
    },
    {
        "id": 144,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": "N/A",
        "barrio": "N/A",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 145,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": "N/A",
        "barrio": "Transformacion",
        "motivo": "Información",
        "descripcion": "Número del coordinador",
        "solucion": "Se da información"
    },
    {
        "id": 146,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": "N/A",
        "barrio": "Lleras",
        "motivo": "Información",
        "descripcion": "Proceso de afiliación",
        "solucion": "Se da información"
    },
    {
        "id": 147,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 83387,
        "barrio": "Independencia",
        "motivo": "Calidad",
        "descripcion": "Señal lluviosa",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 148,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 23667,
        "barrio": "Independencia",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 149,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 20075,
        "barrio": "Los Alamos",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 150,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": "W11502",
        "barrio": "Brisas Del Pacifico",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 151,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 18339,
        "barrio": "El Triunfo",
        "motivo": "Información",
        "descripcion": "Instalación pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 152,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": "N/A",
        "barrio": "El Triunfo",
        "motivo": "Información",
        "descripcion": "Proceso de afiliación",
        "solucion": "Se da información"
    },
    {
        "id": 153,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": "W23321",
        "barrio": "San Francisco",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 154,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": "N/A",
        "barrio": "El Triunfo",
        "motivo": "Información",
        "descripcion": "Proceso de afiliación",
        "solucion": "Se da información"
    },
    {
        "id": 155,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 22269,
        "barrio": "Centenario",
        "motivo": "Calidad",
        "descripcion": "Lentitud",
        "solucion": "Procedimiento general"
    },
    {
        "id": 156,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 22332,
        "barrio": "Jorge",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 157,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 16494,
        "barrio": "Cristal",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 158,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 18591,
        "barrio": "Juan 23",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Procedimiento general"
    },
    {
        "id": 159,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": "W7095",
        "barrio": "Independencia",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se remite con otra persona"
    },
    {
        "id": 160,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 21079,
        "barrio": "Eucaristico",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 161,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 23738,
        "barrio": "Jorge",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 162,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 20283,
        "barrio": "Los Pinos",
        "motivo": "Facturación",
        "descripcion": "Cortado en sistema",
        "solucion": "Se remite con otra persona"
    },
    {
        "id": 163,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 12246,
        "barrio": "Juan 23",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 164,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 12465,
        "barrio": "Miramar",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 165,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 21843,
        "barrio": "Olimpico",
        "motivo": "Calidad",
        "descripcion": "Señal lluviosa",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 166,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 13954,
        "barrio": "Los Pinos",
        "motivo": "Facturación",
        "descripcion": "Cortado en sistema",
        "solucion": "Se remite con otra persona"
    },
    {
        "id": 167,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 15901,
        "barrio": "Panamericano",
        "motivo": "Facturación",
        "descripcion": "Cortado en sistema",
        "solucion": "Se remite con otra persona"
    },
    {
        "id": 168,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 85742,
        "barrio": "Nueva Colombia",
        "motivo": "Disponibilidad",
        "descripcion": "Sin señal de TV",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 169,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-04",
        "contrato": 34368,
        "barrio": "Jorge",
        "motivo": "Calidad",
        "descripcion": "Señal lluviosa",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 170,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 6195,
        "barrio": "Colon",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 171,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 54449,
        "barrio": "Centenario",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 172,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 11727,
        "barrio": "Centro",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 173,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 91090,
        "barrio": "Eucaristico",
        "motivo": "Calidad",
        "descripcion": "Señal lluviosa",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 174,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 17916,
        "barrio": "Americas",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 175,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 5408,
        "barrio": "Union De Vivienda",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Procedimiento general"
    },
    {
        "id": 176,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": "N/A",
        "barrio": "N/A",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 177,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 23472,
        "barrio": "El Triunfo",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se remite con otra persona"
    },
    {
        "id": 178,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 8921,
        "barrio": "Bellavista",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 179,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 11162,
        "barrio": "Independencia",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 180,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 24645,
        "barrio": "Urb. San Antonio 1",
        "motivo": "Información",
        "descripcion": "Instalación pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 181,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 7183,
        "barrio": "El Progreso",
        "motivo": "Disponibilidad",
        "descripcion": "Módem formateado",
        "solucion": "Se da información"
    },
    {
        "id": 182,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 1583,
        "barrio": "Centro",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 183,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 23652,
        "barrio": "Los Pinos",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 184,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 2813,
        "barrio": "Los Alamos",
        "motivo": "Calidad",
        "descripcion": "Señal lluviosa",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 185,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 19029,
        "barrio": "Bellavista",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Procedimiento general"
    },
    {
        "id": 186,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 51435,
        "barrio": "Cascajal",
        "motivo": "Calidad",
        "descripcion": "Señal lluviosa",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 187,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 18591,
        "barrio": "Juan 23",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 188,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 83387,
        "barrio": "Independencia",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 189,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 22196,
        "barrio": "El Triunfo",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 190,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 16346,
        "barrio": "Juan 23",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 191,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 24657,
        "barrio": "12 De Abril",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se remite con otra persona"
    },
    {
        "id": 192,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 21085,
        "barrio": "Santa Cruz",
        "motivo": "Facturación",
        "descripcion": "Cortado en sistema",
        "solucion": "Se remite con otra persona"
    },
    {
        "id": 193,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 24258,
        "barrio": "Centro",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se remite con otra persona"
    },
    {
        "id": 194,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 20657,
        "barrio": "El Carmen",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 195,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 8888,
        "barrio": "Transformacion",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 196,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": "W13941",
        "barrio": "6 De Enero",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 197,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 24565,
        "barrio": "Transformacion",
        "motivo": "Información",
        "descripcion": "Instalación pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 198,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 20657,
        "barrio": "El Carmen",
        "motivo": "Facturación",
        "descripcion": "Cortado en sistema",
        "solucion": "Se remite con otra persona"
    },
    {
        "id": 199,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 17846,
        "barrio": "Brisas Del Pacifico",
        "motivo": "Calidad",
        "descripcion": "Señal lluviosa",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 200,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 24258,
        "barrio": "centro",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 201,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 23321,
        "barrio": "San Francisco",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 202,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 15303,
        "barrio": "Nayita",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 203,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 27410,
        "barrio": "Bosque",
        "motivo": "Calidad",
        "descripcion": "Señal lluviosa",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 204,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 21085,
        "barrio": "Santa Cruz",
        "motivo": "Facturación",
        "descripcion": "Cortado en sistema",
        "solucion": "Se remite con otra persona"
    },
    {
        "id": 205,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 21766,
        "barrio": "Bahia",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 206,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 23074,
        "barrio": "Bellavista",
        "motivo": "Calidad",
        "descripcion": "Señal lluviosa",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 207,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-05",
        "contrato": 8251,
        "barrio": "Bellavista",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 208,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 16494,
        "barrio": "Cristal",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 209,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 11162,
        "barrio": "Independencia",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 210,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": "W6208",
        "barrio": "Bellavista",
        "motivo": "Información",
        "descripcion": "Proceso de desafiliación",
        "solucion": "Se da información"
    },
    {
        "id": 211,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 3638,
        "barrio": "Americas",
        "motivo": "Disponibilidad",
        "descripcion": "Sin señal de TV",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 212,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 17999,
        "barrio": "Pueblo Nuevo",
        "motivo": "Información",
        "descripcion": "Proceso de desafiliación",
        "solucion": "Se da información"
    },
    {
        "id": 213,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 24047,
        "barrio": "Firme",
        "motivo": "Información",
        "descripcion": "Traslado pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 214,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": "N/A",
        "barrio": "N/A",
        "motivo": "Información",
        "descripcion": "Proceso de afiliación",
        "solucion": "Se da información"
    },
    {
        "id": 215,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 22393,
        "barrio": "Bahia",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 216,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 92176,
        "barrio": "Oriente",
        "motivo": "Disponibilidad",
        "descripcion": "Sin señal de TV",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 217,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 4716,
        "barrio": "Independencia",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 218,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 22856,
        "barrio": "Antonio Nariño",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 219,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 18339,
        "barrio": "El Triunfo",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 220,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 55774,
        "barrio": "Transformacion",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 221,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 22326,
        "barrio": "Centro",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 222,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 19653,
        "barrio": "Cascajal",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 223,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 24645,
        "barrio": "Urb. San Antonio 1",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 224,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": "N/A",
        "barrio": "N/A",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 225,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 79432,
        "barrio": "Transformacion",
        "motivo": "Disponibilidad",
        "descripcion": "Sin señal de TV",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 226,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 17539,
        "barrio": "Kennedy",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 227,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 12536,
        "barrio": "Ciudadela Colpuertos",
        "motivo": "Facturación",
        "descripcion": "Consulta de saldo",
        "solucion": "Se da información"
    },
    {
        "id": 228,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 77289,
        "barrio": "Juan 23",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 229,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 21971,
        "barrio": "El Triunfo",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 230,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 17616,
        "barrio": "Independencia",
        "motivo": "Disponibilidad",
        "descripcion": "Sin señal de TV",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 231,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 16452,
        "barrio": "Manglares",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 232,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 22147,
        "barrio": "Comfamar",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 233,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": "W5336",
        "barrio": "Transformacion",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 234,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 21189,
        "barrio": "Kennedy",
        "motivo": "Facturación",
        "descripcion": "Consulta de saldo",
        "solucion": "Se remite con otra persona"
    },
    {
        "id": 235,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": "W13941",
        "barrio": "6 De Enero",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 236,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 18339,
        "barrio": "El Triunfo",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 237,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 20741,
        "barrio": "Urb. San Antonio 1",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 238,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 4062,
        "barrio": "Bellavista",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 239,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 21993,
        "barrio": "Ciudadela Colpuertos",
        "motivo": "Calidad",
        "descripcion": "Lentitud",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 240,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 15303,
        "barrio": "Nayita",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 241,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 24138,
        "barrio": "Nayita",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 242,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 21189,
        "barrio": "Kennedy",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 243,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 23118,
        "barrio": "Antonio Nariño",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 244,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 23074,
        "barrio": "Bellavista",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 245,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": 11427,
        "barrio": "Colon",
        "motivo": "Calidad",
        "descripcion": "Lentitud",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 246,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-05",
        "contrato": "N/A",
        "barrio": "N/A",
        "motivo": "Información",
        "descripcion": "Proceso de afiliación",
        "solucion": "Se da información"
    },
    {
        "id": 247,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": 21734,
        "barrio": "Transformacion",
        "motivo": "Calidad",
        "descripcion": "TV lluviosa y caídas frecuentes",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 248,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": 18424,
        "barrio": "Pueblo Nuevo",
        "motivo": "Calidad",
        "descripcion": "Lentitud",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 249,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": 64808,
        "barrio": "Oriente",
        "motivo": "Calidad",
        "descripcion": "Señal lluviosa",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 250,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": 8225,
        "barrio": "Porvenir",
        "motivo": "Calidad",
        "descripcion": "Señal lluviosa",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 251,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": 24296,
        "barrio": "Miraflores",
        "motivo": "Disponibilidad",
        "descripcion": "Módem formateado",
        "solucion": "Se remite con otra persona"
    },
    {
        "id": 252,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": 15181,
        "barrio": "Cascajal",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 253,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": 23362,
        "barrio": "Urb. San Antonio 2",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 254,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": 11619,
        "barrio": "Santa Fe",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 255,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": 93602,
        "barrio": "Colon",
        "motivo": "Información",
        "descripcion": "Instalación pendiente",
        "solucion": "Se remite con otra persona"
    },
    {
        "id": 256,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": 22254,
        "barrio": "Brisas Del Pacifico",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 257,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": 13023,
        "barrio": "Cascajal",
        "motivo": "Calidad",
        "descripcion": "Lentitud",
        "solucion": "Procedimiento general"
    },
    {
        "id": 258,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": 8359,
        "barrio": "Paloseco",
        "motivo": "Disponibilidad",
        "descripcion": "Módem no enciende",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 259,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": 21189,
        "barrio": "Kennedy",
        "motivo": "Facturación",
        "descripcion": "Cortado en sistema",
        "solucion": "Se remite con otra persona"
    },
    {
        "id": 260,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": 18263,
        "barrio": "Alfonso Lopez Michelsen",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Procedimiento general"
    },
    {
        "id": 261,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": "N/A",
        "barrio": "Dona Ceci",
        "motivo": "Información",
        "descripcion": "Proceso de afiliación",
        "solucion": "Se da información"
    },
    {
        "id": 262,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": 14853,
        "barrio": "Antonio Nariño",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 263,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": "N/A",
        "barrio": "Dona Ceci",
        "motivo": "Información",
        "descripcion": "Número del coordinador",
        "solucion": "Se da información"
    },
    {
        "id": 264,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": 17539,
        "barrio": "Kennedy",
        "motivo": "Facturación",
        "descripcion": "Consulta de saldo",
        "solucion": "Se da información"
    },
    {
        "id": 265,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": "N/A",
        "barrio": "El Triunfo",
        "motivo": "Información",
        "descripcion": "Proceso de afiliación",
        "solucion": "Se da información"
    },
    {
        "id": 266,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": 9436,
        "barrio": "Gran Colombiana",
        "motivo": "Información",
        "descripcion": "Cobertura de WIFI",
        "solucion": "Se da información"
    },
    {
        "id": 267,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": 13694,
        "barrio": "Juan 23",
        "motivo": "Disponibilidad",
        "descripcion": "Módem formateado",
        "solucion": "Se da información"
    },
    {
        "id": 268,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": 9436,
        "barrio": "Gran Colombiana",
        "motivo": "Información",
        "descripcion": "Cobertura de WIFI",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 269,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": 2940,
        "barrio": "Pueblo Nuevo",
        "motivo": "Disponibilidad",
        "descripcion": "Sin señal de TV",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 270,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": 14819,
        "barrio": "Transformacion",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 271,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": 13519,
        "barrio": "Independencia",
        "motivo": "Calidad",
        "descripcion": "Lentitud",
        "solucion": "Procedimiento general"
    },
    {
        "id": 272,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": 91631,
        "barrio": "Colon",
        "motivo": "Calidad",
        "descripcion": "Señal lluviosa",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 273,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": 93602,
        "barrio": "Colon",
        "motivo": "Información",
        "descripcion": "Instalación pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 274,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": 7696,
        "barrio": "Pueblo Nuevo",
        "motivo": "Información",
        "descripcion": "Cobertura de WIFI",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 275,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": 8376,
        "barrio": "Brisas Del Mar",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 276,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": 35296,
        "barrio": "Paloseco",
        "motivo": "Calidad",
        "descripcion": "Señal lluviosa",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 277,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": 23570,
        "barrio": "Independencia",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 278,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": 92414,
        "barrio": "Independencia",
        "motivo": "Disponibilidad",
        "descripcion": "Módem formateado",
        "solucion": "Se da información"
    },
    {
        "id": 279,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-05",
        "contrato": 6671,
        "barrio": "Independencia",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se remite con otra persona"
    },
    {
        "id": 280,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 10259,
        "barrio": "El Carmen",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 281,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 12536,
        "barrio": "Ciudadela Colpuertos",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 282,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 15081,
        "barrio": "Centro",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 283,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 6728,
        "barrio": "Los Pinos",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 284,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 21507,
        "barrio": "Urb. San Antonio 1",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se toma O de S para instaladores"
    },
    {
        "id": 285,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 23613,
        "barrio": "Cristal",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Procedimiento general"
    },
    {
        "id": 286,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 21194,
        "barrio": "Independencia",
        "motivo": "Disponibilidad",
        "descripcion": "Módem formateado",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 287,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 23552,
        "barrio": "Ciudadela Colpuertos",
        "motivo": "Información",
        "descripcion": "Número del coordinador",
        "solucion": "Se da información"
    },
    {
        "id": 288,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": "N/A",
        "barrio": "N/A",
        "motivo": "Información",
        "descripcion": "Cobertura de WIFI",
        "solucion": "Se da información"
    },
    {
        "id": 289,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 18339,
        "barrio": "El Triunfo",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 290,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 24258,
        "barrio": "Centro",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 291,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 93602,
        "barrio": "Colon",
        "motivo": "Información",
        "descripcion": "Instalación pendiente",
        "solucion": "Se remite con otra persona"
    },
    {
        "id": 292,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 23569,
        "barrio": "Santa Fe",
        "motivo": "Información",
        "descripcion": "Proceso de desafiliación",
        "solucion": "Se da información"
    },
    {
        "id": 293,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 16959,
        "barrio": "Panamericano",
        "motivo": "Facturación",
        "descripcion": "Cortado en sistema",
        "solucion": "Se da información"
    },
    {
        "id": 294,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 10972,
        "barrio": "Pueblo Nuevo",
        "motivo": "Disponibilidad",
        "descripcion": "Módem no enciende",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 295,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 8921,
        "barrio": "Bellavista",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 296,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 19837,
        "barrio": "Cristal",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se da información"
    },
    {
        "id": 297,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 22196,
        "barrio": "El Triunfo",
        "motivo": "Disponibilidad",
        "descripcion": "Módem formateado",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 298,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 19467,
        "barrio": "Maria Eugenia",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 299,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 18672,
        "barrio": "San Buenaventura",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 300,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 19975,
        "barrio": "Independencia",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se remite con otra persona"
    },
    {
        "id": 301,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": "N/A",
        "barrio": "Centro",
        "motivo": "Información",
        "descripcion": "Proceso de afiliación",
        "solucion": "Se da información"
    },
    {
        "id": 302,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 22911,
        "barrio": "Americas",
        "motivo": "Disponibilidad",
        "descripcion": "Sin ambos servicios",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 303,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 14185,
        "barrio": "Centenario",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 304,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 23566,
        "barrio": "Kennedy",
        "motivo": "Disponibilidad",
        "descripcion": "Sin ambos servicios",
        "solucion": "Se da información"
    },
    {
        "id": 305,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 23893,
        "barrio": "Camilo Torres",
        "motivo": "Facturación",
        "descripcion": "Consulta de saldo",
        "solucion": "Se da información"
    },
    {
        "id": 306,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 73216,
        "barrio": "Pueblo Nuevo",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 307,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 20916,
        "barrio": "Porvenir",
        "motivo": "Facturación",
        "descripcion": "Reclamo por saldo",
        "solucion": "Se da información"
    },
    {
        "id": 308,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 21693,
        "barrio": "Comfamar",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se da información"
    },
    {
        "id": 309,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 16515,
        "barrio": "Kennedy",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 310,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 15106,
        "barrio": "San Luis",
        "motivo": "Disponibilidad",
        "descripcion": "Sin ambos servicios",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 311,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 22133,
        "barrio": "Porvenir",
        "motivo": "Disponibilidad",
        "descripcion": "Sin ambos servicios",
        "solucion": "Se da información"
    },
    {
        "id": 312,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": "W15780",
        "barrio": "Paloseco",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 313,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 21762,
        "barrio": "Porvenir",
        "motivo": "Disponibilidad",
        "descripcion": "Sin ambos servicios",
        "solucion": "Se da información"
    },
    {
        "id": 314,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 16349,
        "barrio": "Juan 23",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 315,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 24657,
        "barrio": "12 De Abril",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 316,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 77670,
        "barrio": "Lleras",
        "motivo": "Calidad",
        "descripcion": "Señal lluviosa",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 317,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 30845,
        "barrio": "Rockefeller",
        "motivo": "Calidad",
        "descripcion": "Señal lluviosa",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 318,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 18623,
        "barrio": "Antonio Nariño",
        "motivo": "Calidad",
        "descripcion": "TV lluviosa y caídas frecuentes",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 319,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 18623,
        "barrio": "Antonio Nariño",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 320,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 23473,
        "barrio": "El Triunfo",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 321,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 4772,
        "barrio": "Cascajal",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 322,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 23533,
        "barrio": "Centro",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 323,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 24258,
        "barrio": "Centro",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se remite con otra persona"
    },
    {
        "id": 324,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-06",
        "contrato": 19467,
        "barrio": "Maria Eugenia",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 325,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": 53610,
        "barrio": "Centenario",
        "motivo": "Calidad",
        "descripcion": "Señal lluviosa",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 326,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": 14463,
        "barrio": "Oriente",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 327,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": 13344,
        "barrio": "Urb. San Antonio 2",
        "motivo": "Calidad",
        "descripcion": "Señal lluviosa",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 328,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": "N/A",
        "barrio": "Cascajal",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 329,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": "N/A",
        "barrio": "Centro",
        "motivo": "Información",
        "descripcion": "Número del coordinador",
        "solucion": "Se da información"
    },
    {
        "id": 330,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": 21113,
        "barrio": "Independencia",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 331,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": 24047,
        "barrio": "Firme",
        "motivo": "Información",
        "descripcion": "Traslado pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 332,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": "N/A",
        "barrio": "Independencia",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 333,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": "N/A",
        "barrio": "Cascajal",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 334,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": 92420,
        "barrio": "Santa Fe",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Se da información"
    },
    {
        "id": 335,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": 11041,
        "barrio": "Galeon",
        "motivo": "Facturación",
        "descripcion": "Consulta de saldo",
        "solucion": "Se da información"
    },
    {
        "id": 336,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": 7472,
        "barrio": "Bolivar",
        "motivo": "Facturación",
        "descripcion": "Consulta de saldo",
        "solucion": "Se da información"
    },
    {
        "id": 337,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": 4665,
        "barrio": "Ciudadela Nueva Buenaventura",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 338,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": "N/A",
        "barrio": "Kennedy",
        "motivo": "Información",
        "descripcion": "Puntos de pago",
        "solucion": "Se da información"
    },
    {
        "id": 339,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": 20533,
        "barrio": "Colon",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 340,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": 3808,
        "barrio": "Paloseco",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 341,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": 23517,
        "barrio": "Cristal",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 342,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": 22978,
        "barrio": "El Ruiz",
        "motivo": "Disponibilidad",
        "descripcion": "Módem formateado",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 343,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": 22978,
        "barrio": "El Ruiz",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 344,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": 14724,
        "barrio": "Cascajal",
        "motivo": "Calidad",
        "descripcion": "Lentitud",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 345,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": 16498,
        "barrio": "Centro",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se da información"
    },
    {
        "id": 346,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": "W13932",
        "barrio": "6 De Enero",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 347,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": 1224,
        "barrio": "Cascajal",
        "motivo": "Facturación",
        "descripcion": "Consulta de saldo",
        "solucion": "Se da información"
    },
    {
        "id": 348,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": 79260,
        "barrio": "Antonio Nariño",
        "motivo": "Facturación",
        "descripcion": "Consulta de saldo",
        "solucion": "Se da información"
    },
    {
        "id": 349,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": 19146,
        "barrio": "Pueblo Nuevo",
        "motivo": "Información",
        "descripcion": "Traslado pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 350,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": 24567,
        "barrio": "Americas",
        "motivo": "Información",
        "descripcion": "Instalación pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 351,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": 22269,
        "barrio": "Centenario",
        "motivo": "Calidad",
        "descripcion": "Lentitud",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 352,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": 11277,
        "barrio": "Jorge",
        "motivo": "Calidad",
        "descripcion": "Lentitud",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 353,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": 17403,
        "barrio": "El Dorado",
        "motivo": "Información",
        "descripcion": "Proceso de desafiliación",
        "solucion": "Se remite con otra persona"
    },
    {
        "id": 354,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": "W12425",
        "barrio": "Ciudadela Colpuertos",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 355,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-06",
        "contrato": "N/A",
        "barrio": "Kennedy",
        "motivo": "Información",
        "descripcion": "Proceso de afiliación",
        "solucion": "Se da información"
    },
    {
        "id": 356,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 16959,
        "barrio": "Panamericano",
        "motivo": "Facturación",
        "descripcion": "Consulta de saldo",
        "solucion": "Se da información"
    },
    {
        "id": 357,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 22765,
        "barrio": "Brisas Del Mar",
        "motivo": "Disponibilidad",
        "descripcion": "Sin señal de TV",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 358,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 18081,
        "barrio": "Bahia",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 359,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 15081,
        "barrio": "Centro",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 360,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 24475,
        "barrio": "Los Alamos",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 361,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 17539,
        "barrio": "Kennedy",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 362,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 23243,
        "barrio": "Pueblo Nuevo",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 363,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 22179,
        "barrio": "Transformacion",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 364,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 17548,
        "barrio": "Porvenir",
        "motivo": "Disponibilidad",
        "descripcion": "Sin señal de TV",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 365,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 8679,
        "barrio": "12 De Abril",
        "motivo": "Disponibilidad",
        "descripcion": "Módem no enciende",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 366,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 11041,
        "barrio": "Galeon",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 367,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 22196,
        "barrio": "El Triunfo",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 368,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 12087,
        "barrio": "Los Pinos",
        "motivo": "Disponibilidad",
        "descripcion": "Sin señal de TV",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 369,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": "N/A",
        "barrio": "N/A",
        "motivo": "Información",
        "descripcion": "Proceso de afiliación",
        "solucion": "Se da información"
    },
    {
        "id": 370,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 16905,
        "barrio": "Inmaculada",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 371,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": "N/A",
        "barrio": "N/A",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 372,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 24190,
        "barrio": "Porvenir",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 373,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 93602,
        "barrio": "Colon",
        "motivo": "Información",
        "descripcion": "Instalación pendiente",
        "solucion": "Se remite con otra persona"
    },
    {
        "id": 374,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 92360,
        "barrio": "El Progreso",
        "motivo": "Disponibilidad",
        "descripcion": "Sin señal de TV",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 375,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 24360,
        "barrio": "Firme",
        "motivo": "Información",
        "descripcion": "Puntos de pago",
        "solucion": "Se da información"
    },
    {
        "id": 376,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": "N/A",
        "barrio": "N/A",
        "motivo": "Información",
        "descripcion": "Proceso de afiliación",
        "solucion": "Se da información"
    },
    {
        "id": 377,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 19005,
        "barrio": "Bellavista",
        "motivo": "Calidad",
        "descripcion": "Lentitud",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 378,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 18974,
        "barrio": "Kennedy",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 379,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 21511,
        "barrio": "Ciudadela Nueva Buenaventura",
        "motivo": "Facturación",
        "descripcion": "Consulta de saldo",
        "solucion": "Se da información"
    },
    {
        "id": 380,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": "N/A",
        "barrio": "N/A",
        "motivo": "Información",
        "descripcion": "Proceso de afiliación",
        "solucion": "Se da información"
    },
    {
        "id": 381,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 18663,
        "barrio": "Oriente",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 382,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 19567,
        "barrio": "Manglares",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 383,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 5867,
        "barrio": "Independencia",
        "motivo": "Facturación",
        "descripcion": "Consulta de saldo",
        "solucion": "Se da información"
    },
    {
        "id": 384,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": "N/A",
        "barrio": "N/A",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 385,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 5051,
        "barrio": "San Buenaventura",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 386,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": "N/A",
        "barrio": "N/A",
        "motivo": "Información",
        "descripcion": "Proceso de afiliación",
        "solucion": "Se da información"
    },
    {
        "id": 387,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 13597,
        "barrio": "Bellavista",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 388,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 20019,
        "barrio": "Jardin",
        "motivo": "Disponibilidad",
        "descripcion": "Sin ambos servicios",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 389,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 24095,
        "barrio": "El Carmen",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 390,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 20019,
        "barrio": "Jardin",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 391,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 24657,
        "barrio": "12 De Abril",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 392,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": "W11037",
        "barrio": "Independencia",
        "motivo": "Calidad",
        "descripcion": "Lentitud",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 393,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 24554,
        "barrio": "Jorge",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 394,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 24167,
        "barrio": "Independencia",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 395,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 9417,
        "barrio": "Centenario",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 396,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-06",
        "contrato": 21366,
        "barrio": "Ciudadela Colpuertos",
        "motivo": "Facturación",
        "descripcion": "Consulta de saldo",
        "solucion": "Se da información"
    },
    {
        "id": 397,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-06",
        "contrato": 16000,
        "barrio": "Rockefeller",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 398,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-06",
        "contrato": 22121,
        "barrio": "Bellavista",
        "motivo": "Disponibilidad",
        "descripcion": "Módem formateado",
        "solucion": "Se da información"
    },
    {
        "id": 399,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-06",
        "contrato": 18608,
        "barrio": "Independencia",
        "motivo": "Facturación",
        "descripcion": "Fechas de corte / pago",
        "solucion": "Se da información"
    },
    {
        "id": 400,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-06",
        "contrato": 70473,
        "barrio": "Oriente",
        "motivo": "Calidad",
        "descripcion": "Señal lluviosa",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 401,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-06",
        "contrato": 15940,
        "barrio": "Pueblo Nuevo",
        "motivo": "Calidad",
        "descripcion": "Lentitud",
        "solucion": "Se remite con otra persona"
    },
    {
        "id": 402,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-06",
        "contrato": 18418,
        "barrio": "Santa Fe",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 403,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-06",
        "contrato": "W16328",
        "barrio": "Kennedy",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 404,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-06",
        "contrato": 2477,
        "barrio": "Santa Fe",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 405,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-06",
        "contrato": 21189,
        "barrio": "Kennedy",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 406,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-06",
        "contrato": 22065,
        "barrio": "Paloseco",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 407,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-06",
        "contrato": 85404,
        "barrio": "La Libertad",
        "motivo": "Información",
        "descripcion": "Proceso de desafiliación",
        "solucion": "Se da información"
    },
    {
        "id": 408,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-06",
        "contrato": 15940,
        "barrio": "Pueblo Nuevo",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 409,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-06",
        "contrato": 16759,
        "barrio": "Porvenir",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 410,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-06",
        "contrato": 22559,
        "barrio": "Independencia",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 411,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-06",
        "contrato": 22201,
        "barrio": "Los Pinos",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 412,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-06",
        "contrato": 18688,
        "barrio": "Centenario",
        "motivo": "Calidad",
        "descripcion": "Lentitud",
        "solucion": "Se da información"
    },
    {
        "id": 413,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-06",
        "contrato": 2958,
        "barrio": "El Dorado",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 414,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-06",
        "contrato": 17654,
        "barrio": "Juan 23",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Procedimiento general"
    },
    {
        "id": 415,
        "atiende": "Andrés Silva",
        "fecha": "2021-01-06",
        "contrato": 16417,
        "barrio": "Juan 23",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 416,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": "W15780",
        "barrio": "Paloseco",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se da información"
    },
    {
        "id": 417,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 24129,
        "barrio": "Panamericano",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 418,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 24000,
        "barrio": "Nayita",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 419,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 23096,
        "barrio": "Paloseco",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 420,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 7348,
        "barrio": "12 De Abril",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 421,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 19359,
        "barrio": "Independencia",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 422,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 9236,
        "barrio": "Santa Fe",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Procedimiento general"
    },
    {
        "id": 423,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 24660,
        "barrio": "Transformacion",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 424,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 14456,
        "barrio": "Antonio Nariño",
        "motivo": "Calidad",
        "descripcion": "Lentitud",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 425,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 767,
        "barrio": "Pueblo Nuevo",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 426,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 24000,
        "barrio": "Nayita",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 427,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 15181,
        "barrio": "Cascajal",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 428,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 21389,
        "barrio": "Jardin",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 429,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 12404,
        "barrio": "Fortaleza",
        "motivo": "Facturación",
        "descripcion": "Reclamo por saldo",
        "solucion": "Se remite con otra persona"
    },
    {
        "id": 430,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 13708,
        "barrio": "San Luis",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 431,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 21272,
        "barrio": "Inmaculada",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 432,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": "W13254",
        "barrio": "Independencia",
        "motivo": "Facturación",
        "descripcion": "Consulta de saldo",
        "solucion": "Se da información"
    },
    {
        "id": 433,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 11277,
        "barrio": "Jorge",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 434,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 14840,
        "barrio": "Jorge",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 435,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 4975,
        "barrio": "Independencia",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 436,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 5231,
        "barrio": "Gran Colombiana",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 437,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 18974,
        "barrio": "Kennedy",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 438,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 57479,
        "barrio": "Nayita",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 439,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 18974,
        "barrio": "Kennedy",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se da información"
    },
    {
        "id": 440,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 18974,
        "barrio": "Kennedy",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 441,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 22179,
        "barrio": "Transformacion",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 442,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 93194,
        "barrio": "Nayita",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 443,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 20082,
        "barrio": "Bellavista",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 444,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 23787,
        "barrio": "Oriente",
        "motivo": "Disponibilidad",
        "descripcion": "Sin ambos servicios",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 445,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 22783,
        "barrio": "Santa Rosa",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 446,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 22773,
        "barrio": "Ciudadela Colpuertos",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 447,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 24590,
        "barrio": "Independencia",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se da información"
    },
    {
        "id": 448,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": "W20364",
        "barrio": "Jorge",
        "motivo": "Facturación",
        "descripcion": "Cortado en sistema",
        "solucion": "Se remite con otra persona"
    },
    {
        "id": 449,
        "atiende": "Katherin Muñoz",
        "fecha": "2021-01-07",
        "contrato": 5678,
        "barrio": "Independencia",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 450,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-07",
        "contrato": 24475,
        "barrio": "Los Alamos",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 451,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-07",
        "contrato": 24567,
        "barrio": "Americas",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se remite con otra persona"
    },
    {
        "id": 452,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-07",
        "contrato": 24344,
        "barrio": "Centro",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se remite con otra persona"
    },
    {
        "id": 453,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-07",
        "contrato": "N/A",
        "barrio": "Bellavista",
        "motivo": "Información",
        "descripcion": "Proceso de afiliación",
        "solucion": "Se da información"
    },
    {
        "id": 454,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-07",
        "contrato": 24112,
        "barrio": "Kennedy",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 455,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-07",
        "contrato": 22143,
        "barrio": "Miramar",
        "motivo": "Calidad",
        "descripcion": "Lentitud",
        "solucion": "Se da información"
    },
    {
        "id": 456,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-07",
        "contrato": 93437,
        "barrio": "Maria Eugenia",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 457,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-07",
        "contrato": 24532,
        "barrio": "Antonio Nariño",
        "motivo": "Calidad",
        "descripcion": "TV lluviosa y caídas frecuentes",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 458,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-07",
        "contrato": 16631,
        "barrio": "Centro",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 459,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-07",
        "contrato": 24508,
        "barrio": "Cascajal",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se da información"
    },
    {
        "id": 460,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-07",
        "contrato": "W14625",
        "barrio": "Los Pinos",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 461,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-07",
        "contrato": "N/A",
        "barrio": "N/A",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 462,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-07",
        "contrato": 23243,
        "barrio": "Pueblo Nuevo",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 463,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-07",
        "contrato": 21511,
        "barrio": "Ciudadela Nueva Buenaventura",
        "motivo": "Facturación",
        "descripcion": "Consulta de saldo",
        "solucion": "Se da información"
    },
    {
        "id": 464,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-07",
        "contrato": 15446,
        "barrio": "Cabal Pombo",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 465,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-07",
        "contrato": 15962,
        "barrio": "El Dorado",
        "motivo": "Disponibilidad",
        "descripcion": "Módem formateado",
        "solucion": "Se da información"
    },
    {
        "id": 466,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-07",
        "contrato": 92352,
        "barrio": "Porvenir",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 467,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-07",
        "contrato": 20201,
        "barrio": "Transformacion",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 468,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-07",
        "contrato": 20810,
        "barrio": "El Progreso",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 469,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-07",
        "contrato": 92364,
        "barrio": "12 De Abril",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se da información"
    },
    {
        "id": 470,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-07",
        "contrato": 21372,
        "barrio": "14 De Julio",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 471,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-07",
        "contrato": 21372,
        "barrio": "14 De Julio",
        "motivo": "Facturación",
        "descripcion": "Consulta de saldo",
        "solucion": "Se da información"
    },
    {
        "id": 472,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-07",
        "contrato": 5408,
        "barrio": "Union De Vivienda",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 473,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-07",
        "contrato": "N/A",
        "barrio": "Paloseco",
        "motivo": "Información",
        "descripcion": "Proceso de afiliación",
        "solucion": "Se da información"
    },
    {
        "id": 474,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-07",
        "contrato": 4488,
        "barrio": "Bellavista",
        "motivo": "Calidad",
        "descripcion": "TV lluviosa y caídas frecuentes",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 475,
        "atiende": "Jesica Salazar",
        "fecha": "2021-01-07",
        "contrato": 16175,
        "barrio": "Independencia",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se da información"
    },
    {
        "id": 476,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-07",
        "contrato": 18460,
        "barrio": "Bellavista",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 477,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-07",
        "contrato": 23882,
        "barrio": "Maria Eugenia",
        "motivo": "Facturación",
        "descripcion": "Factura no llega",
        "solucion": "Se da información"
    },
    {
        "id": 478,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-07",
        "contrato": 50749,
        "barrio": "Oriente",
        "motivo": "Disponibilidad",
        "descripcion": "Sin señal de TV",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 479,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-07",
        "contrato": 19386,
        "barrio": "Rockefeller",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 480,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-07",
        "contrato": 15244,
        "barrio": "Camilo Torres",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 481,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-07",
        "contrato": 22911,
        "barrio": "Americas",
        "motivo": "Información",
        "descripcion": "Mantenimiento pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 482,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-07",
        "contrato": 18354,
        "barrio": "Alfonso Lopez Michelsen",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 483,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-07",
        "contrato": 20933,
        "barrio": "Cascajal",
        "motivo": "Información",
        "descripcion": "Traslado pendiente",
        "solucion": "Se da información"
    },
    {
        "id": 484,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-07",
        "contrato": 22839,
        "barrio": "Eucaristico",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 485,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-07",
        "contrato": 24092,
        "barrio": "6 De Enero",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 486,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-07",
        "contrato": 13001,
        "barrio": "Ciudadela Colpuertos",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 487,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-07",
        "contrato": 23096,
        "barrio": "Paloseco",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 488,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-07",
        "contrato": 23941,
        "barrio": "Ciudadela Nueva Buenaventura",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 489,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-07",
        "contrato": 16175,
        "barrio": "Independencia",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 490,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-07",
        "contrato": 18769,
        "barrio": "Cascajal",
        "motivo": "Facturación",
        "descripcion": "Consulta de saldo",
        "solucion": "Se da información"
    },
    {
        "id": 491,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-07",
        "contrato": "N/A",
        "barrio": "N/A",
        "motivo": "Información",
        "descripcion": "Informaciones variadas",
        "solucion": "Se da información"
    },
    {
        "id": 492,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-07",
        "contrato": 23941,
        "barrio": "Ciudadela Nueva Buenaventura",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 493,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-07",
        "contrato": 10259,
        "barrio": "El Carmen",
        "motivo": "Calidad",
        "descripcion": "Caídas frecuentes",
        "solucion": "Se toma O de S para codinet"
    },
    {
        "id": 494,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-07",
        "contrato": "N/A",
        "barrio": "N/A",
        "motivo": "Información",
        "descripcion": "Proceso de afiliación",
        "solucion": "Se da información"
    },
    {
        "id": 495,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-07",
        "contrato": 8293,
        "barrio": "Cascajal",
        "motivo": "Disponibilidad",
        "descripcion": "CM encendido offline",
        "solucion": "Se toma O de S para técnico"
    },
    {
        "id": 496,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-07",
        "contrato": 21766,
        "barrio": "Bahia",
        "motivo": "Calidad",
        "descripcion": "Lentitud",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 497,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-07",
        "contrato": 15909,
        "barrio": "Gran Colombiana",
        "motivo": "Información",
        "descripcion": "Proceso de desafiliación",
        "solucion": "Se da información"
    },
    {
        "id": 498,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-07",
        "contrato": "W14625",
        "barrio": "Los Pinos",
        "motivo": "Disponibilidad",
        "descripcion": "Todo ok pero no navega",
        "solucion": "Se soluciona reiniciando"
    },
    {
        "id": 499,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-07",
        "contrato": 24548,
        "barrio": "Jorge",
        "motivo": "Información",
        "descripcion": "Cambio de credenciales WIFI",
        "solucion": "Se cambian credenciales WIFI"
    },
    {
        "id": 500,
        "atiende": "Jean Carlos",
        "fecha": "2021-01-07",
        "contrato": 54449,
        "barrio": "Centenario",
        "motivo": "Información",
        "descripcion": "Instalación pendiente",
        "solucion": "Se da información"
    },
];

llamadas.forEach(function(obj) {
    db.collection("llamadas").add({
            id: obj.id,
            atiende: obj.atiende,
            fecha: obj.fecha,
            contrato: obj.contrato,
            barrio: obj.barrio,
            motivo: obj.motivo,
            descripcion: obj.descripcion,
            solucion: obj.solucion,
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
});