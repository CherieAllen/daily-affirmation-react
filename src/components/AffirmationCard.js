import React, {useContext} from "react";
import{UserContext} from '../App'
import {Col,Card} from 'antd';
const {Meta} = Card;


export default function AffirmationCard ({affirmations}) {
    return (
        <Col >
            <Card 
                style={{ width:'400px', margin:'1em' }}
                hoverable
                loading ={!affirmations}
                cover ={affirmations && <img  src={affirmations.image}/>}>
                <Meta title ={affirmations?.name}
                description={affirmations?.message}
                />
               
            </Card>

        </Col>
    )
}