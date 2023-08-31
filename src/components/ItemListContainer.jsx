/* eslint-disable react/prop-types */
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const { cat } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = query(
      collection(db, "productos"),
      where("categoria", "==", cat)
    );
    getDocs(itemsCollection).then((snapshot) => {
      if (snapshot.size === 0) {
        console.log("No hay productos");
      }
      const docs = snapshot.docs.map((doc) => ({
        idDB: doc.id,
        ...doc.data(),
      }));
      setProducts(docs);
    });
  }, [cat]);

  return (
    <div className="container  ">
      <ItemList productos={products}> </ItemList>
    </div>
  );
};

export default ItemListContainer;
