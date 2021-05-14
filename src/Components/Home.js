import React from 'react';

function Home(props) {
    console.log("Home Component", props.data)
    return (
        <div>
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
                    <button className="Add-btn" onClick={
                        () => { props.addToCartHandler({ price: 1000, name: 'I-Phone' }) }
                    }>Add To Cart</button>
                    <button className="remove-btn" onClick={
                        () => { props.removeFromCartHandler() }
                    }>Remove To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Home;