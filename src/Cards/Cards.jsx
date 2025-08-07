import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Cards (props) {

    return(
        <Card style={{ width: '18rem' }}  className='m-2'>
                <Card.Img variant="top" src={props.image_url} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">{categories.name}</Card.Subtitle> */}
                    <Card.Text>{props.rating}</Card.Text>
                   
                    <Card.Text>{props.availability}</Card.Text>
                  
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
        </Card>
     
    );

}

// initiate property types

Cards.propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.string,
    categories: PropTypes.oneOfType ([PropTypes.string, PropTypes.array, PropTypes.object,]), // If categories can be anything (string, array, or object)
    rating : PropTypes.string,
    final_price: PropTypes.number,
    format: PropTypes.array, // if an array
    availability: PropTypes.string,
    image_url: PropTypes.string

}

export default Cards


        /*     for example: 

            "categories": ["Books", "Literature & Fiction", "Genre Fiction"],
            "format": [
                { "name": "Kindle", "price": "$0.99", "url": "/..." },
                        ...
                    ],

        */

        /* If categories can be anything (string, array, or object)
        <Card.Text>
          Categories: {Array.isArray(props.categories)
            ? props.categories.join(", ")
            : props.categories ?? "N/A"}
        </Card.Text> */

       // or

        /* // Safe fallback rendering 
        <Card.Text>
          Categories: {typeof props.categories === 'string' ? props.categories : JSON.stringify(props.categories)}
        </Card.Text> */

        /* is an array
        <Card.Text>
          Formats:{" "}
          {Array.isArray(props.format)
            ? props.format.map((f) => f.name).join(", ")
            : "N/A"}
        </Card.Text> */

        /* is is an object with name
        <Card.Title>
            {props.categories.name}
        </Card.Title>
        
        */