import styled from "styled-components";


export const Container = styled.div`
   position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
    display:flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    @media screen and (max-width:800px) {
    flex-direction: column;
    align-items: center;
    justify-content:space-between;
  }
`
export const LoginForm = styled.form`

`
export const Border=styled.div`
width: 70%;
border-bottom: 3px solid #eee;
`