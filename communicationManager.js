export async function getLibros() {
  const response = await fetch(`http://alvaro2.daw.inspedralbes.cat/api.php/records/BOOK`)
  const data = await response.json()
  return data.records;
}

const zapatillas={
  "productos": [
    {
      "id": 1,
      "categoria": "Deportivas",
      "nombre": "Zapatillas Nike Air Max",
      "descripcion": "Zapatillas deportivas Nike Air Max con tecnología de amortiguación y comodidad.",
      "precio": 99.99,
      "imagen": "imagen1.jpg"
    },
    {
      "id": 2,
      "categoria": "Deportivas",
      "nombre": "Zapatillas Adidas Ultraboost",
      "descripcion": "Zapatillas de running Adidas Ultraboost con suela Boost para mayor energía.",
      "precio": 119.99,
      "imagen": "imagen2.jpg"
    },
    {
      "id": 3,
      "categoria": "Deportivas",
      "nombre": "Zapatillas Puma Ignite",
      "descripcion": "Zapatillas Puma Ignite con diseño moderno y cómodo para entrenamiento.",
      "precio": 79.99,
      "imagen": "imagen3.jpg"
    },
    {
      "id": 4,
      "categoria": "Casuales",
      "nombre": "Zapatillas Converse Chuck Taylor",
      "descripcion": "Zapatillas Converse clásicas para un estilo casual y versátil.",
      "precio": 59.99,
      "imagen": "imagen4.jpg"
    },
    {
      "id": 5,
      "categoria": "Casuales",
      "nombre": "Zapatillas Vans Old Skool",
      "descripcion": "Zapatillas Vans Old Skool con diseño icónico y suela de goma resistente.",
      "precio": 64.99,
      "imagen": "imagen5.jpg"
    },
    {
      "id": 6,
      "categoria": "Casuales",
      "nombre": "Zapatillas Skechers Street Cleats",
      "descripcion": "Zapatillas Skechers Street Cleats con estilo urbano y comodidad excepcional.",
      "precio": 74.99,
      "imagen": "imagen6.jpg"
    },
    {
      "id": 7,
      "categoria": "Correr",
      "nombre": "Zapatillas New Balance Fresh Foam",
      "descripcion": "Zapatillas de running New Balance Fresh Foam con suela de apoyo y comodidad superior.",
      "precio": 89.99,
      "imagen": "imagen7.jpg"
    },
    {
      "id": 8,
      "categoria": "Correr",
      "nombre": "Zapatillas Reebok Floatride Run Fast",
      "descripcion": "Zapatillas Reebok para correr con tecnología Floatride para mayor velocidad.",
      "precio": 109.99,
      "imagen": "imagen8.jpg"
    },
    {
      "id": 9,
      "categoria": "Correr",
      "nombre": "Zapatillas Asics Gel-Nimbus",
      "descripcion": "Zapatillas Asics Gel-Nimbus con amortiguación de alto rendimiento para corredores.",
      "precio": 94.99,
      "imagen": "imagen9.jpg"
    },
    {
      "id": 10,
      "categoria": "Baloncesto",
      "nombre": "Zapatillas Jordan Retro",
      "descripcion": "Zapatillas Jordan Retro con diseño clásico y suela de alta tracción para baloncesto.",
      "precio": 129.99,
      "imagen": "imagen10.jpg"
    },
    {
      "id": 11,
      "categoria": "Baloncesto",
      "nombre": "Zapatillas Under Armour Curry",
      "descripcion": "Zapatillas Under Armour Curry diseñadas para rendimiento en la cancha de baloncesto.",
      "precio": 119.99,
      "imagen": "imagen11.jpg"
    },
    {
      "id": 12,
      "categoria": "Baloncesto",
      "nombre": "Zapatillas Puma Clyde Court",
      "descripcion": "Zapatillas Puma Clyde Court con estilo moderno y agarre óptimo para baloncesto.",
      "precio": 99.99,
      "imagen": "imagen12.jpg"
    },
    {
      "id": 13,
      "categoria": "Skate",
      "nombre": "Zapatillas DC Shoes Pure",
      "descripcion": "Zapatillas DC Shoes Pure diseñadas para el skateboarding con suela resistente a la abrasión.",
      "precio": 69.99,
      "imagen": "imagen13.jpg"
    },
    {
      "id": 14,
      "categoria": "Skate",
      "nombre": "Zapatillas Etnies Jameson",
      "descripcion": "Zapatillas Etnies Jameson con diseño clásico y durabilidad para el skate.",
      "precio": 59.99,
      "imagen": "imagen14.jpg"
    },
    {
      "id": 15,
      "categoria": "Skate",
      "nombre": "Zapatillas Vans Sk8-Hi",
      "descripcion": "Zapatillas Vans Sk8-Hi de caña alta ideales para el skate y el estilo urbano.",
      "precio": 69.99,
      "imagen": "imagen15.jpg"
    }
  ]
}

export async function getZapatillas() {
  return zapatillas.productos;
}
