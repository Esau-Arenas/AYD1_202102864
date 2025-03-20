import { useState } from 'react'
import { Button, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './App.css'

const App = () => {
  const [mostrarCard, setMostrarCard] = useState(false);

  const handleClick = () => {
    setMostrarCard(!mostrarCard); // Alterna mostrar/ocultar
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 50 }}>
      <h1>TAREA 2 😎</h1>

      <Button
        type="primary"
        icon={<UserOutlined />}
        onClick={handleClick}
        style={{ marginBottom: 20 }}
      >
        Mostrar Información
      </Button>

      {mostrarCard && (
        <Card
          title="Información Personal"
          bordered={true}
          style={{ width: 300, textAlign: 'center' }}
        >
          <p><strong>Nombre:</strong> Alvaro Esaú Arenas</p>
          <p><strong>Carnet:</strong> 202102864</p>
          <p><strong>Curso:</strong> Analisis y Diseño I</p>
        </Card>
      )}
    </div>
  );
};

export default App;