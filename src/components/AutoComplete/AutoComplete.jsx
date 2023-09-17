
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function AutoComplete({handleCallback}) {
    return (
        <Stack spacing={3} sx={{ width: 300 , m: 2}}>
            <Autocomplete
                sx={{ background: "white"}}
                multiple
                id="tags-filled"
                options={products.map((option) => option.title)}
                onChange={(_e, newValue) => handleCallback(newValue)}
                defaultValue={[]}
                freeSolo
                renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                        <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                    ))
                }
                renderInput={(params) => (
                    <TextField
                        sx={{background: "white"}}
                        {...params}
                        required
                        label="Продукты"
                        placeholder="Выберите продукты"
                    />
                )}
            />
        </Stack>
    );
}
const products = [
        {title: "Яблоко"},
        {title: "Банан"},
        {title: "Молоко"},
        {title: "Хлеб"},
        {title: "Яйца"},
        {title: "Картофель"},
        {title: "Морковь"},
        {title: "Куриное мясо"},
        {title: "Говяжье мясо"},
        {title: "Рыба"},
        {title: "Сыр"},
        {title: "Макароны"},
        {title: "Оливковое масло"},
        {title: "Сахар"},
        {title: "Соль"},
        {title: "Перец"},
        {title: "Кофе"},
        {title: "Чай"},
        {title: "Помидоры"},
        {title: "Огурцы"},
        {title: "Апельсины"},
        {title: "Грейпфруты"},
        {title: "Киви"},
        {title: "Манго"},
        {title: "Авокадо"},
        {title: "Фундук"},
        {title: "Миндаль"},
        {title: "Грецкий орех"},
        {title: "Фисташки"},
        {title: "Кешью"},
        {title: "Инжир"},
        {title: "Чернослив"},
        {title: "Какао-порошок"},
        {title: "Кокосовое молоко"},
        {title: "Йогурт"},
        {title: "Кефир"},
        {title: "Рябина"},
        {title: "Клюква"},
        {title: "Малина"},
        {title: "Ежевика"},
        {title: "Апельсиновый сок"},
        {title: "Грушевый сок"},
        {title: "Клюквенный сок"},
        {title: "Черника"},
        {title: "Молоко кокосовое"},
        {title: "Семена льна"},
        {title: "Семена чиа"},
        {title: "Горох"},
        {title: "Фасоль"},
        {title: "Редис"},
        {title: "Брокколи"},
        {title: "Ананасы"},
        {title: "Гранат"},
        {title: "Виноград"},
        {title: "Арбуз"},
        {title: "Киви"},
        {title: "Персики"},
        {title: "Сливы"},
        {title: "Шоколадные батончики"},
        {title: "Снэк-палочки"},
        {title: "Лимонад"},
        {title: "Минеральная вода"},
        {title: "Энергетические напитки"},
        {title: "Лосось"},
        {title: "Тунец"},
        {title: "Креветки"},
        {title: "Кальмары"},
        {title: "Сливки"},
        {title: "Ряженка"},
        {title: "Творог"},
        {title: "Кукуруза"},
        {title: "Фасоль"},
        {title: "Редис"}
    ];
