import { CardMain, CardSubContainer, ContainerImage } from "./Styles";

export function Card ({ first_name, last_name, email, avatar }) {
    return (
        <>
          <CardMain>
            <ContainerImage src={avatar}/>
            <CardSubContainer>
              <div>
                {first_name} {last_name} 
              </div>
              <div>
                {email}
              </div>
            </CardSubContainer> 
          </CardMain>
        </>
    )
}