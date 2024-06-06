import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from "./styles";
import { useState } from 'react';

const App = () => {
  const [CurrentNumber, setCurrentNumber] = useState('0');
  const [firstNummer, setFirstNummer] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNummer('0')
    setOperation('')
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNummers = () => {
    if(firstNummer === '0'){
      setFirstNummer(String(CurrentNumber));
      setCurrentNumber('0')
      setOperation('+')
    }else  {
      const sum = Number(firstNummer) + Number(CurrentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMinusNummers = () => {
    if(firstNummer === '0'){
      setFirstNummer(String(CurrentNumber));
      setCurrentNumber('0')
      setOperation('-')
    }else  {
      const sum = Number(firstNummer) - Number(CurrentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMultiplyNummers = () => {
    if(firstNummer === '0'){
      setFirstNummer(String(CurrentNumber));
      setCurrentNumber('0')
      setOperation('*')
    }else  {
      const sum = Number(firstNummer) * Number(CurrentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleDivideNummers = () => {
    if(firstNummer === '0'){
      setFirstNummer(String(CurrentNumber));
      setCurrentNumber('0')
      setOperation('/')
    }else  {
      const sum = Number(firstNummer) / Number(CurrentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }
  const handleEquals = () => {
    if(firstNummer !== '0' && operation !== '' && CurrentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNummers();
          break;
        case '-':
          handleMinusNummers();
          break;
        case '*':
            handleMultiplyNummers();
            break;
        case '/':
            handleDivideNummers();
            break;
        default: 
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={CurrentNumber}/>
        <Row>
          <Button label = "C" onClick={(handleOnClear)}/>
          <Button label = "." onClick={() => handleAddNumber('.')}/>
          <Button label = "/" onClick={handleDivideNummers}/>
          <Button label = "*" onClick={handleMultiplyNummers}/>
        </Row>
        <Row>
          <Button label = "7" onClick={() => handleAddNumber('7')} />
          <Button label = "8" onClick={() => handleAddNumber('8')} />
          <Button label = "9" onClick={() => handleAddNumber('9')} />
          <Button label = "-" onClick={handleMinusNummers} />
        </Row>
        <Row>
          <Button label = "4" onClick={() => handleAddNumber('4')} />
          <Button label = "5" onClick={() => handleAddNumber('5')} />
          <Button label = "6" onClick={() => handleAddNumber('6')} />
          <Button label = "+" onClick={handleSumNummers} />
        </Row>
        <Row>
          <Button label = "1" onClick={() => handleAddNumber('1')} />
          <Button label = "2" onClick={() => handleAddNumber('2')} />
          <Button label = "3" onClick={() => handleAddNumber('3')} />
          <Button label = "=" onClick={(handleEquals)}/>
        </Row>
        <Row>
          <Button label = "0" onClick={() => handleAddNumber('0')} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
