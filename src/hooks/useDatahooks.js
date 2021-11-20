import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSlpAction } from '../redux/data';

const useDatahooks = () => {
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    dispatch(getSlpAction()).catch((error) => {
      setErrorMessage(error);
      // console.log(JSON.stringify(error));
    });
  }, []);

  return { details, errorMessage };
};

export default useDatahooks;
