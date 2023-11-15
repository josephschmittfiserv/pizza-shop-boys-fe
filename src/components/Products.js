import React from "react"

import { useNavigate } from "react-router-dom";


const Products = (props) => {

    const { loggedIn, email } = props

    const navigate = useNavigate();

    

    const onButtonClick = () => {

        if (loggedIn) {

            localStorage.removeItem("user")

            props.setLoggedIn(false)

        } else {

            navigate("/products")

        }

    }


    return <div className="productsContainer">

        <div className={"titleContainer"}>

            <div>Products</div>

        </div>

        <div className={"buttonContainer"}>

            <input

                className={"inputButton"}

                type="button"

                onClick={onButtonClick}

                value="Done" />

            {(loggedIn ? <div>

                Your email address is {email}

            </div> : <div/>)}

        </div>



    </div>

}


export default Products