import React from 'react';
import { Link } from 'react-router-dom';
import './InventoryItemCard.css'

const InventoryItemCard = ({inventory}) => {
    const {_id,productName,productImgURL,productPrice,productQuantity,productSupplier,productDescription}= inventory;
    return (
        <div className='container'>
            <div className='inventory-card'>
                <img src={productImgURL} alt="" />
                <div className="inventory-product-info">
                    <table className='table '>
                        <tr>
                            <th>Product_Name</th>
                            <td>{productName?.slice(0,20)}</td>
                        </tr>
                        <tr>
                            <th>Product_Price</th>
                            <td>$ {productPrice}</td>
                        </tr>
                        <tr>
                            <th>Quantity</th>
                            <td>{productQuantity}</td>
                        </tr>
                        <tr>
                            <th>Supplier</th>
                            <td>{productSupplier}</td>
                        </tr>
                        <tr>
                            <th>Description</th>
                            <td>{productDescription?.slice(0,60)}</td>
                        </tr>

                    </table><hr className='table-hr-line'/>

                    <button className='btn btn-secondary btn-style card-btn-style'><Link style={{ textDecoration: 'none', color:'whitesmoke' }} to={`update-inventory/${_id}`}>Update Product</Link></button>
                </div>
            </div>
        </div>
    );
};

export default InventoryItemCard;