import { Card, Button } from 'react-bootstrap';
import { BotónLike } from "./BotónLike";
import { Link } from 'react-router-dom';
import type { LibroCardProps } from '../types/libros';


function LibroCard({ id, title, author, img }: LibroCardProps) {
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
}
export default LibroCard;