import React, { useState }  from 'react';
import { Container} from 'reactstrap';
import Card from './Card';
import { Alert } from 'reactstrap';

const ContenedorMoti = (props) => {
    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false);
  return (
    <div>
      <Container className="Jumbo1">
        <div>
        <h2 className="display-3">Es momento de motivarnos!</h2>
        <Alert color="warning"isOpen={visible} toggle={onDismiss} >
        <p className="lead1">Si deseas ver la imagen desde el post original dale click en (Mostrar)</p>
        </Alert>
        </div>
    
        <hr className="my-4" />

        <Card />
      </Container>
    </div>
  );
};

export default ContenedorMoti;