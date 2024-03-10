import { useState, useEffect } from 'react';
import { getProducts } from '../../api/api';
import {ClipLoader} from 'react-spinners'
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

        }); }, 500) ; 
    
        // Limpando o timeout se o componente for desmontado antes de 2 segundos
        return () => clearTimeout(timeoutId);
      }, []);
   

    return (
      <>
      {loading ? (
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

