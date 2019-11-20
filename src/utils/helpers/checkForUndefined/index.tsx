import React from 'react';

const checkForUndefined = (data: any) => {
  if (!data) {
    return <span style={{ color: 'red' }}>No data</span>
  } else {
    return <>{data}</>
  }
}

export default checkForUndefined;