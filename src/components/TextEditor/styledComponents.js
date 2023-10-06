import styled from 'styled-components'

export const TextEditorContainer = styled.div`
  min-height: 100vh;
  background-color: #25262c;
  display: flex;
  align-items: center;
  justify-items: center;
`
export const TextEditorCart = styled.div`
  min-height: 80vh;
  background-color: #1b1c22;
  width: 80%;
  border-radius: 10px;
  padding: 10px;
  display: flex;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 800;
  color: white;
  padding-bottom: 20px;
  padding-top: 20px;
`
export const EditorImage = styled.img`
  height: 320px;
  width: 350px;
`
export const ImageContainer = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const InputContainer = styled.div`
  background-color: #25262c;
  height: 80vh;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
`
export const ButtonContainer = styled.ul`
  padding-left: 0px;
  list-style: none;
  display: flex;
  align-items: center;
  padding-left: 15px;
  border-bottom: 1px solid #cbd5e1;
  padding-bottom: 10px;
`

export const CustomButton1 = styled.button`
  font-size: 25px;
  font-weight: bold;
  color: ${props => (props.bold ? '#faff00' : '#f1f5f9')};
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 0px;
  margin-right: 10px;
`

export const CustomButton2 = styled.button`
  font-size: 25px;
  font-weight: bold;
  color: ${props => (props.italic ? '#faff00' : '#f1f5f9')};
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 0px;
  margin-right: 10px;
`

export const CustomButton3 = styled.button`
  font-size: 25px;
  font-weight: bold;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 0px;
  margin-right: 10px;
  color: ${props => (props.underline ? '#faff00' : '#f1f5f9')};
`

export const Input = styled.textarea`
  background-color: transparent;
  border: none;
  padding-left: 10px;
  outline: none;
  height: 100%;
  width: 100%;
  padding-right: 10px;
  color: #f1f5f9;
  font-family: 'Roboto';
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
`
