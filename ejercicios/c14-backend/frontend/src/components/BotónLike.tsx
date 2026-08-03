import { useState } from 'react';
import { Button } from 'react-bootstrap';

export const BotónLike = () => {
    const [likes, setLikes] = useState(0);

    return (
        <Button variant="success" onClick={() => setLikes(likes + 1)}>
            👍 Me gusta {likes}
        </Button>
    )
}