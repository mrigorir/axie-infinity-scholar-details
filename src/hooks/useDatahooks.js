import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSlpStatsAction } from '../redux/data';

const useDatahooks = () => {
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();

  useEffect(() => {
    if (details.length) {
      dispatch(getSlpStatsAction());
    }
  }, []);

  return details;
};

export default useDatahooks;
