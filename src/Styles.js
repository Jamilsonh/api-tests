import styled from 'styled-components'

export const ContainerMain = styled.div`
    width: 100%;
    height: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #A9A9A9;
`

export const SubContainer = styled.div`
    width: 1600px;
    height: 700px;
    align-items: center;
    justify-content: space-around;
    display: flex;
    flex-direction: column;
    background-color: #D3D3D3;
    border-radius: 25px;
`

export const HeaderAndRodapeContainer = styled.div`
    display: flex;
    width: 100%;
    height: 110px;
    background-color: black;
    color: white;
    align-items: center;
    justify-content: center;
    font-size: 35px;
`

export const ContainerPeople = styled.div`
    width: 1550px;
    display: flex;
    height: 280px;
    justify-content: space-around;
`

export const CardContainer = styled.div`
    display: flex;
    width: 200px;
    align-items: center;
    justify-content: center;
`

export const CardMain = styled.div`
    display: flex;
    width: 200px;
    height: 280px;
    background-color: gray;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;
    border-radius: 15px;
`

export const CardSubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80px;
`

export const ContainerImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 15px 15px 0 0;
`