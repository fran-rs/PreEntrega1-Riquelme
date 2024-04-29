import React, { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
      .then((response) => {
        if (response.exists()) {
          const data = response.data();
          const productAdapted = { id: response.id, ...data };
          setProduct(productAdapted);
        } else {
          setError("El producto no se encontró");
        }
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setError("Hubo un error al cargar el producto");
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  return (
    <div className="ItemDetailContainer">
      {loading && <p>Cargando producto...</p>}
      {error && <p>{error}</p>}
      {product && <ItemDetail {...product} />}
    </div>
  );
};

export default ItemDetailContainer;
