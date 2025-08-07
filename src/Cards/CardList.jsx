import { useState, useEffect } from "react";

import Cards from "./Cards";
import { Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


import HandlePagination from "../Pagination";


//      roots
//      http://localhost:8000/amazon/all
//      http://localhost:8000/amazon/available-stock
//      http://localhost:8000/amazon/format?name=Audiobook
//      http://localhost:8000/amazon/category?name=Literature%20&%20Fiction
//      http://localhost:8000/amazon/price?min=5&max=10
//      http://localhost:8000/amazon/rating?min=5&max=10


function CardList () {

    const [cards, setCards] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
   
    const productsPerPage = 8; // 8 products per page


    useEffect(() => {
        console.log("cardlist component")
        fetch ('http://localhost:8000/amazon/all')
            .then(res => res.json())
                .then(json => setCards(json)) // update state
                
                console.log('log data:');
                

    }, []); // The empty dependency array ensures this runs only once on mount

    // to handle pages
        const totalPages = Math.ceil(cards.length/ productsPerPage); // calculate total pages by round up
        const lastPosition = currentPage * productsPerPage; // calculate the last product of current page
        const firstPosition = lastPosition - productsPerPage; // calculate the first product of current page
        const currentCards = cards.slice(firstPosition, lastPosition); // extract products to display in current page :: for example .slice(1, 8)


        console.log({ firstPosition, lastPosition, totalPages, currentCards });


    return(
    <Container className="justify-content">
        <Row className="align-items-center">
                {currentCards.map((card) => (
                    <Cards md={3} className="mb-4"
                    key = {card._id}
                    _id = {card._id}
                    image_url = {card.image_url}
                    title = {card.title}
                    categories = {card.categories}
                    rating = {card.rating}
                    format = {card.format}
                    availability = {card.availability}
                    />
                ))}
        </Row>

        {/* props to pagination */}
        <HandlePagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        />
    </Container>
    
    );
}

export default CardList