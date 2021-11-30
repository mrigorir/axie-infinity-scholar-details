import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSlpAction } from '../redux/slp';
import { getMmrAction } from '../redux/mmr';
import { getAxiesAction } from '../redux/axies';

const useDatahooks = () => {
  let slp = useSelector((state) => state.slp);
  let mmr = useSelector((state) => state.mmr);
  let axies = useSelector((state) => state.axies);
  const roninRef = useRef();
  const dispatch = useDispatch();
  const LOCAL_STORAGE_SLP = 'slp';
  const LOCAL_STORAGE_MMR = 'mmr';
  const LOCAL_STORAGE_AXIES = 'axies';
  const storedSLP = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SLP));
  const storedMMR = JSON.parse(localStorage.getItem(LOCAL_STORAGE_MMR));
  const storedAxies = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AXIES));

  useEffect(() => {
    if (storedSLP && storedMMR && storedAxies) {
      slp = storedSLP;
      mmr = storedMMR;
      axies = storedAxies;
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
