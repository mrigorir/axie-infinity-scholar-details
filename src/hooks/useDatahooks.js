import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSlpAction } from '../redux/data';
import { getMmrAction } from '../redux/mmr';

const useDatahooks = () => {
  const slp = useSelector((state) => state.slp);
  const mmr = useSelector((state) => state.mmr);
  const dispatch = useDispatch();
  const [errorMessageSLP, setErrorMessageSLP] = useState('');
  const [errorMessageMMR, setErrorMessageMMR] = useState('');

  useEffect(() => {
    // slp
    dispatch(getSlpAction()).catch((errorSlpRequest) => {
      setErrorMessageSLP(`RapidApi: ${errorSlpRequest.message}`);
    });
    // mmr
    dispatch(getMmrAction()).catch((errorMmrRequest) => {
      setErrorMessageMMR(`Axie.technology API: ${errorMmrRequest.message}`);
    });
  }, []);

  return {
    slp, errorMessageSLP, errorMessageMMR, mmr,
  };
};

export default useDatahooks;
