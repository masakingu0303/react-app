import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {
  Container,
  Card,
  Form,
  Button,
  ListGroup
} from 'react-bootstrap';

const App = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<string[]>([]);

  const handleSubmit = () => {
    if (text.trim() === '') return;
    setTodos([...todos, text]);
    setText('');
  };

  const handleDelete = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <Container className="mt-5">
      <Card className="p-4 shadow">
        <Card.Title>React100本ノック</Card.Title>
        <Card.Subtitle className="mb-3 text-muted">TodoList</Card.Subtitle>

        <Form onSubmit={(e) => e.preventDefault()}>
          <div className="d-flex align-items-center gap-2 mb-3">
            <Form.Control
              type="text"
              value={text}
              placeholder="todoを入力"
              onChange={(e) => setText(e.target.value)}
            />
            <Button variant="primary" onClick={handleSubmit}  className="px-4 py-2">追加</Button>
          </div>
        </Form>

        <ListGroup>
          {todos.map((todo, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between align-items-center"
            >
              {todo}
              <Button variant="danger" size="sm" onClick={() => handleDelete(index)}>
                削除
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </Container>
  );
};

export default App;
