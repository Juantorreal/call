import { Heading, Text} from '@ignite-ui/react'
import { Container, Preview, Hero } from './styles'
import previewImage from '../../assets/app-preview.png'
import Image from 'next/image'
import { ClaimUserNameForm } from './components/ClaimUserNameForm'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="xl">Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.</Text>

        <ClaimUserNameForm/>
      </Hero>
      <Preview>
      <Image src={previewImage} height={400} alt="Calendar" quality={100} priority/>
      </Preview>

    </Container>
  )
  
  
}
