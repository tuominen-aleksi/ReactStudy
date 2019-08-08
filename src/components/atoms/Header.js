import React from 'react'
import styled from 'styled-components'

const withHeader = (HeaderComponent) => ([props, _]) => {
    const children = props.children

    if (typeof children == 'string') {
        return <HeaderComponent {...props}/>
    } else {
        return null
    }
}

const Header = {
  H1: (...props) => withHeader(Header1)(props),
  H2: (...props) => withHeader(Header2)(props),
  H3: (...props) => withHeader(Header3)(props),
}

export default Header

const BaseHeader = styled.h1`
    margin: 0;
    line-height: 1;
    color: white;
`

const Header1 = styled(BaseHeader)`
    font-size: 24px;
`

const Header2 = styled(BaseHeader)`
    display: inline-block;
    font-size: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid #02d0f5;
`

const Header3 = styled(BaseHeader)`
    margin: 0 0 8px 0;
    font-size: 16px;
`
