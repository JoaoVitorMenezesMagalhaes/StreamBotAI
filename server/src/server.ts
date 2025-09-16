import {fastify} from "fastify"
import {
    serializerCompiler,
    validatorCompiler,
    type ZodTypeProvider,
} from "fastify-type-provider-zod"
import { fastifyCors } from "@fastify/cors"
import { env } from "./env.ts"
import { getRoomsRoute } from "./routes/getRooms.ts"
import { createRoomsRoute } from "./routes/createRooms.ts"
import { getRoomQuestions } from "./routes/getRoomQuestions.ts"
import { createQuestionRoute } from "./routes/createQuestion.ts"

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
    origin: "*",
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.get('/health', () => {
    return { status: 'OK' }
})

app.register(getRoomsRoute)
app.register(createRoomsRoute)
app.register(getRoomQuestions)
app.register(createQuestionRoute)

app.listen({ port: env.PORT })