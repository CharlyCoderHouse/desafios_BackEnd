const objetos =  [
    {
     manzanas:3,
     peras:2,
     carne:1,
     jugos:5,
     dulces:2
    },
    {
     manzanas:1,
     sandias:1,
     huevos:6,
     jugos:1,
     panes:4
    }
   ];

function getAllProductTypes(array) {
    if (array.length === 0) return `Array must contain almost one object`;

    let total = 0;
    let types = [];
    let uniqueTypes = [];

    array.forEach((obj) => {
        const values = Object.values(obj);
        total += values.reduce((valorInicial, ValorAcumulado) => ValorAcumulado + valorInicial);
        types = [...types, ...Object.keys(obj)];
    });

    console.log(array);

    types.forEach((type) => {
        if (!uniqueTypes.includes(type)) uniqueTypes.push(type);
    });

    console.log(total);
    
    return uniqueTypes;
  }

  console.log(getAllProductTypes(objetos));