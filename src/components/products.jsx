import React, { useState, useEffect } from "react";
import StarRating from './starrating';

export const Products = (searchQuery) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setquery] = useState(searchQuery);
  //console.log(filteredProducts);
  //console.log(searchQuery); // value print here
  // Fetch products from the API
  useEffect(() => {
	  console.log("Text here");
    const fetchProducts = async () => {
		console.log(searchQuery.searchQuery); // not printing
      try {
		  let response;
		  if(searchQuery.searchQuery !== ''){
			response = await fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(searchQuery.searchQuery)}`);  
		  }else{
			response = await fetch("https://dummyjson.com/products");
		  }
		  console.log(response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
		console.log(data);
        setProducts(data.products); // Assuming the API returns an array of products
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchQuery]);

  // Handle loading and error states
  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
<div className="container-fluid pt-5">
        <div className="text-center mb-4">
            <h2 className="section-title px-5"><span className="px-2">Products</span></h2>
        </div>
        <div className="row px-xl-5 pb-3">		
            {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100 bg" src={product.images} alt="" />
						<i class="fas fa-heart text-primary topright"></i>
                    </div>
                    <div className="card-body border-left border-right border-bottom pt-4 pb-3">
                        <h6 className="text-truncate mb-3">{product.title}</h6>
						<p className="text-justify mb-3">{product.description}</p>
                        <div className="d-flex justify-content">
                            <h6>${product.price}</h6>
                        </div>
						<div className="d-flex justify-content">						
							<StarRating rating={product.rating} />
						</div>
                    </div>
                    
                </div>
            </div>
        ))
      ) : (
        <p>No products available</p>
      )}
        </div>
    </div>
);
};	