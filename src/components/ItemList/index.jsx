import { useState, useEffect } from 'react';
import { getProducts } from '../../api/api';
import {ClipLoader} from 'react-spinners'
// import { SearchBar } from '../SearchBar/Index';
import { Item } from '../Item/index'

const ItemList = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);


  useEffect(() => {

    
    const timeoutId = setTimeout(() => {

      // Fazer a solicitação para a API
      getProducts()
        .then(response => {
          setProducts(response.data);
          setFilteredProducts(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Erro ao buscar produtos:', error);

        }); }, 1500) ; 
    
        // Limpando o timeout se o componente for desmontado antes de 2 segundos
        return () => clearTimeout(timeoutId);
      }, []);
   
    // const handleSearch = (query) => {
    //   const filtered = products.filter((product) =>
    //     product.name.toLowerCase().includes(query.toLowerCase())
    //   );
    //   setFilteredProducts(filtered);
    // };

    return (
      <>
      {loading ? (
        // Mostra o indicador de carregamento enquanto os dados estão sendo carregados
        <div className="text-center">
          <ClipLoader color="#0b3935" loading={loading} size={40} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-12 pr-14 pl-14" >
          {filteredProducts.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
    );

  };

  export { ItemList };

// import  { useState, useEffect } from 'react';
// import { getProducts } from '../../api/api';
// import ProductCard from '../ProductCard/index';
// import SearchComponent from '../SearchBar/Index';


// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     getProducts()
//       .then((response) => {
//         setProducts(response.data);
//         setFilteredProducts(response.data);
//       })
//       .catch((error) => {
//         console.error('Erro ao buscar produtos:', error);
//       });
//   }, []);



//   return (
//     <div>
//       <h1 className="text-2xl font-semibold mb-4">Lista de Produtos</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//         {filteredProducts.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;