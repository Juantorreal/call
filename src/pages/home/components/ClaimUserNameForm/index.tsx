import { Button, TextInput } from "@ignite-ui/react";

export function ClaimUserNameForm() {
    return (
        <Form as="form">
            <TextInput size="sm" prefix="call.com/" placeholder="seu-usuario"/>
            <Button size="sm" type="submit">
                Reservar usuario
                <ArrowRight/>
            </Button>
        </Form>

    )
}