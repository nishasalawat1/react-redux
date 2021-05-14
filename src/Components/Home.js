import React from 'react';

function Home(props) {
    console.log("Component", props.data)
    return (
        <div>
            <div className="add-to-cart">
            <span className="cart-count">{props.data.length}</span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="http://codeskulptor-demos.commondatastorage.googleapis.com/pang/FDqGDmc.png" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={
                        () => { props.addToCartHandler({ price: 1000, name: 'I-Phone' }) }
                    }>Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Home;