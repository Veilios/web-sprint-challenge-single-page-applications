import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, Cardbody, CardTitle, CardSubtitle, Button, CardBody } from 'reactstrap';

const Home = (props) => {

    console.log("Home props: ", props);

    return (
        <div>
            <img src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg" alt="Pizza"/>
            <Link to="/pizza" ><Button color="primary" >Pizza?</Button></Link>

            <div>
                <h2>Food Delivery in your Area</h2>

                <Card>
                <CardImg top width="100%" src="https://pixy.org/src/77/775101.jpg" alt="McDonalds" />
                <CardBody>
                    <CardTitle>McDonalds</CardTitle>
                    <CardSubtitle>$ - Amercian - Fast Food - Burgers</CardSubtitle>
                    <Button>20-30 min</Button><Button>$5.99 Delivery Fee</Button>
                </CardBody>
                </Card>
                
                <Card>
                <CardImg top width="100%" src="https://upload.wikimedia.org/wikipedia/commons/3/33/Sweetgreen_Storefront_%2848237024662%29.jpg" alt="SweetGreen" />
                <CardBody>
                    <CardTitle>SweetGreen</CardTitle>
                    <CardSubtitle>$ - Healthy - Salads</CardSubtitle>
                    <Button>30-45 min</Button><Button>$4.99 Delivery Fee</Button>
                </CardBody>
                </Card>

                <Card>
                <CardImg top width="100%" src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Starbucks_logo.jpg" alt="StarBucks" />
                <CardBody>
                    <CardTitle>StarBucks</CardTitle>
                    <CardSubtitle>$ - Cafe - Coffee & Tea - Breakfast & Brunch</CardSubtitle>
                    <Button>10-20 min</Button><Button>$3.99 Delivery Fee</Button>
                </CardBody>
                </Card>

            </div>
        </div>
    )

}

export default Home;