import React from 'react';
import { Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import useLoadAllInventory from '../../Hooks/useLoadAllInventory';
import './ManageInventory.css';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Loading from '../../Utilities/Loading/Loading';

const ManageInventory = () => {
    let count = 1;
    const [inventories, setInventories] = useLoadAllInventory();
    const handleDelete = (id) => {
        const deletePermission = window.confirm('Are you sure to delete?');

        if (deletePermission) {
            const url = `https://inventory-management-assignmen.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = inventories.filter(inventory => inventory._id !== id);
                    setInventories(remaining);
                    if (data.deletedCount > 0) {

                        toast.success("Delete Successful !!", {
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
    }

    return (
        <div className='container'>

            <h3 className='section-heading'>Manage Inventory</h3><hr style={{ marginTop: '0' }} />

            <div className='d-flex'>
                <button className='btn btn-secondary btn-style contract-btn add-item-btn' type="submit"><Link style={{ textDecoration: 'none', color: 'whitesmoke' }} to={'/add-items'}>Add New Item <BsArrowRight /></Link></button>
            </div>

            {
                inventories.length<1 && <Loading />
                
            }

            <Table responsive>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Product Name</th>
                        <th>Price ($)</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Supplier</th>
                        <th>Action</th>

                    </tr>
                </thead>



                <tbody>

                    {

                        inventories.map(inventory =>

                            <tr className='table-img' key={inventory?._id}>
                                <td>{count++}</td>
                                <td>{inventory?.productName?.slice(0, 25)}</td>
                                <td>{inventory?.productPrice}</td>
                                <td><img src={inventory?.productImgURL} alt="product img" /></td>
                                <td>{inventory?.productQuantity}</td>
                                <td>{inventory?.productSupplier}</td>
                                <td className='table-btn'>
                                    <button className='btn btn-success me-2'><Link style={{ textDecoration: 'none', color: 'whitesmoke' }}
                                        to={`/update-inventory/${inventory?._id}`}>Update</Link></button>

                                    <button onClick={() => handleDelete(inventory?._id)} className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>)
                    }

                </tbody>

            </Table>
        </div>
    );
};

export default ManageInventory;