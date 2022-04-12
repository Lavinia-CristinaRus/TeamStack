import styled from 'styled-components'

import {Link} from 'react-router-dom'
import background from './../assets/loginbackground.png';
export const colors={
    primary: '#fff',
    theme:"BE185D"
}

export const StyledContainer = styled.div`
    margin: 0;
    min-height:100vh;
    display:flex;
    justify-content:center;
    background:linear-gradient(0deg,rgba(0,0,0,6),url(${background});
    background-size:cover;
    background-attachment:fixed;
`
export const StyledButton = styled(Link)`
    padding: 10px;
    width: 150px;
    background-color:transparent;
    font-size:16px;
    border:3px solid ${colors.primary};
    border-radius: 25px;
    color: ${colors.primary};
    text-decorative:none;
    text-aligh:center;
    transition: ease-in-out 0.3s;

    &hover{
        background-color: ${colors.primary};
        color: ${colors.theme};
        cursor:pointer
    }
`