import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Utilities/firebase.init';
import './AddItems.css';
import { MdError } from 'react-icons/md';

const AddItems = () => {
    const [user] = useAuthState(auth);
    const [priceErrorMessage, setPriceErrorMessage] = useState('');
    const [quantityErrorMessage, setQuantityErrorMessage] = useState('');



    const [productsInfo, setProductsInfo] = useState({});
    console.log(user.email);
    const handleAddItem = (event) => {
        event.preventDefault();
        const email = user?.email;
        const productName = event.target.productName.value;
        const productImgURL = event.target.productImgURL.value;
        const productPrice = event.target.productPrice.value;
        
        if (productPrice < 1) {
            setPriceErrorMessage('Expect Positive Input !!');
            return;
        } else {
            setPriceErrorMessage('');
        }
        const productQuantity = event.target.productQuantity.value;
        if (productQuantity < 1) {
            setQuantityErrorMessage('Expect Positive Input !!');
            return;
        } else {
            setQuantityErrorMessage('');
        }
        const productSupplier = event.target.productSupplier.value;
        const productDescription = event.target.productDescription.value;
        const addNewProduct = { email, productName, productImgURL, productPrice, productQuantity, productSupplier, productDescription };
        console.log(addNewProduct);
        setProductsInfo(addNewProduct);
        event.target.reset();


        //send data to server//

        fetch('https://inventory-management-assignmen.herokuapp.com/inventory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(addNewProduct),
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                if (data.insertedId) {

                    toast.success("Add Successful !!", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }
                else {
                    toast.error("Something went wrong !!", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }
            })




    }




    return (
        <div className='container add-item-container'>
            <h3 className='section-heading'>Add An Item</h3><hr style={{ marginTop: '0' }} />

            <div className='form-section'>
                <form onSubmit={handleAddItem}>
                    <input className='form-control mb-1' type="text" name='productName' placeholder='Product Name' />

                    <input className='form-control mb-1' type="text" name='productImgURL' placeholder='Product image URL ' />

                    <div className='d-flex'>
                        <div className='me-1'>
                            <input className='form-control mb-1 ' type="number" name='productPrice' placeholder='Product Price' />
                            {
                                priceErrorMessage && <p className='text-danger'><span style={{ fontSize: '0.8em' }}><MdError /> {priceErrorMessage}</span></p>
                            }
                        </div>

                        <div>
                            <input className='form-control mb-1 ' type="number" name='productQuantity' placeholder='Product Quantity' />
                            {
                                quantityErrorMessage && <p className='text-danger'><span style={{ fontSize: '0.8em' }}><MdError /> {quantityErrorMessage}</span></p>
                            }
                        </div>
                    </div>

                    <input className='form-control mb-1' type="text" name='productSupplier' placeholder='Supplier Name ' />

                    <textarea className='form-control' name="productDescription" id="" cols="3" rows="2" placeholder='Product Description...'></textarea>

                    <div className='d-flex'>
                        <button className='btn  btn-secondary btn-style contract-btn ' type="submit">Add Item</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItems;