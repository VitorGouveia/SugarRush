import Products from '../db.json';

export function ProductCard() {
    return (
        <section className="product-section">
        {Products.map( db => {
            return (
                <div className="card-container">
                    <div className="card-content">
                         <h1 className="card-title">{db.products[0].name}</h1>
                         <p className="card-description">{db.products[0].description}</p>
                         <h2 className="card-price">R$ {db.products[0].price}</h2>
                    </div>

                    <img src={db.products[0].image} alt="" className="card-image" />
                </div>

            )
            })}
        </section>
    )
}