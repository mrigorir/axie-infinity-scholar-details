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

  useEffect(() => {
    console.log('useEffect working when page loads.');
  }, []);

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
