import { Card, Button } from 'react-bootstrap';
import { BotónLike } from "./BotónLike";

interface LibroCardProps {
    title: string;
    author: string;
    img: string;
}

export const LibroCard: React.FC<LibroCardProps> = ({ title, author, img }) => {
    return (
        <Card className='libro-card'>
            <Card.Img variant="top" src={img} className="libro-img" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{author}</Card.Text>
                <div className="d-flex gap-3">
                    <Button variant="primary">
                       Ver más
                    </Button>
                    <BotónLike />
                </div>
            </Card.Body>
        </Card>
    );
};