import React, { FunctionComponent } from 'react'
import Spinner from '../../../components/UI/Spinner';

interface IProps {
  loading: boolean;
  error: boolean;
}

const FetchHelper: FunctionComponent<IProps> = ({ loading, error, children }) => {
  let render;
  if (loading) {
    render = <Spinner />
  } else if (error) {
    render = <div>Error</div>
  } else {
    render = <div>{children}</div>
  }
  return (
    <>
      {render}
    </>
  );
};

export default FetchHelper;