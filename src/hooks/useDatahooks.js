import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSlpStatsAction } from '../redux/data';

const useDatahooks = () => {
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    dispatch(getSlpStatsAction()).catch((error) => {
      setErrorMessage(error);
    });
  }, []);

  return { details, errorMessage };
};

export default useDatahooks;
