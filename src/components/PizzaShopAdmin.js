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

            navigate("/login")

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
            {(loggedIn ? <div>
                Your email address is {email}
            </div> : <div/>)}
        </div>

        <div className={"buttonContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value="Weekly Statistics" />
            {(loggedIn ? <div>
                Your email address is {email}
            </div> : <div/>)}
        </div>

        <div className={"buttonContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value="Start an order" />
            {(loggedIn ? <div>
                Your email address is {email}
            </div> : <div/>)}
        </div>

    </div>
}


export default PizzaShopAdmin