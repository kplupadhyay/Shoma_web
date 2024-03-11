import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using axios for HTTP requests
import { Card, Button } from 'react-bootstrap';

const BackendCardComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3600/api/cat');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <Card>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                {/* <Card.Title>{item.title}</Card.Title> */}
                {/* <p>Lorem ipsum dolor sit amet.</p> */}
                {/* <Card.Text>{item.description}</Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
             
            </Card>
            <div className='text-center'> 
            <p className='mt-4'>Men/Women</p>
            <strong className='mt-1'>{item.text}</strong>
            <p>$ {item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BackendCardComponent;
