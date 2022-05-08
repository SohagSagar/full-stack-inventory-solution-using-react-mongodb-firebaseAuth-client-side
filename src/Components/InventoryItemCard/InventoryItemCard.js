import React from 'react';
import './InventoryItemCard.css'

const InventoryItemCard = () => {
    return (
        <div className='container'>
            <div className='inventory-card'>
                <img src="https://i.ibb.co/YpYkW13/drone.png" alt="" />
                <div className="inventory-product-info">
                    <table className='table '>
                        <tr>
                            <th>Product_Name</th>
                            <td>Dji Drone</td>
                        </tr>
                        <tr>
                            <th>Product_Price</th>
                            <td>$500</td>
                        </tr>
                        <tr>
                            <th>Quantity</th>
                            <td>100</td>
                        </tr>
                        <tr>
                            <th>Supplier</th>
                            <td>Dji Corporation</td>
                        </tr>
                        <tr>
                            <th>Description</th>
                            <td>DJI manufactures commercial unmanned aerial vehicles for aerial photography and videography.</td>
                        </tr>

                    </table><hr className='table-hr-line'/>

                    <button className='btn btn-secondary btn-style card-btn-style'>Update Product</button>
                </div>
            </div>
        </div>
    );
};

export default InventoryItemCard;