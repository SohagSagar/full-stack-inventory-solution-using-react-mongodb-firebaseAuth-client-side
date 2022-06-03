import React from 'react';
import './InventoryItems.css';
import InventoryItemCard from '../../InventoryItemCard/InventoryItemCard';
import useLoadAllInventory from '../../../Hooks/useLoadAllInventory';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import Loading from '../../../Utilities/Loading/Loading';


const InventoryItems = () => {
    const [inventories] = useLoadAllInventory();
    console.log(inventories);
    return (
        <div className='inventory-container'>
            <div className='container '>
                <h3 className='section-heading'>Inventory Items</h3><hr style={{ marginTop: '0' }} />

                <div className='inventory-item-card'>
                    {
                        inventories.length < 1 && <Loading />

                    }
                    {

                        inventories.slice(0, 6).map(inventory => <InventoryItemCard key={'_id'} inventory={inventory}></InventoryItemCard>)

                    }
                </div>

                <div className='manage-inventory-btn-link'>
                    <p><Link style={{ fontSize: '1.4em', textDecoration: 'none', color: '#212529', fontWeight: 'bold' }} to={'/manage-inventory'}>Manage Inventories <BsArrowRight /></Link></p>
                </div>



            </div>
        </div>
    );
};

export default InventoryItems;