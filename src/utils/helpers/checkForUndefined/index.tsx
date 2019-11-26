import React from 'react';

const checkForUndefined = (data: any) => {
  if (typeof data === 'boolean') {
    if (!!data) {
      return <span style={{ color: 'green' }}>True</span>
    } else {
      return <span style={{ color: 'red' }}>False</span>
    }
  }
  if (!data) {
    return <span style={{ color: 'red' }}>No data</span>
  } else {
    return <>{data}</>
  }
}

export default checkForUndefined;