import React from 'react';
import './InventoryItems.css';
import InventoryItemCard from '../../InventoryItemCard/InventoryItemCard';


const InventoryItems = () => {
    
    return (
        <div className='inventory-container'>
            <div className='container '>
                <h3 className='section-heading'>Inventory Items</h3><hr style={{ marginTop: '0' }} />

                <div className='inventory-item-card'>
                    <InventoryItemCard />
                    <InventoryItemCard />
                    <InventoryItemCard />
                    <InventoryItemCard />
                    <InventoryItemCard />
                    <InventoryItemCard />
                </div>
            </div>
        </div>
    );
};

export default InventoryItems;