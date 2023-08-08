/* eslint-disable react/prop-types */
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const productos = [
    {
      id: 1,
      nombre: "Canopla Among Us",
      descripcion: "Metálica",
      precio: "1.000,00",
      stock: 10,
      pictureUrl: "../assets/images/escolar/canoplas/canopla-among-us.webp",
      categoria: "cole",
    },
    {
      id: 2,
      nombre: "Canopla 47 Street",
      descripcion: "Metálica",
      precio: "2.500,00",
      stock: 3,
      pictureUrl: "../assets/images/escolar/canoplas/canopla-47-street.webp",
      categoria: "cole",
    },
    {
      id: 3,
      nombre: "Canopla Mickey",
      descripcion: "Metálica",
      precio: "3.000,00",
      stock: 13,
      pictureUrl: "../assets/images/escolar/canoplas/canopla-mickey.webp",
      categoria: "cole",
    },
    {
      id: 4,
      nombre: "Canopla Minie",
      descripcion: "Metálica",
      precio: "11.000,00",
      stock: 3,
      pictureUrl: "../assets/images/escolar/canoplas/canopla-minnie.webp",
      categoria: "cole",
    },
    {
      id: 5,
      nombre: "Abrochadora Nro10",
      descripcion: "Brif",
      precio: "20.000,00",
      stock: 10,
      pictureUrl:
        "../assets/images/comercial/abrochadoras/abrochadora-brief-n10-mit.webp",
      categoria: "ofi",
    },
    {
      id: 6,
      nombre: "Engrampadora",
      descripcion: "Bulit",
      precio: "36.000,00",
      stock: 2,
      pictureUrl:
        "../assets/images/comercial/abrochadoras/abrochadora-engrampadora-bulit.webp",
      categoria: "ofi",
    },
    {
      id: 7,
      nombre: "Bibliorato angosto",
      descripcion: "A-4 color azul",
      precio: "4.000,00",
      stock: 7,
      pictureUrl:
        "../assets/images/comercial/biblioratos/bibliorato-lomo-angosto-a4-azul-onix.webp",
      categoria: "ofi",
    },
    {
      id: 8,
      nombre: "Bibliorato angosto",
      descripcion: "A-4 color negro",
      precio: "4.000,00",
      stock: 2,
      pictureUrl:
        "../assets/images/comercial/biblioratos/bibliorato-lomo-angosto-a4-negro-onix.webp",
      categoria: "ofi",
    },
    {
      id: 9,
      nombre: "Lapices",
      descripcion: "Gioconda - monocromos",
      precio: "800,00",
      stock: 103,
      pictureUrl:
        "../assets/images/artistica/lapices/lapiz-gioconda-monocromo.webp",
      categoria: "arte",
    },
    {
      id: 10,
      nombre: "Lapices Pastel",
      descripcion: "Lata x 36",
      precio: "10.000,00",
      stock: 103,
      pictureUrl:
        "../assets/images/artistica/lapices/lapiz-pastel-lata-x-36.webp",
      categoria: "arte",
    },
    {
      id: 11,
      nombre: "Combo escolar",
      descripcion: "Incluye 3 cuadernos Rivadavia-2 lapiceras-1 goma-1 boligoma ",
      precio: "10.000,00",
      stock: 103,
      pictureUrl: "../assets/images/ofertas/kit1.jpeg",
      categoria: "ofertas",
    },
    {
      id: 12,
      nombre: "Combo universitario",
      descripcion: "Incluye 2 cuadernos A4- 2 resaltadores - 2 marcadores - lapiz - sacapunta y liquipaper ",
      precio: "11.000,00",
      stock: 10,
      pictureUrl: "../assets/images/ofertas/kit2.webp",
      categoria: "ofertas",
    },
  ];

  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (productos.length === 0) {
        reject(new Error("No hay información disponible."));
      }
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
  };

  async function fetchingData() {
    try {
      const datosFeched = await getDatos();
      console.log(datosFeched);
    } catch (error) {
       console.log (error.message)
   
    }
  }
  fetchingData();

 
  return (
    <div className="container bg-body-tertiary">
      <ItemDetail productos={productos}> </ItemDetail>
    </div>
  );
};

export default ItemDetailContainer;
