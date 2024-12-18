import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { list } from './data';
import { List } from './cartType';

const CartList:React.FC = () => {

  const [myCarts, setMyCarts] = useState<List[]>([]);

  const handleUpdate = (event: List) => {
    // Check if the item already exists in the cart
    const itemExists = myCarts.some((cartItem) => cartItem.fruit === event.fruit);

    

    if (itemExists) {
      // Remove the item from the cart
      setMyCarts(myCarts.filter((cartItem) => cartItem.fruit !== event.fruit));
    } else {
      // Add the item to the cart

      //one way
    /*   const myNew:List = {
        fruit:event.fruit,
        description:event.description,
        image_url:event.image_url,
        price:event.price,
        add:true

      }
      setMyCarts([...myCarts, myNew]); */

// second way

      setMyCarts([...myCarts, { ...event, add: true }]);
    }
  };

  return (
    <>

      {list.map((item, id) => (
        <Card key={id} style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{item.fruit}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <p>{item.price}</p>

        
            <Button
              onClick={() => handleUpdate(item)}
              variant={myCarts.some((cartItem) => cartItem.fruit === item.fruit) ? 'danger' : 'primary'}
            >
              {myCarts.some((cartItem) => cartItem.fruit === item.fruit) ? 'Remove' : 'Add'}
            </Button>
          </Card.Body>
        </Card>
      ))}
    
    </>
  );
};

export default CartList;
