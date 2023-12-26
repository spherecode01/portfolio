import "./Products.scss";
import Product from './Product/Product';
const Products = ({ products, innerPage, headingText }) => {
    return (
        <div className="products-container">
            {!innerPage && <div className="sec-heading">{headingText}</div>}
            <div className="products">
                {products?.data?.map(item => {
                    //console.log(item.attributes);
                    return (<Product key={item.id}
                        id={item.id}
                        data={item.attributes} />
                    )
                    //{console.log(products, "from Products")}
                })}

            </div>
        </div>
    )
};

export default Products;
