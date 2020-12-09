import styled from 'styled-components'

export const MyLabel = styled.label`
  font-size: ${props => (props.fontsize ? `${props.fontsize}px` : '18px')};
  font-weight: ${props => (props.fontweight ? props.fontweight : 'initial')};
  padding-top: ${props => (props.paddingTop ? `${props.paddingTop}px` : '0px')};
  margin-left: ${props => (props.marginLeft ? `${props.marginLeft}px` : '0px')};
  margin-top: ${props => (props.marginTop ? `${props.marginTop}px` : '0px')};
  color: ${props => (props.color ? props.color : 'default')};
  cursor: ${props => (props.cursor ? props.cursor : 'default')};
`