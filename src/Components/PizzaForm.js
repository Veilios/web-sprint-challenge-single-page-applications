import React, { useState } from "react";
import { Col, Button, Form, FormGroup, Label, Input, Card, CardTitle, CardText, CardSubtitle} from "reactstrap";
import * as yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";

const formSchema = yup.object().shape({
    name: yup.string().min(2, "Must be atleast 2 characters long").required("Name is a required field"),
    size: yup.string().required("Please Choose a Size"),
    pepporoni: yup.string(),
    mushroom: yup.string(),
    salami: yup.string(),
    mystery: yup.string(),
    instructions: yup.string()

});


const PizzaForm = (props) => {


    const [pizzaState, setPizzaState] = useState({
        name: "",
        size: "",
        pepporoni: false,
        mushroom: false,
        salami: false,
        mystery: false,
        instructions: ""
    });

    const [errorState, setErrorState] = useState({
        name: "",
        size: "",
        pepporoni: false,
        mushroom: false,
        salami: false,
        mystery: false,
        instructions: ""
    });

    const validate = e => {
        let value = e.target.type === "radio" ? e.target.checked : e.target.value;
        yup.reach(formSchema, e.target.name)
        .validate(value)
        .then(valid => {
            setErrorState({
                ...errorState,
                [e.target.name]: ""
            });
        }).catch( err => {
            setErrorState({
                ...errorState,
                [e.target.name]: err.errors[0]
            });
        });
    };

    const inputChange = e => {
        e.persist();
        validate(e);
        let value = e.target.type === "radio" ? e.target.checked : e.target.value;
        setPizzaState({ ...pizzaState, [e.target.name]: value });
    };

    const [order, setOrder] = useState([]);

    const formSubmit = e => {
        e.preventDefault();
        console.log("form submitted");

        axios
        .post("https://reqres.in/api/users", pizzaState)
        .then(res => {
            setOrder(res.data);
            console.log("completed", res);
        })
        .catch(err => console.log(err));
    };

    return (
        <div>
            <Form className="pizzaForm" onSubmit={formSubmit} >
                <FormGroup>
                    <Label for="name" >Name</Label>
                        <Input className="name" type="text" name="name" id="name" placeholder="John Doe" value={pizzaState.name} onChange={inputChange} />
                    {errorState.name.length > 2 ? <p className="error">{errorState.name}</p> : null }
                </FormGroup>
                <FormGroup>
                    <Label for="size" >Size</Label>
                        <Input size="lg" className="size" type="select" name="size" id="size" value={pizzaState.size} onChange={inputChange} >
                        <option value="" >--Select A Size--</option>
                        <option value="Personal" >Personal</option>
                        <option value="Medium" >Medium</option>
                        <option value="Large" >Large</option>
                        <option value="Mega" >Mega</option>
                        </Input>
                    {errorState.size.length > 0 ? <p className="error">{errorState.size}</p> : null }
                </FormGroup>
                <FormGroup>
                    <legend>Pick Your Toppings</legend>
                    <Col className="toppings" sm={10} >
                        <FormGroup className="toppingBox" check>
                            <Input className="pepporoni" type="radio" name="pepporoni" value={pizzaState.pepporoni} onChange={inputChange} />{' '}
                            <Label for="pepporoni" check>
                                Pepporoni
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input className="mushroom" type="radio" name="mushroom" value={pizzaState.mushroom} onChange={inputChange} />{' '}
                            <Label for="mushroom" check>
                                Mushroom
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input className="salami" type="radio" name="salami" value={pizzaState.salami} onChange={inputChange} />{' '}
                            <Label for="salami" check>
                                Salami
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input className="mystery" type="radio" name="mystery" value={pizzaState.mystery} onChange={inputChange} />{' '}
                            <Label for="mystery" check>
                                Mystery
                            </Label>
                        </FormGroup>
                        <FormGroup check disabled>
                            <Input type="radio" name="pinapple" disabled/>{' '}
                            <Label for="pinapple" check>
                                Pineapple (why?)
                            </Label>
                        </FormGroup>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label for="instructions" >Special Instructions</Label>
                    <Input type="textarea" name="instructions" id="instructions" value={pizzaState.instructions} onChange={inputChange} />
                </FormGroup>
                <Button type="submit" color="primary"  >Submit Order</Button>
            </Form>

            <div className="order">
                <Card>
                    <CardTitle>{order.name}</CardTitle>
                    <CardSubtitle>{order.size}</CardSubtitle>
                    <CardText>
                        {order.pepporoni === true ? "Pepporoni" : null}<br></br>
                        {order.mushroom === true ? "Mushroom" : null}<br></br>
                        {order.salami === true ? "Salami" : null}<br></br>
                        {order.mystery === true ? "Mystery" : null}<br></br>
                    </CardText>
                    <CardText>{order.instructions}</CardText>
                    {order === [""]  ? <Link to="/order" ><Button>Confirm</Button></Link> : null }
                </Card>
            </div>
        </div>
    );
};

export default PizzaForm;