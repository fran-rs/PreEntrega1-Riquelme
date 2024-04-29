import { useEffect, useState } from "react";
import { getDocs, query, where, collection } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/firebaseConfig";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(products);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");

    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collectionRef);
        console.log(querySnapshot);
        const productsAdapted = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsAdapted);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      // Limpiar el estado de carga al desmontar el componente
      setLoading(false);
    };
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
