/* eslint-disable react/prop-types */
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const oneItem = doc(db, "productos", `${id}`);
    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        const doc = snapshot.data();
        setProduct({ idDB: snapshot.id, ...doc });
      }
    });
  }, []);

  return (
    <div className="container">
      <ItemDetail productos={product}> </ItemDetail>
    </div>
  );
};

export default ItemDetailContainer;
