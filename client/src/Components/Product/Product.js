// src/components/Product/Product.js
import React, { useState } from 'react';
import './Product.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Actions/cartActions';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para navegación

const Product = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const navigate = useNavigate(); // Obtiene la función de navegación
    const [termAndConditions, settermAndConditions] = useState(false);

    const product = {
        id: 1,
        name: 'Consulta Médica Online',
        description: 'Una consulta médica en línea con un profesional de la salud.',
        price: 2500,
    };

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        // Muestra el pop-up con los términos y condiciones
        setPopupOpen(true);
    };

    const handleTick = () => { 
        settermAndConditions(true)
    }

    const handleAccept = () => {
        // Guarda el producto en el carrito usando el estado global
        dispatch(addToCart(product));
        // Redirige a "/formdepaciente" sin cerrar el pop-up
        termAndConditions === true ?
        navigate('/formdepaciente'): window.alert("Debes aceptar los términos y condiciones para continuar")
    };

    const handleCancel = () => {
        // Cierra el pop-up
        setPopupOpen(false);
    };

    return (
        <div className="product">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <button onClick={handleAddToCart}>Solicitar consulta médica</button>

            {isPopupOpen && (
                <div className="popup">
                    <p>Recuerde los síntomas por los que puede pedir.</p>
                    <label>
                        <input type="checkbox" onChange={handleTick}/> Acepto los términos y condiciones
                    </label>
                    <br/>
                    <button onClick={handleCancel}>Cancelar</button>
                    <br/>
                    <button onClick={handleAccept}>Continuar</button>
                </div>
            )}
        </div>
    );
};

export default Product;
