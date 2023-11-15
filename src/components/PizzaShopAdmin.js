import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const PizzaShopAdmin = (props) => {

    const { loggedIn, email } = props

    const navigate = useNavigate();

    

    const onButtonClick = () => {

        if (loggedIn) {

            localStorage.removeItem("user")

            props.setLoggedIn(false)

        } else {

            navigate("/startorder")

        }

    }


    return <div className="mainContainer">

        <div className={"titleContainer"}>

            <div>PIZZA SHOP</div>

        </div>

        <div>Admin</div>

        <div className={"buttonContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value="Employee Information" />
        </div>

        <div className={"buttonContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value="Weekly Statistics" />
        </div>

        <div className={"buttonContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value="Start an order" />
        </div>

    </div>
}


export default PizzaShopAdmin