import React from 'react';
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';
import {Button} from "@mui/material";

const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <Button variant="contained" onClick={onClose}>Вернутся к боту</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;
