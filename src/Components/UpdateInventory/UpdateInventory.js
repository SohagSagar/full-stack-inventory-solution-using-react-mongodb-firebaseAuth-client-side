import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './UpdateInventory.css';
import { RiArrowLeftSFill } from 'react-icons/ri';
import { Modal } from 'react-bootstrap';
import { MdError } from 'react-icons/md';
import { toast } from 'react-toastify';

const UpdateInventory = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [errorMessage, setErrorMessage] = useState('')

    const [inventoryInfo, setInventoryInfo] = useState({});
    const { id } = useParams();
    const url = `https://inventory-management-assignmen.herokuapp.com/inventories/${id}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => { setInventoryInfo(data); })
    }, [inventoryInfo]);
    const { _id, productName, productImgURL, productPrice, productQuantity, productSupplier, productDescription } = inventoryInfo;
    

    const handleUpdadeStock = (event) => {
        event.preventDefault();
        const productQuantity = event.target.updateStock.value;
        if (productQuantity < 1) {
            const error = 'Expect Positive Value';
            setErrorMessage(error);
            return;
        }
        setErrorMessage('');
        const updatedStock = { productQuantity };
        const updateUrl = `https://inventory-management-assignmen.herokuapp.com/inventory/${id}`;
        fetch(updateUrl, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStock)
        })
            .then(res => res.json())
            .then(data => {
                
                if(data.modifiedCount>0){
                    toast.success("Stock Updated Successfully !!", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }
            })

        console.log(productQuantity);
        setShow(false);
        
    }

    const handleDeliveredItem=()=>{
        const  productQuantity=inventoryInfo?.productQuantity-1;
        const afterDeliverdQuantity ={productQuantity}

        const deleveredUrl = `https://inventory-management-assignmen.herokuapp.com/inventory/${id}`;
        fetch(deleveredUrl, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(afterDeliverdQuantity)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount>0 && productQuantity>-1){
                    toast.success("Delivered Successfully !!", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }else if(productQuantity<0){
                    toast.error("Product stock out !!", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }
            })
    }


    return (
        <div className='container'>

            <Modal show={show} onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter" size='sm'
                centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleUpdadeStock}>
                        <div className='forgot-pass-section'>
                            <Modal.Title style={{ fontSize: '1.2em', fontWeight: '600', marginTop: '0px' }} className='reset-password-heading text-center '>Restock Item</Modal.Title>
                            <p style={{ fontSize: '0.9em', color: 'green' }} className='mt-0 text-center'>Current Stock : <span className={productQuantity<1 ? 'text-danger' : ""}> 
                            {
                                productQuantity<1 ? 'Stock out' : productQuantity
                            }
                              </span> </p>

                            
                            <input className='form-control' type="number" name='updateStock' placeholder='Stock amount' required />
                            {
                                errorMessage && <p className='text-danger'><span style={{fontSize:'0.8em'}}><MdError/> {errorMessage}</span></p>
                            }

                            <div className='update-stock-btn'>
                                <button className='btn btn-secondary btn-style contract-btn restock-btn  mt-3 ps-4 pt-1' type="submit">Update Stock</button>
                            </div>

                        </div>
                    </form>
                </Modal.Body>
            </Modal>


            <h3 className='section-heading'>Update Item</h3><hr style={{ marginTop: '0' }} />

            <div className='back-btn'>
                <Link style={{ textDecoration: 'none', color: '#212529', fontWeight: '600' }} to={'/manage-inventory'}><RiArrowLeftSFill />Back</Link>
            </div>

            <div className="item-container">
                <div className="item-img">
                    <img src={productImgURL} alt="Product image_" />
                </div>

                <div className="item-details">
                    <p>Item Descriptions</p><hr className='table-hr-line' />
                    <table className='table '>
                        <tr>
                            <th>Product_ID</th>
                            <td>{_id}</td>
                        </tr>
                        <tr>
                            <th>Product_Name</th>
                            <td>{productName}</td>
                        </tr>
                        <tr>
                            <th>Product_Price</th>
                            <td>$ {productPrice}</td>
                        </tr>
                        <tr>
                            <th>Quantity</th>
                            {
                                productQuantity<1 ? 
                                <td className='text-danger'>Stock Out</td>
                                :
                                <td>{productQuantity}</td>
                            }
                        </tr>
                        <tr>
                            <th>Supplier</th>
                            <td>{productSupplier}</td>
                        </tr>
                        <tr>
                            <th>Description</th>
                            <td>{productDescription}</td>
                        </tr>

                    </table><hr className='table-hr-line' />

                    <div>
                        <button onClick={handleShow} className='btn btn-secondary btn-style contract-btn restock-btn me-2'>Restock</button>
                        <button onClick={handleDeliveredItem} className='btn btn-secondary btn-style contract-btn restock-btn'>Delivered</button>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default UpdateInventory;