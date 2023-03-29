import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Container, Form, FormError, Header } from "./styles";

const registerFormSchema = z.object({
    username: z.string().min(3,{message: 'Min 3'}).regex(/^([a-z\\\\-]+)$/i,{message: 'Apenas letras e  hifens'}).
    transform((username)=> username.toLocaleLowerCase()),
    name: z.string().min(3,{message: 'Min 3'}),
})

type RegisterFormData = z.infer<typeof registerFormSchema >

async function handleRegister(data:RegisterFormData) {
    console.log(data)
}

export default function Register() {
    const {register,handleSubmit,formState:{errors,isSubmitting}} = useForm<RegisterFormData>({
        resolver: zodResolver(registerFormSchema),
    })
    return (
        <Container>
            <Header>
                <Heading as='strong'>Bem-vindo ao Call</Heading>
                <Text>Precisamos de algumas informações para criar seu perfil! Ah, você pode editar essas informações depois.</Text>
                <MultiStep size={4} currentStep={1}/>
            </Header>
            <Form as="form" onSubmit={handleSubmit(handleRegister)}>
                <label>
                    <Text size="sm">Nome de Usuario</Text>
                    <TextInput placeholder="seu-usuario" {...register('username')}/>
                
                {errors.username && (
                    <FormError size="sm">{errors.username.message}</FormError>
                )}
                </label>
                <label>
                    <Text size="sm">Nome Completo</Text>
                    <TextInput placeholder="seu nome"  {...register('name')}/>
                    {errors.name && (
                    <FormError size="sm">{errors.name.message}</FormError>
                )}
               
                </label>
                <Button type="submit" disabled={isSubmitting}>Proximo passo
                <ArrowRight/></Button>
            </Form>
            
        </Container>
    )
}