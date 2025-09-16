import { useParams, Navigate } from "react-router-dom"

type RoomParams = {
    id: string
}

export function Room() {
    const params = useParams<RoomParams>()

    if (!params.id) {
        return <Navigate to="/" />
    }

    return <div>Room Details: {params.id} </div>
    }
