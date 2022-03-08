import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2';
import { Card } from 'react-bootstrap';
import "./styles.css";

const MenClothing = () => {

    const [menClothing, setMenClothing] = useState([])

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        await axios.get(`http://localhost:8000/api/men-clothing`).then(({ data }) => {
            setMenClothing(data)
        })
    }

    const deleteProduct = async (id) => {
        const isConfirm = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            return result.isConfirmed
        });

        if (!isConfirm) {
            return;
        }

        await axios.delete(`http://localhost:8000/api/men-clothing/${id}`).then(({ data }) => {
            Swal.fire({
                icon: "success",
                text: data.message
            })
            fetchProducts()
        }).catch(({ response: { data } }) => {
            Swal.fire({
                text: data.message,
                icon: "error"
            })
        })
    }

    return (
        <div className="men-clothing-section">
        <div className="container">
            <div className="row">
                {/* <div className='col-12'>
                    <Link className='btn btn-primary mb-2 float-end' to={"../men-clothing/create"}>
                        Create Product
                    </Link>
                </div> */}
                <h1>Men's Sports Suit</h1>
<div className='menu-box'>
                            {
                                menClothing.length > 0 && (
                                    menClothing.map((row, key) => (


                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" alt='' src={`http://localhost:8000/storage/men-clothing/image/${row.image}`} />
                                            <Card.Body>
                                                <Card.Title>{row.title}</Card.Title>
                                             
                                                <Card.Text>
                                                   price: {row.price} $
                                                </Card.Text>
                                                {/* <Link to={`/men-clothing/edit/${row.id}`} className='btn btn-success me-2'>
                                                    Edit
                                                </Link>
                                                <Button variant="danger" onClick={() => deleteProduct(row.id)}>
                                                    Delete
                                                </Button> */}
                                            </Card.Body>
                                        </Card>







                                    ))
                                )
                            }
                            </div>
                        </div>
                    </div>
                    </div>
           
    )
}

export default MenClothing;