import { useState } from 'react';

const FirstComponent = ({ propOne }) => {
  const [value, setValue] = useState(0);
  const [hola, setHola] = useState('Hola');
  const num = propOne;
  return (
    <div>
      {hola}, este es mi primer componente y el timer es {num}.
    </div>
  );
};

export default FirstComponent;
