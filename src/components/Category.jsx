import React from 'react';
import styled from 'styled-components';

const CategoryCell = styled.td`
    border: 1px solid #cccccc;
    width: 10vw;
    text-align: center;
    vertical-align: center;
`;

const Button = styled.button`
    font-size: 11px;
    width: 40px;
    margin: 3px 5px 0;
`;

export default function Category(props) {

    function handleVote(can) {
        //Prevent the default action of submitting the form
        //event.preventDefault();
        props.handleVote(props.categoryId,can);
    }

    function buttonToggle(showButton, can) {

        if (showButton) {
           return <Button onClick={() => {handleVote(can)}}>Vote</Button>
        } else {return}
    }

        return (
            
            <tr className = {props.rowStyle}>
                <CategoryCell>{props.category}</CategoryCell>
                <CategoryCell>{props.categoryStatus}</CategoryCell>
                <CategoryCell>{props.candidate1}{buttonToggle(props.showButton, 0)}</CategoryCell>
                <CategoryCell>{props.candidate2}{buttonToggle(props.showButton, 1)}</CategoryCell>
                <CategoryCell>{props.candidate3}{buttonToggle(props.showButton, 2)}</CategoryCell>
            </tr>
        );
}
