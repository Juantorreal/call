import { Button, TextInput } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "./styles";

const ClaimUserNameFormSchema = z.object({
    username: z.string(),
})

type ClaimUserNameFormData = z.infer<typeof ClaimUserNameFormSchema>

export function ClaimUserNameForm() {
    const {register,handleSubmit} = useForm<ClaimUserNameFormData>()

    async function handleClaimUsernameForm(data:ClaimUserNameFormData) {
       
    }
    return (
        <Form as="form" onSubmit={handleSubmit(handleClaimUsernameForm)}>
            <TextInput size="sm" prefix="call.com/" placeholder="seu-usuario" {...register('username')}/>
            <Button size="sm" type="submit">
                Reservar usuario
                <ArrowRight/>
            </Button>
        </Form>

    )
}