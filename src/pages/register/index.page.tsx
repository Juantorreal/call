import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";
import { Container, Form, Header } from "./styles";

export default function Register() {
    return (
        <Container>
            <Header>
                <Heading as='strong'>Bem-vindo ao Call</Heading>
                <Text>Precisamos de algumas informações para criar seu perfil! Ah, você pode editar essas informações depois.</Text>
                <MultiStep size={4} currentStep={1}/>
            </Header>
            <Form as="form">
                <label>
                    <Text size="sm">Nome de Usuario</Text>
                    <TextInput placeholder="seu-usuario"/>
                </label>
                <label>
                    <Text size="sm">Nome Completo</Text>
                    <TextInput placeholder="seu nome"/>
                </label>
                <Button type="submit">Proximo passo
                <ArrowRight/></Button>
            </Form>
            
        </Container>
    )
}