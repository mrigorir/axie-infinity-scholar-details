import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSlpAction } from '../redux/slp';
import { getMmrAction } from '../redux/mmr';
import { getAxiesAction } from '../redux/axies';

const useDatahooks = () => {
  const slp = useSelector((state) => state.slp);
  const mmr = useSelector((state) => state.mmr);
  const axies = useSelector((state) => state.axies);
  const roninRef = useRef();
  const dispatch = useDispatch();
  const LOCAL_STORAGE_ID_SCHOLAR = 'id';
  const storedId = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ID_SCHOLAR));
  const [errorMessageMMR, setErrorMessageMMR] = useState('');
  const [errorMessageSLP, setErrorMessageSLP] = useState('');
  const [errorMessageAxies, setErrorMessageAxies] = useState('');

  const handleRonin = (e, roninRef) => {
    const ronin = roninRef.current.value;
    e.preventDefault();
    dispatch(getSlpAction(ronin)).catch((error) => setErrorMessageSLP(`SLP: ${error.message}`));
    dispatch(getMmrAction(ronin)).catch((error) => setErrorMessageMMR(`MMR: ${error.message}`));
    dispatch(getAxiesAction(ronin)).catch((error) => setErrorMessageAxies(`Axies data: ${error.message}`));
    localStorage.setItem(LOCAL_STORAGE_ID_SCHOLAR, JSON.stringify(ronin));
  };

  useEffect(() => {
    if (storedId !== null) {
      dispatch(getSlpAction(storedId));
      dispatch(getMmrAction(storedId));
      dispatch(getAxiesAction(storedId));
    }
  }, []);

  return {
    slp,
    mmr,
    axies,
    roninRef,
    errorMessageMMR,
    errorMessageSLP,
    errorMessageAxies,
    handleRonin,
  };
};

export default useDatahooks;
