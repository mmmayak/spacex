import React, { FunctionComponent } from 'react'

const Layout: FunctionComponent = (props) => {
  return (
    <div style={{ maxWidth: '1140px', margin: '0 auto', width: '100%' }}>
      {props.children}
    </div>
  )
}

export default Layout