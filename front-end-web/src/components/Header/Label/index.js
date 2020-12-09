import React from 'react'

import { MyLabel } from './style'

const Label = ({ children, id, ...props }) => <MyLabel className='label' id={id}{...props}>{children}</MyLabel>

export default Label;