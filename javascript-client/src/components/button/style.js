import styled, { css } from 'styled-components';

export const Button = styled.button`
${(props) => props.type === 'cancel'
&& css`
background-color: #D0D3D4;
color: black;
padding: 12px;
font-size: 16px;
border-radius: 6px;
border: 1px solid black;
margin-left: 80%;

`};
${(props) => props.disabled === true && props.type === 'submit' && css`
background-color: #D0D3D4;
color: #B3B6B7;
padding: 12px;
font-size: 16px;
margin: 10px 2px;
border-radius: 6px;
margin-left: 10px;

`};
${(props) => props.disabled === false && props.type === 'submit' && css`
background-color: #4CAF50;
color: white;
padding: 12px;
font-size: 16px;
margin: 4px 2px;
border-radius: 6px;
`};
`;
