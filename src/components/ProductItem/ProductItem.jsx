import React from 'react';
import './ProductItem.css';
import {Button} from "@mui/material";

const ProductItem = ({product, className, onAdd}) => {

    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className={'product ' + className}>
            <div className={'title'}>{product.title}</div>
            <div>Продукты: {product.products.map((item) => item.title).join(', ')}</div>
            <div className={'description'}>Доп.информация: {product.description}</div>
            <Button variant="contained" onClick={onAddHandler}>
                Добавить в список
            </Button>
        </div>
    );
};

export default ProductItem;
