import {Component} from 'react'
import {ImItalic, ImUnderline} from 'react-icons/im'

import {
  TextEditorContainer,
  TextEditorCart,
  Heading,
  EditorImage,
  ImageContainer,
  InputContainer,
  ButtonContainer,
  Input,
  CustomButton1,
  CustomButton2,
  CustomButton3,
} from './styledComponents'

class TextEditor extends Component {
  state = {bold: false, italic: false, underline: false}

  onClickBold = () => {
    this.setState(prevState => ({
      bold: !prevState.bold,
    }))
  }

  onClickItalic = () => {
    this.setState(prevState => ({
      italic: !prevState.italic,
    }))
  }

  onClickUnderLine = () => {
    this.setState(prevState => ({
      underline: !prevState.underline,
    }))
  }

  renderInputContainer = () => {
    const {bold, underline, italic} = this.state
    console.log(bold, underline, italic)
    return (
      <InputContainer>
        <ButtonContainer>
          <li>
            <CustomButton1
              type="button"
              onClick={this.onClickBold}
              bold={bold}
              data-testid="bold"
            >
              B
            </CustomButton1>
          </li>
          <li>
            <CustomButton2
              type="button"
              onClick={this.onClickItalic}
              italic={italic}
              data-testid="italic"
            >
              <ImItalic />
            </CustomButton2>
          </li>
          <li>
            <CustomButton3
              type="button"
              onClick={this.onClickUnderLine}
              underline={underline}
              data-testid="underline"
            >
              <ImUnderline />
            </CustomButton3>
          </li>
        </ButtonContainer>
        <Input
          rows="10"
          cols="50"
          bold={bold}
          italic={italic}
          underline={underline}
        />
      </InputContainer>
    )
  }

  render() {
    return (
      <TextEditorContainer>
        <TextEditorCart>
          <ImageContainer>
            <Heading>Text Editor</Heading>
            <EditorImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          {this.renderInputContainer()}
        </TextEditorCart>
      </TextEditorContainer>
    )
  }
}

export default TextEditor
