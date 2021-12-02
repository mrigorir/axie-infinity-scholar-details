import { useEffect, useRef } from 'react';
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
  const LOCAL_STORAGE_SLP = 'slp';
  const LOCAL_STORAGE_MMR = 'mmr';
  const LOCAL_STORAGE_AXIES = 'axies';
  const storedSLP = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SLP));
  const storedMMR = JSON.parse(localStorage.getItem(LOCAL_STORAGE_MMR));
  const storedAxies = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AXIES));

  useEffect(() => {
    if ((storedSLP !== null && storedSLP[0].average !== 0)
    && (storedMMR !== null && storedMMR[0].elo !== 0)
    && (storedAxies !== null && storedAxies[0].total !== 0)) {
      const id = storedMMR[0].clientId;
      dispatch(getSlpAction(id));
      dispatch(getMmrAction(id));
      dispatch(getAxiesAction(id));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_SLP, JSON.stringify(slp));
    localStorage.setItem(LOCAL_STORAGE_MMR, JSON.stringify(mmr));
    localStorage.setItem(LOCAL_STORAGE_AXIES, JSON.stringify(axies));
  }, [slp, mmr, axies]);

  return {
    slp,
    mmr,
    axies,
    dispatch,
    getAxiesAction,
    getMmrAction,
    getSlpAction,
    roninRef,
  };
};

export default useDatahooks;
