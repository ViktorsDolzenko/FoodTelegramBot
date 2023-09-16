import React, {useState} from 'react';
import AutoComplete from "../AutoComplete/AutoComplete";
import {Box, Button, TextField} from "@mui/material";
import {db} from "../../firebase";
import {addDoc, collection} from 'firebase/firestore'
import {Link} from "react-router-dom";

const NewProduct = () => {
    const [newProductTitle, setNewProductTitle] = useState('');
    const [newProductDescription, setNewProductDescription] = useState('');
    const [newIngredients, setNewIngredients] = useState([]);
    const [newProductObj, setNewProductObj] = useState([]);
    const foodListCollectionRef = collection(db, 'Products');

    const handleCallback = (childData) => {
        setNewIngredients(childData)
    }

    const handleQuantityChange = (e, itemIndex) => {
        const updatedProductObj = [...newProductObj];
        updatedProductObj[itemIndex] = {
            title: newIngredients[itemIndex],
            quantity: e.target.value,
        };
        setNewProductObj(updatedProductObj);
    };

    const addNewProduct = async () => {
        try {
            await addDoc(foodListCollectionRef, {
                title: newProductTitle,
                description: newProductDescription,
                products: newProductObj
            })
        }catch (err) {console.error(err)}
    }

    return (
       <div>
           <TextField
               required
               id="title"
               label="Название блюда"
               onChange={(e) => setNewProductTitle(e.target.value)}
               sx={{ m: 2, background: "white"}}
           />
           <AutoComplete
               handleCallback={handleCallback}
               id="products"/>
           <div>
               {
                   newIngredients.map((item, index) => {
                       return <div style={{display: 'flex', alignItems: 'center', marginLeft: 20}}><div style={{width: 70}}>{item}:</div> <TextField sx={{background: "white"}}  onChange={(e) => handleQuantityChange(e, index)} sx={{m: 2}} id={`quantity-${index}`} label="Количество-Грамм"/></div>
                   })
               }
           </div>
           <TextField
               sx={{ m: 2, width: 300, background: "white"}}
               id="description"
               label="Дополнительная информация"
               onChange={(e) => setNewProductDescription(e.target.value)}
               multiline
               rows={3}
           />
        <Box sx={{m: 2}}>
            <Button variant="contained" onClick={() => addNewProduct()} >Добавить новое блюдо</Button>
        </Box>
           <Box sx={{display: 'flex', m: 2}}>
               <Button variant="contained"><Link to='/' style={{textDecoration: 'none', color: 'white'}}>Назад к списку блюд</Link></Button>
           </Box>
       </div>
    );
};

export default NewProduct;
