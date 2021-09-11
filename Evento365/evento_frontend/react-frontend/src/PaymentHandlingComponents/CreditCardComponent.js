import React, { Component } from 'react';
import useForm from "./useForm";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";

import "../PaymentHandlingStyles/CreditCardComponent.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useHistory } from "react-router-dom";


const CreditCardComponent = () => {
  const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();
  const history = useHistory();
  

  function navigate(){
    history.push('/complete');

  }


  return (
    <div>
      <div className="cardcss">
        <div className="box justify-content-center align-items-center">
          <div className="formDiv">
          <div className="creditCard">
          <Cards
            cvc={values.cardSecurityCode}
            expiry={values.cardExpiration}
            focused={values.focus}
            name={values.cardName}
            number={values.cardNumber}
          />
          </div>
          <Form id="cardform" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                id="cardName"
                data-testid="cardName"
                name="cardName"
                placeholder="Cardholder Name"
                value={values.cardName}
                onChange={handleChange}
                onFocus={handleFocus}
                isValid={errors.cname}
              />
              
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="number"
                id="cardNumber"
                data-testid="cardNumber"
                name="cardNumber"
                placeholder="Card Number"
                value={values.cardNumber}
                onChange={handleChange}
                onFocus={handleFocus}
                isValid={errors.cnumber}
              />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="cardType"
                    id="cardType"
                    data-testid="cardType"
                    placeholder="Card Type"
                    value={values.cardType}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.ctype}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Control
                    type="text"
                    id="cardExpiration"
                    data-testid="cardExpiration"
                    name="cardExpiration"
                    placeholder="Expiration Date"
                    value={values.cardExpiration}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.cexp}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Control
                    type="number"
                    id="cardSecurityCode"
                    data-testid="cardSecurityCode"
                    name="cardSecurityCode"
                    placeholder="Security Code"
                    value={values.cardSecurityCode}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.ccvv}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group id="Pamount">
                  <Form.Control
                   /* type="text"
                    id="cardPostalCode"
                    data-testid="cardPostalCode"
                    name="cardPostalCode"
                    placeholder="Postal Code"
                    value={values.cardPostalCode}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.cpostal}*/
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="Rs.1000"
                    disabled

                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="btnmerge">
            <div className = "valibtn">
            <Button 
              size={"block"}
              data-testid="validateButton"
              id="validateButton"
              type="submit"
            >
              Validate
              </Button>
            </div>  
            <div className = "confirmbtn">
            <Button 
              style={{marginLeft: "10px"}}
              
              onClick={navigate}
            >
              Confirm
            </Button>
          </div>
           
        </div>    
     

          </Form>
          </div>
          <Alert
            id="alertMessage"
            data-testid="alertMessage"
            variant={errors.variant}
            show={errors.show}
          >
            {errors.message}
          </Alert>{" "}
          
        </div>
      </div>
    </div>
  );
};




export default CreditCardComponent;