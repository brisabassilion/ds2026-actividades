import { Card, Button } from 'react-bootstrap';
import { BotónLike } from "./BotónLike";
import { Link } from 'react-router-dom';

interface LibroCardProps {
    id: number;
    title: string;
    author: string;
    img: string;
    descripcion: string;
    precio: string;
}

export const LibroCard: React.FC<LibroCardProps> = ({ id, title, author, img }) => {
    return (
        <Card className='libro-card'>
            <Card.Img variant="top" src={img} className="libro-img" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{author}</Card.Text>
                <div className="d-flex gap-3">
                    <Button as={Link as any} to={`/libro/${id}`} variant="primary">
                       Ver más
                    </Button>
                    <BotónLike />
                </div>
            </Card.Body>
        </Card>
    );
};