import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ListProducts } from '../actions/ProductActions'
import { useSelector, useDispatch } from 'react-redux'

export default function Home(props) {
    // const [ products , setProducts ] = useState([])
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(ListProducts)
        // const fetchData = async () => {
        //    const {data} = await axios.get("/api/products");
        //    setProducts(data)
        //    reeturn fetchData();
    }, [dispatch])

    return (
        loading ? <div> Loading </div> : error ? <div> {error} </div> : 
        <div>
            Home Page
            <ul className="products">
                {/* data file 대신에 이제 서버에서 데이터를 불러옴  */}
                {products.map( product => (
                  <li key={product.id}>
                  <div className="product"> 
                   <div className="product-img">
                   <Link to={`/products/${product.id}`}>
                       <img src="https://cdn.pixabay.com/photo/2014/05/18/11/26/shoes-346986_1280.jpg" alt="running shoes"></img>
                    </Link>

                   </div>
                   <div className="product-name"> <Link to={`/products/${product.id}`}>{product.name}</Link></div>
                   <div className="product-brand"> {product.brand} </div>
                   <div className="product-price"> {product.price} </div>
                   <div className="product-raiting"> {product.rating}</div>
                 </div>
               </li>
                ))}
            </ul>
        </div>
    )
}
