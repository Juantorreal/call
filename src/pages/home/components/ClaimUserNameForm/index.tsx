import { Button, Text, TextInput } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {zodResolver} from '@hookform/resolvers/zod';
import { Form, FormAnnotations } from "./styles";
import { useRouter } from "next/router";

const claimUserNameFormSchema = z.object({
    username: z.string().min(3,{message: 'Min 3'}).regex(/^([a-z\\\\-]+)$/i,{message: 'Apenas letras e  hifens'}).
    transform((username)=> username.toLocaleLowerCase()),
})

type ClaimUserNameFormData = z.infer<typeof claimUserNameFormSchema>

export function ClaimUserNameForm() {
    const {register,handleSubmit,formState: {errors, isSubmitting}} = useForm<ClaimUserNameFormData>({
        resolver: zodResolver(claimUserNameFormSchema),
    })

    const router = useRouter()

    async function handleClaimUsernameForm(data:ClaimUserNameFormData) {
       const {username} = data

       await router.push(`/register?username=${username}`)
    }
    return (
        <>
        <Form as="form" onSubmit={handleSubmit(handleClaimUsernameForm)}>
            <TextInput size="sm" prefix="call.com/" placeholder="seu-usuario" {...register('username')}/>
            <Button size="sm" type="submit" disabled={isSubmitting}>
                Reservar usuario
                <ArrowRight/>
            </Button>
        </Form>

        <FormAnnotations>
        <Text size="sm">{errors.username ? errors.username.message : 'Digite o nome do user'}</Text>
    </FormAnnotations>
    </>

    )
}