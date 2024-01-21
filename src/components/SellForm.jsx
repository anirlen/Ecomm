import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 8px;
  margin-top: 4px;
`;

const SubmitButton = styled.button`
  background-color: #C0392B;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #7B241C;
  }
`;

const SellForm = () => {
  const [name, setName] = useState('');
  const [Description, setDescription] = useState('');
  const [Size, setSize] = useState('');
  const [Price, setPrice] = useState('');
  const [Photo, setPhoto] = useState(null);


  const handleSubmit = (event) => {
    event.preventDefault();

    const SellItemData = { name, Description, Size, Price, Photo };

    const existingData = JSON.parse(localStorage.getItem('SellItemData')) || [];

    const updatedData = [...existingData, SellItemData];

    localStorage.setItem('SellItemData', JSON.stringify(updatedData));

    setName('');
    setDescription('');
    setSize('');
    setPrice('');
    setPhoto(null);


    alert('Your request has been submitted! It will be posted after being reviewed.');
  };

  const handlePhotoChange = (event) => {
    const selectedPhoto = event.target.files[0];
    setPhoto(selectedPhoto);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name:
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Label>

        <Label>
          Description:
          <Input
            type="text"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Label>

        <Label>
          Size:
          <Input
            type="text"
            value={Size}
            onChange={(e) => setSize(e.target.value)}
            required
          />
        </Label>

        <Label>
          Price:
          <Input
            type="number"
            value={Price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </Label>

        <Label>
          Photo:
          <Input type="file" onChange={handlePhotoChange} accept="image/*" />
        </Label>

        <SubmitButton type="submit">Post</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default SellForm;
