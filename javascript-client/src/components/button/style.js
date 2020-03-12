import styled from 'styled-components';

const Button = styled.button`
padding:10px;
margin-right: 20px;
&.error{
    background-color:default;
}
&.noerror{
    color:white;
    background-color:#38b738;
}
`;
const Button1 = styled.button`
padding:10px;
margin-right: 20px;
`;
const Div = styled.div`
margin-left: 85%;
margin-top: 2%;
`;
export { Button, Div, Button1 };
