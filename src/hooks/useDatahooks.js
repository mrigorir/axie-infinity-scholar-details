import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSlpAction } from '../redux/slp';
import { getMmrAction } from '../redux/mmr';
import { getAxiesAction } from '../redux/axies';

const useDatahooks = () => {
  const slp = useSelector((state) => state.slp);
  const mmr = useSelector((state) => state.mmr);
  const axies = useSelector((state) => state.axies);

  const dispatch = useDispatch();
  const [errorMessageSLP, setErrorMessageSLP] = useState('');
  const [errorMessageMMR, setErrorMessageMMR] = useState('');
  const [errorMessageAxies, setErrorMessageAxies] = useState('');

  useEffect(() => {
    dispatch(getSlpAction()).catch((error) => setErrorMessageSLP(`SLP: ${error.message}`));
    dispatch(getMmrAction()).catch((error) => setErrorMessageMMR(`MMR: ${error.message}`));
    dispatch(getAxiesAction()).catch((error) => setErrorMessageAxies(`Axies data: ${error.message}`));
  }, []);

  return {
    slp, errorMessageSLP, errorMessageMMR, errorMessageAxies, mmr, axies,
  };
};

export default useDatahooks;
