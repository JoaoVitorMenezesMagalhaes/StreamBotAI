import {fastify} from "fastify"
import {
    serializerCompiler,
    validatorCompiler,
    type ZodTypeProvider,
} from "fastify-type-provider-zod"
import { fastifyCors } from "@fastify/cors"

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
    origin: "*",
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.listen({ port: Number(process.env.PORT) || 3000}).then(() => {
    console.log("HTTP server running!")
})