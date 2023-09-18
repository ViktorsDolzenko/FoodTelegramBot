import React, {useState} from 'react';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";
import {useCallback, useEffect} from "react";
import {db} from "../../firebase";
import {getDocs, collection} from 'firebase/firestore'
import {Button} from "@mui/material";
import {Link} from "react-router-dom";


const ProductList = () => {
    const [foodList, setFoodList] = useState([])
    const foodListCollectionRef = collection(db, 'Products')
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId} = useTelegram();

    const onSendData = useCallback(() => {
        const getAllProducts = addedItems.map((item) => item.products).flat()
        let uniqueItems = {};
        getAllProducts.forEach(item => {
            const title = item.title;
            const quantity = Number(item.quantity);

            if (title in uniqueItems) {
               uniqueItems[title].quantity += quantity;
            } else {
                uniqueItems[title] = { title, quantity };
            }
        });
            const allProducts = Object.values(uniqueItems)
        const data = {
            products: addedItems,
            allProducts,
            queryId: window.Telegram.WebApp.initDataUnsafe.query_id,
        }
        console.log(data);
        fetch(`api/web-data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }, [addedItems])

    useEffect(() => {
        const getFoodList = async () => {
            try{
            const data = await getDocs(foodListCollectionRef);
            const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
            setFoodList(filteredData);
            } catch (err) {
                console.error(err)
            }
        }
        getFoodList();
    }, [])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];
        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Вывести в чате`
            })
        }
    }

    return (
        <>
        <div className={'list'}>
            {foodList.map(item => (
                <ProductItem
                    key={item.id}
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
            <div>
                <Button sx={{m: 2}} variant="contained"><Link style={{textDecoration: 'none', color: 'white'}} to='newProduct'>Создать новое блюдо</Link></Button>
            </div>
            </>
    );
};

export default ProductList;
