import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useRef } from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<number | null>(null);


  const handleStartClick = () => {
    if (intervalRef.current !== null) return;
    const intervalId = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    intervalRef.current = intervalId;
  }

  const handleStopClick = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  const handleResetClick = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setSeconds(0);
  }

  //時間分秒に分る
  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (num: number) => num.toString().padStart(2, '0');
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };


  return (
    <Container className="mt-5">
      <Card className="p-4 shadow">
        <Card.Title className='text-center fw-bold text-primary fs-2'>React100本ノック</Card.Title>
        <Card.Subtitle className="mb-3 text-muted text-center">タイマーアプリ</Card.Subtitle>


        <div className='text-center display-3 bg-light rounded-lg '>
          {formatTime(seconds)}
        </div>
        <div className="d-flex justify-content-center">
          <Button className="flex-fill" style={{ minWidth: '100px' }} onClick={handleStartClick}>start</Button>
          <Button className="flex-fill" style={{ minWidth: '100px' }} onClick={handleStopClick}>stop</Button>
          <Button className="flex-fill" style={{ minWidth: '100px' }} onClick={handleResetClick}>reset</Button>
        </div>


      </Card>
    </Container>
  );
};

export default App;
