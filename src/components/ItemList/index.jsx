import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../api/api';
import {ClipLoader} from 'react-spinners'
import { Item } from '../Item/index'
import db from '../../services/firebase';
import { doc, collection, getDocs } from "firebase/firestore";



const ItemList = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "products");
        const snapshot = await getDocs(productsCollection);
        const productsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };
    fetchProducts();
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="#0b3935" loading={loading} size={40} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-12 pr-14 pl-14" >
          {products.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export { ItemList };

// const ItemList = () => {
//   const [loading, setLoading] = useState(true);
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const {id} = useParams()


//   // useEffect(() => {

    
//   //   const timeoutId = setTimeout(() => {

//   //     // Fazer a solicitação para a API
//   //     getProducts()
//   //       .then(response => {
//   //         setProducts(response.data);
//   //         setFilteredProducts(response.data);
//   //         setLoading(false);
//   //         // console.log('Array de produtos recebido:', response.data);
//   //       })
//   //       .catch(error => {
//   //         console.error('Erro ao buscar produtos:', error);

//   //       }); }, 500) ; 
    
//   //       // Limpando o timeout se o componente for desmontado antes de 2 segundos
//   //       return () => clearTimeout(timeoutId);
//   //     }, []);
   

//   useEffect(() => {
//     getProducts();
// }, []);

// function getProducts() {
//     const productsRef = doc(db, "products", id);
//     getDoc(productsRef).then((snapshot) => {
//         if(snapshot.exists()) {
//             setProducts({ id: snapshot.id, ...snapshot.data() });
//         }
//     });
// }

//     return (
//       <>
//       {loading ? (
//         <div className="text-center">
//           <ClipLoader color="#0b3935" loading={loading} size={40} />
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-12 pr-14 pl-14" >
//           {filteredProducts.map((product) => (
//             <Item key={product.id} product={product} />
//           ))}
//         </div>
//       )}
//     </>
//     );

//   };

//   export { ItemList };

