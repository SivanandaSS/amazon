import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


function HandlCategory () {
    const {categories} = useParams();
    const [productCat, setProductCat] = useState({categories : ""});

    useEffect(() => {
        fetch('http://localhost:8000/amazon/category?name=Literature%20&%20Fiction')
            .then(res => res.json())
                .then()
    })

    useEffect
        return(



        )

}