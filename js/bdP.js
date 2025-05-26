function datos(){
    // Crear un array de objetos: usuarios----------------------------------------------
    var usuarios = [
        { 
            idusuario: 1, 
            cedula: "1234564", 
            nombre: "Sergio Aquino", 
            celular: "0976-578656", 
            usuario: "Dani", 
            contrasena: "Dani123Aquino", 
            rol:"Administrador"

        },
        { 
            idusuario: 2, 
            cedula: "2233445", 
            nombre: "Alvaro Ortega", 
            celular: "0971-901780", 
            usuario: "Alv34", 
            contrasena: "Alvaro77Ortega", 
            rol:"Administrador" 

        },
        { 
            idusuario: 3, 
            cedula: "5566776", 
            nombre: "Thaiel Duarte", 
            celular: "0974-679430", 
            usuario: "Thanos", 
            contrasena: "12THanOS", 
            rol:"Cajero"

         },
        { 
            idusuario: 4, 
            cedula: "9807656", 
            nombre: "Paola Oviedo", 
            celular: "0972-228032", 
            usuario: "Pao", 
            contrasena: "Pao33Oviedo", 
            rol:"Cajero"

        },
        { 
            idusuario: 5, 
            cedula: "7895877", 
            nombre: "Alan Armoa", 
            celular: "0982-423022", 
            usuario: "Haland", 
            contrasena: "WWW123Carmen", 
            rol:"Administrador" 

        },
        { 
            idusuario: 6, 
            cedula: "3254485", 
            nombre: "Aron Smith", 
            celular: "0986-768544", 
            usuario: "Smith", 
            contrasena: "Aron666KIng", 
            rol:"Administrador" 

        },
        { 
            idusuario: 7, 
            cedula: "7584387", 
            nombre: "Estelvina Oviedo", 
            celular: "0973-446472", 
            usuario: "Ester", 
            contrasena: "Ester99SIlva", 
            rol:"Codificador" 

        },
        { 
            idusuario: 8, 
            cedula: "6582958", 
            nombre: "Elon Musk", 
            celular: "0974-236522", 
            usuario: "Elones", 
            contrasena: "Musk44ELon", 
            rol:"Administrador" 

        },
        { 
            idusuario: 9, 
            cedula: "1455174", 
            nombre: "Homero Ramon", 
            celular: "0975-987655", 
            usuario: "Homer", 
            contrasena: "Homero39SImpson", 
            rol:"Codificador" 

        },
        { 
            idusuario: 10, 
            cedula: "4785992", 
            nombre: "Amy Lee", 
            celular: "0973-564321", 
            usuario: "Amy", 
            contrasena: "Amy22Lee", 
            rol:"Cajero"

        }
    ];
    // Guardar en localStorage como cadena JSON
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    //---------------------------------------------------------------------------------
   //----crear proveedores-----------------------------------------------------------------------------
   var proveedores = [
    { 
        idproveedor: 1, 
        ruc: "1234507-0", 
        nombre: "Horacio Cartes SA", 
        direccion: "AV Boqueron c/ Cerro Porteño", 
        celular: "0971-123456",
        ciudad: "CONCEPCIÓN" 
    },
    { 
        idproveedor: 2, 
        ruc: "1234237-1", 
        nombre: "Josefina SA", 
        direccion: "AV Boqueron c/ Cerro Porteño", 
        celular: "0971-001100",
        ciudad: "CONCEPCIÓN"     
    },
    { 
        idproveedor: 3, 
        ruc: "5148657-3", 
        nombre: "Distribuidora López", 
        direccion: "Calle Palma 123", 
        celular: "0981-654321",
        ciudad: "CONCEPCIÓN"     
    },
    { 
        idproveedor: 4, 
        ruc: "1205418-1", 
        nombre: "Comercial Martínez", 
        direccion: "AV Mariscal López 456", 
        celular: "0972-987654",
        ciudad: "SAN PEDRO"     
    },
    { 
        idproveedor: 5, 
        ruc: "3982540-3", 
        nombre: "Importadora Fernández", 
        direccion: "AV España 789", 
        celular: "0982-123987",
        ciudad: "ASUNCIÓN"     
    },
    { 
        idproveedor: 6, 
        ruc: "8472951-5", 
        nombre: "Electrodomésticos Ramírez", 
        direccion: "Calle San Martín 321", 
        celular: "0974-321654",
        ciudad: "SAN PEDRO"     
    },
    { 
        idproveedor: 7, 
        ruc: "5947816-8", 
        nombre: "Agropecuaria Torres", 
        direccion: "Ruta 2 KM 50", 
        celular: "0983-789123",
        ciudad: "ENCARNACIÓN"     
    },
    { 
        idproveedor: 8, 
        ruc: "5476918-2", 
        nombre: "Construcciones Vera", 
        direccion: "AV Artigas 654", 
        celular: "0975-654987",
        ciudad: "ASUNCIÓN"     
    },
    { 
        idproveedor: 9, 
        ruc: "7516328-1", 
        nombre: "Farmacia Acosta", 
        direccion: "Calle Independencia 987", 
        celular: "0984-987321",
        ciudad: "CIUDAD DEL ESTE"     
    },
    { 
        idproveedor: 10, 
        ruc: "2024581-0", 
        nombre: "Supermercado González", 
        direccion: "AV Eusebio Ayala 1234", 
        celular: "0976-123654",
        ciudad: "CIUDAD DEL ESTE"     
    }
];
localStorage.setItem("proveedores", JSON.stringify(proveedores));  
//----crear clientes-----------------------------------------------------------------------------


var clientes = [
    { idcliente: 1, ciruc: "5674778", nombre: "Ana", apellido: "De Armas", direccion: "Cuba", celular: "0971-123456" },
    { idcliente: 2, ciruc: "1234567", nombre: "Juan", apellido: "Pérez", direccion: "Asunción", celular: "0981-654321" },
    { idcliente: 3, ciruc: "7654321", nombre: "María", apellido: "Gómez", direccion: "Luque", celular: "0972-987654" },
    { idcliente: 4, ciruc: "2345678", nombre: "Carlos", apellido: "López", direccion: "San Lorenzo", celular: "0973-456789" },
    { idcliente: 5, ciruc: "8765432", nombre: "Lucía", apellido: "Fernández", direccion: "Fernando de la Mora", celular: "0982-123987" },
    { idcliente: 6, ciruc: "3456789", nombre: "Pedro", apellido: "Martínez", direccion: "Capiatá", celular: "0974-321654" },
    { idcliente: 7, ciruc: "9876543", nombre: "Sofía", apellido: "Ramírez", direccion: "Lambaré", celular: "0983-789123" },
    { idcliente: 8, ciruc: "4567890", nombre: "Diego", apellido: "Torres", direccion: "Ñemby", celular: "0975-654987" },
    { idcliente: 9, ciruc: "0987654", nombre: "Valeria", apellido: "Vera", direccion: "Villa Elisa", celular: "0984-987321" },
    { idcliente: 10, ciruc: "5678901", nombre: "Jorge", apellido: "Acosta", direccion: "Itauguá", celular: "0976-123654" }
];
localStorage.setItem("clientes", JSON.stringify(clientes));

//----crear bancos-----------------------------------------------------------------------------
var bancos = [
    { idbanco: 1, nombre: "Banco Itaú", telefono: "0212485000", direccion: "Avda. España 1234" },
    { idbanco: 2, nombre: "Banco Continental", telefono: "0214146000", direccion: "Avda. Mariscal López 5678" },
    { idbanco: 3, nombre: "Banco Nacional de Fomento", telefono: "0214198000", direccion: "Calle Palma 345" },
    { idbanco: 4, nombre: "Ueno Bank", telefono: "0216189000", direccion: "Avda. Artigas 789" },
    { idbanco: 5, nombre: "Banco Familiar", telefono: "0216187000", direccion: "Avda. San Martín 456" },
    { idbanco: 6, nombre: "Banco GNB", telefono: "0212494000", direccion: "Avda. República 123" },
    { idbanco: 7, nombre: "Banco BBVA", telefono: "0216188000", direccion: "Avda. Eusebio Ayala 654" },
    { idbanco: 8, nombre: "Banco Sudameris", telefono: "0212486000", direccion: "Calle Independencia 987" },
    { idbanco: 9, nombre: "Banco BASA", telefono: "0216185000", direccion: "Avda. Boquerón 321" },
    { idbanco: 10, nombre: "Banco Vision", telefono: "0212487000", direccion: "Avda. Defensores del Chaco 852" }
];
localStorage.setItem("bancos", JSON.stringify(bancos));

//----crear pagos a proveedores-----------------------------------------------------------------------------
var pagosProveedores = [
    { idpago: 1, idcompra: 1, monto: 1500000, fechapago: "2025-05-01", idbanco: 1  , pagado: "Si" },
    { idpago: 2, idcompra: 2, monto: 92000, fechapago: "2024-10-05", idbanco: 2, pagado: "Si" },
    { idpago: 3, idcompra: 3, monto: 35000, fechapago: "2022-08-08", idbanco: 3, pagado: "Si" },
    { idpago: 4, idcompra: 4, monto: 900000, fechapago: "2021-03-23", idbanco: 4, pagado: "Si" },
    { idpago: 5, idcompra: 5, monto: 900000, fechapago: "2019-03-21", idbanco: 5, pagado: "Si" },
    { idpago: 6, idcompra: 6, monto: 900000, fechapago: "2019-02-12", idbanco: 6, pagado: "Si" },
    { idpago: 7, idcompra: 7, monto: 900000, fechapago: "2020-01-16", idbanco: 7, pagado: "Si" },
    { idpago: 8, idcompra: 8, monto: 900000, fechapago: "2015-11-26", idbanco: 8, pagado: "Si" },
    { idpago: 9, idcompra: 9, monto: 900000, fechapago: "2017-10-04", idbanco: 9, pagado: "Si" },
    { idpago: 10, idcompra: 10, monto: 900000, fechapago: "2022-06-07", idbanco: 10, pagado: "Si" }






];

// Guardar en localStorage
localStorage.setItem("pagosProveedores", JSON.stringify(pagosProveedores));

// CREAR UN ARRAY de objetos: marcas----------------------------------------------
var marcas = [
    {
        idmarca: 1,
        marca: "TRÉBOL"
    },
    {
        idmarca: 2,
        marca: "COLGATE"
    },
    {
        idmarca: 3,
        marca: "SAMSUNG"
    },
    {
        idmarca: 4,
        marca: "COCA-COLA"
    },
    {
        idmarca: 5,
        marca: "AVON"
    },
    {
        idmarca: 6,
        marca: "MIDAS"
    },
    {
        idmarca: 7,
        marca: "LESMO Y HNOS."
    },
    {
        idmarca: 8,
        marca: "LACTOLANDA"
    },
    {
        idmarca: 9,
        marca: "CONSUMER"
    },
    {
        idmarca: 10,
        marca: "PRIMICIA"
    }
];


localStorage.setItem("marcas", JSON.stringify(marcas));


// CREAR UN ARRAY de objetos: marcas----------------------------------------------
var clasificaciones = [
    {
        idclasificacion: 1,
        clasificacion: "LACTEOS"
    },
    {
        idclasificacion: 2,
        clasificacion: "COLINO"
    },
    {
        idclasificacion: 3,
        clasificacion: "CELULARES"
    },
    {
        idclasificacion: 4,
        clasificacion: "BEBIDAS"
    },
    {
        idclasificacion: 5,
        clasificacion: "DETERGENTES"
    },
    {
        idclasificacion: 6,
        clasificacion: "ELECRTODOMESTICOS"
    },
    {
        idclasificacion: 7,
        clasificacion: "INFORMATICA"
    },
    {
        idclasificacion: 8,
        clasificacion: "ROPERIA"
    },
    {
        idclasificacion: 9,
        clasificacion: "BAZAR"
    },
    {
        idclasificacion: 10,
        clasificacion: "LIBRERIA"
    }
];
localStorage.setItem("clasificaciones", JSON.stringify(clasificaciones));


// Crear un array de objetos: articulos----------------------------------------------
var articulos = [
    {
        idarticulo: 1,
        codbarra: "1020304050600",
        descripcion: "LECHE TRÉBOL",
        idmarca: 1,
        idclasificacion: 1,
        tiva: 10,
        stockactual: 20,
        preventa: 7500
    },
    {
        idarticulo: 2,
        codbarra: "1002003004000",
        descripcion: "COCA-COLA LIGHT",
        idmarca: 4,
        idclasificacion: 4,
        tiva: 5,
        stockactual: 16,
        preventa: 10000
    },
    {
        idarticulo: 3,
        codbarra: "1000200030000",
        descripcion: "COLINO COLGATE",
        idmarca: 2,
        idclasificacion: 2,
        tiva: 0,
        stockactual: 10,
        preventa: 19000
    },
    {
        idarticulo: 4,
        codbarra: "1000300050000",
        descripcion: "SAMSUNG J5 PRIME",
        idmarca: 3,
        idclasificacion: 3,
        tiva: 0,
        stockactual: 16,
        preventa: 1000000
    },
    {
        idarticulo: 5,
        codbarra: "10203040506005",
        descripcion: "CUADERNO 100 HOJAS TAPA DURA",
        idmarca: 5,
        idclasificacion: 10,
        tiva: 10,
        stockactual: 15,
        preventa: 3000,
        precio:7000
    },
    {
        idarticulo: 6,
        codbarra: "10020030040007",
        descripcion: "LAVARROPAS 50LT",
        idmarca: 6,
        idclasificacion: 6,
        tiva: 10,
        stockactual: 3,
        preventa: 100000,
        precio:250000
    },
    {
        idarticulo: 7,
        codbarra: "7",
        descripcion: "MANZANA ROJA X UNI",
        idmarca: 7,
        idclasificacion: 11,
        tiva: 5,
        stockactual: 20,
        preventa: 2000,
        precio:2500
    },
    {
        idarticulo: 8,
        codbarra: "8",
        descripcion: "DETERGENTE LAVANDA 1LT",
        idmarca: 10,
        idclasificacion: 5,
        tiva: 10,
        stockactual: 16,
        preventa: 13000,
        precio:26000
    },
    {
        idarticulo: 9,
        codbarra: "1000200030008",
        descripcion: "VELADOR",
        idmarca: 0,
        idclasificacion: 9,
        tiva: 10,
        stockactual: 10,
        preventa: 19050,
        precio:22000
    },
    {
        idarticulo: 10,
        codbarra: "738892938534",
        descripcion: "SILLA PARA PLAYA",
        idmarca: 0,
        idclasificacion: 9,
        tiva: 10,
        stockactual: 5,
        preventa: 15000,
        precio:24000
    }
];
localStorage.setItem("articulos", JSON.stringify(articulos));

//---------------------------------------------------------------------------------
var ventas = [
  {
    factura: "001-786-0001000",
    fecha: "2025-05-01T10:30:00.000Z",
    ruc: "1234567-8",
    cliente: "Juan Pérez",
    total: 150000,
    iva: 13636,
    pago: 200000,
    vuelto: 50000,
    condicion: "contado",
    anulada: false,
    detalle: [
      { codigo: "P001", descripcion: "Coca Cola 2L", cantidad: 2, precio: 10000, subtotal: 20000 },
      { codigo: "P002", descripcion: "Yerba Mate", cantidad: 1, precio: 30000, subtotal: 30000 }
    ]
  },
  {
    factura: "001-101-0001000",
    fecha: "2025-05-01T12:00:00.000Z",
    ruc: "8765432-1",
    cliente: "María Gómez",
    total: 85000,
    iva: 7727,
    pago: 100000,
    vuelto: 15000,
    condicion: "crédito",
    anulada: false,
    detalle: [
      { codigo: "P003", descripcion: "Azúcar 1kg", cantidad: 3, precio: 10000, subtotal: 30000 },
      { codigo: "P004", descripcion: "Aceite 900ml", cantidad: 1, precio: 55000, subtotal: 55000 }
    ]
  },
  {
    factura: "001-098-0001000",
    fecha: "2025-05-02T09:15:00.000Z",
    ruc: "9988776-5",
    cliente: "Carlos López",
    total: 45000,
    iva: 4090,
    pago: 50000,
    vuelto: 5000,
    condicion: "contado",
    anulada: false,
    detalle: [
      { codigo: "P005", descripcion: "Pan", cantidad: 5, precio: 9000, subtotal: 45000 }
    ]
  },
  {
    factura: "001-758-0001000",
    fecha: "2025-05-02T11:45:00.000Z",
    ruc: "1122334-0",
    cliente: "Laura Martínez",
    total: 120000,
    iva: 10909,
    pago: 150000,
    vuelto: 30000,
    condicion: "contado",
    anulada: false,
    detalle: [
      { codigo: "P006", descripcion: "Arroz 1kg", cantidad: 6, precio: 20000, subtotal: 120000 }
    ]
  },
  {
    factura: "001-666-0001000",
    fecha: "2025-05-02T13:00:00.000Z",
    ruc: "5566778-9",
    cliente: "Luis González",
    total: 60000,
    iva: 5454,
    pago: 60000,
    vuelto: 0,
    condicion: "crédito",
    anulada: false,
    detalle: [
      { codigo: "P007", descripcion: "Leche entera", cantidad: 3, precio: 20000, subtotal: 60000 }
    ]
  },
  {
    factura: "001-067-0001000",
    fecha: "2025-05-03T08:30:00.000Z",
    ruc: "3344556-2",
    cliente: "Ana Romero",
    total: 105000,
    iva: 9545,
    pago: 110000,
    vuelto: 5000,
    condicion: "contado",
    anulada: false,
    detalle: [
      { codigo: "P008", descripcion: "Detergente", cantidad: 2, precio: 52500, subtotal: 105000 }
    ]
  },
  {
    factura: "001-322-0001000",
    fecha: "2025-05-03T10:00:00.000Z",
    ruc: "4455667-3",
    cliente: "Pedro Mendoza",
    total: 30000,
    iva: 2727,
    pago: 50000,
    vuelto: 20000,
    condicion: "contado",
    anulada: false,
    detalle: [
      { codigo: "P009", descripcion: "Jabón en polvo", cantidad: 1, precio: 30000, subtotal: 30000 }
    ]
  },
  {
    factura: "001-012-0001000",
    fecha: "2025-05-03T11:30:00.000Z",
    ruc: "2233445-6",
    cliente: "Rosa Benítez",
    total: 95000,
    iva: 8636,
    pago: 100000,
    vuelto: 5000,
    condicion: "crédito",
    anulada: false,
    detalle: [
      { codigo: "P010", descripcion: "Galletitas", cantidad: 5, precio: 19000, subtotal: 95000 }
    ]
  },
  {
    factura: "001-003-0001000",
    fecha: "2025-05-04T09:45:00.000Z",
    ruc: "6677889-0",
    cliente: "Eduardo Duarte",
    total: 40000,
    iva: 3636,
    pago: 50000,
    vuelto: 10000,
    condicion: "contado",
    anulada: false,
    detalle: [
      { codigo: "P011", descripcion: "Sal fina", cantidad: 4, precio: 10000, subtotal: 40000 }
    ]
  },
  {
    factura: "001-002-0001000",
    fecha: "2025-05-04T14:15:00.000Z",
    ruc: "7788990-1",
    cliente: "Patricia Caballero",
    total: 70000,
    iva: 6363,
    pago: 70000,
    vuelto: 0,
    condicion: "contado",
    anulada: false,
    detalle: [
      { codigo: "P012", descripcion: "Harina 1kg", cantidad: 7, precio: 10000, subtotal: 70000 }
    ]
  }
];
localStorage.setItem("ventas", JSON.stringify(ventas));


// Crear un array de objetos: compras----------------------------------------------
// AGG UN CAMPO PAGADO SI O NO
var compras = [
    {
        idcompra:    1,
        idproveedor: 2,
        numfactura:  "001-001-1234567",
        FechaCompra: "2023-09-12",
        condicion:   "CONTADO",
        stexenta:    0,
        stiva5:      120000,
        stiva10:     0,
        totcompra:   120000,
        liqiva5:     5714,
        liqiva10:    0,
        totiva:      5714,
        saldo:       0,
        anulado:     "NO",
        pagado:      "NO"
    },
    {
        idcompra:    2,
        idproveedor: 2,
        numfactura:  "001-002-1234237",
        FechaCompra: "2024-10-04",
        condicion:   "CRÉDITO",
        stexenta:    0,
        stiva5:      0,
        stiva10:     400000,
        totcompra:   400000,
        liqiva5:     0,
        liqiva10:    36364,
        totiva:      36364,
        saldo:       0,
        anulado:     "NO",
        pagado:      "NO"
    },
    {
        idcompra:    3,
        idproveedor: 4,
        numfactura:  "001-003-4321567",
        FechaCompra: "2022-08-07",
        condicion:   "CRÉDITO",
        stexenta:    100000,
        stiva5:      0,
        stiva10:     0,
        totcompra:   100000,
        liqiva5:     0,
        liqiva10:    0,
        totiva:      0,
        saldo:       0,
        anulado:     "SI",
        pagado:      "NO"
    },
    {
        idcompra:    4,
        idproveedor: 3,
        numfactura:  "001-001-1234567",
        FechaCompra: "2021-03-22",
        condicion:   "CONTADO",
        stexenta:    0,
        stiva5:      0,
        stiva10:     600000,
        totcompra:   600000,
        liqiva5:     0,
        liqiva10:    54545,
        totiva:      54545,
        saldo:       0,
        anulado:     "NO",
        pagado:      "NO"
    },
    {
        idcompra:    5,
        idproveedor: 6,
        numfactura:  "001-001-1234567",
        FechaCompra: "2019-03-20",
        condicion:   "CONTADO",
        stexenta:    0,
        stiva5:      300000,
        stiva10:     0,
        totcompra:   300000,
        liqiva5:     14286,
        liqiva10:    0,
        totiva:      14286,
        saldo:       0,
        anulado:     "SI",
        pagado:      "NO"
    },
    {
        idcompra:    6,
        idproveedor: 8,
        numfactura:  "001-001-1234567",
        FechaCompra: "2019-02-11",
        condicion:   "CONTADO",
        stexenta:    0,
        stiva5:      0,
        stiva10:     250000,
        totcompra:   250000,
        liqiva5:     0,
        liqiva10:    22727,
        totiva:      22727,
        saldo:       0,
        anulado:     "NO",
        pagado:      "NO"
    },
    {
        idcompra:    7,
        idproveedor: 7,
        numfactura:  "001-001-1234567",
        FechaCompra: "2020-01-15",
        condicion:   "CONTADO",
        stexenta:    0,
        stiva5:      150000,
        stiva10:     0,
        totcompra:   150000,
        liqiva5:     7143,
        liqiva10:    0,
        totiva:      7143,
        saldo:       0,
        anulado:     "NO",
        pagado:      "NO"
    },
    {
        idcompra:    8,
        idproveedor: 5,
        numfactura:  "001-001-1234567",
        FechaCompra: "2015-11-25",
        condicion:   "CONTADO",
        stexenta:    0,
        stiva5:      0,
        stiva10:     180000,
        totcompra:   180000,
        liqiva5:     0,
        liqiva10:    16364,
        totiva:      16364,
        saldo:       0,
        anulado:     "NO",
        pagado:      "NO"
    },
    {
        idcompra:    9,
        idproveedor: 1,
        numfactura:  "001-001-1234567",
        FechaCompra: "2017-10-03",
        condicion:   "CONTADO",
        stexenta:    0,
        stiva5:      50000,
        stiva10:     0,
        totcompra:   50000,
        liqiva5:     2381,
        liqiva10:    0,
        totiva:      2381,
        saldo:       0,
        anulado:     "NO",
        pagado:      "NO"
    },
    {
        idcompra:    10,
        idproveedor: 9,
        numfactura:  "001-001-1234567",
        FechaCompra: "2022-06-06",
        condicion:   "CONTADO",
        stexenta:    0,
        stiva5:      0,
        stiva10:     90000,
        totcompra:   90000,
        liqiva5:     0,
        liqiva10:    8182,
        totiva:      8182,
        saldo:       0,
        anulado:     "SI",
        pagado:      "NO"
    }
];
var comprasdetalle=[
        {
            idcompradet: 1,
            idcompra: 1,
            item: 1,
            idarticulo: 2,
            cantidad: 2,
            preuni: 100000,
            tiva: 5,
            subtotal: 200000
        },
        {
            idcompradet: 2,
            idcompra: 2,
            item: 2,
            idarticulo: 1,
            cantidad: 4,
            preuni: 100000,
            tiva: 5,
            subtotal: 400000
        },
        {
            idcompradet: 3,
            idcompra: 3,
            item: 3,
            idarticulo: 2,
            cantidad: 1,
            preuni: 100000,
            tiva: 5,
            subtotal: 100000
        },
        {
            idcompradet: 4,
            idcompra: 4,
            item: 4,
            idarticulo: 3,
            cantidad: 12,
            preuni: 100000,
            tiva: 5,
            subtotal: 1200000
        },
        {
            idcompradet: 5,
            idcompra: 5,
            item: 5,
            idarticulo: 3,
            cantidad: 6,
            preuni: 100000,
            tiva: 5,
            subtotal: 600000
        },
        {
            idcompradet: 6,
            idcompra: 6,
            item: 6,
            idarticulo: 4,
            cantidad: 2,
            preuni: 100000,
            tiva: 5,
            subtotal: 200000
        },
        {//Cambiar a partir de aqui
            idcompradet: 7,
            idcompra: 7,
            item: 7,
            idarticulo: 3,
            cantidad: 2,
            preuni: 100000,
            tiva: 5,
            subtotal: 200000
        },
        {
            idcompradet: 8,
            idcompra: 8,
            item: 8,
            idarticulo: 2,
            cantidad: 2,
            preuni: 100000,
            tiva: 5,
            subtotal: 200000
        },
        {
            idcompradet: 9,
            idcompra: 9,
            item: 9,
            idarticulo: 1,
            cantidad: 2,
            preuni: 100000,
            tiva: 5,
            subtotal: 200000
        },
        {
            idcompradet: 10,
            idcompra: 10,
            item: 10,
            idarticulo: 4,
            cantidad: 2,
            preuni: 100000,
            tiva: 5,
            subtotal: 200000
        },
]
// Guardar en localStorage
localStorage.setItem("compras", JSON.stringify(compras));
localStorage.setItem("comprasdetalle", JSON.stringify(comprasdetalle));
//---------------------------------------------------------------------------------

}