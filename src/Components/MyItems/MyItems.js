import React, { useEffect, useState } from 'react';
import auth from '../../Utilities/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useLoadAllInventory from '../../Hooks/useLoadAllInventory';
import Loading from '../../Utilities/Loading/Loading';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [inventories, setInventories] = useLoadAllInventory();
    const [myItems, setMyItems] = useState([]);
    let count = 1;
    useEffect(() => {
        const url = `https://inventory-management-assignmen.herokuapp.com/inventories?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyItems(data)
            })
    }, []);

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
                    console.log(inventories.length);
                    console.log(data);
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
            <h3 className='section-heading'>My Items</h3><hr style={{ marginTop: '0' }} />
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

                        myItems.map(myItem =>

                            <tr className='table-img' key={myItem?._id}>
                                <td>{count++}</td>
                                <td>{myItem?.productName?.slice(0, 25)}</td>
                                <td>{myItem?.productPrice}</td>
                                <td><img src={myItem?.productImgURL} alt="product img" /></td>
                                <td>{myItem?.productQuantity}</td>
                                <td>{myItem?.productSupplier}</td>
                                <td className='table-btn'>
                                    <button className='btn btn-success me-2'><Link style={{ textDecoration: 'none', color: 'whitesmoke' }}
                                        to={`/update-inventory/${myItem?._id}`}>Update</Link></button>

                                    <button onClick={() => handleDelete(myItem?._id)} className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>)
                    }

                </tbody>

            </Table>
        </div>
    );
};

export default MyItems;