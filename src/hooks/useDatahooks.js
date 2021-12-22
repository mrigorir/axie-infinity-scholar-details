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
  const managerPerRef = useRef();
  const scholarPerRef = useRef();
  const dispatch = useDispatch();
  const LOCAL_STORAGE_SCHOLAR_DETAILS = 'scholarDetails';
  const storedDetails = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SCHOLAR_DETAILS));
  const [errorMessageMMR, setErrorMessageMMR] = useState('');
  const [errorMessageSLP, setErrorMessageSLP] = useState('');
  const [errorMessageAxies, setErrorMessageAxies] = useState('');
  const [percentage, setPercentage] = useState(100);

  const handleRonin = (e, roninRef, managerPerRef, scholarPerRef) => {
    const ronin = roninRef.current.value;
    const manager = managerPerRef.current.value;
    const scholar = scholarPerRef.current.value;
    const scholarDetails = [];

    scholarDetails.push(
      {
        title: 'Player ronin',
        data: ronin,
        url: '../../assets/images/slp/slp-',
      },
      {
        title: 'Manager SLP earned',
        data: manager,
        url: '../../assets/images/slp/slp-',
      },
      {
        title: 'Scholar SLP earned',
        data: scholar,
        url: '../../assets/images/slp/slp-',
      },
    );
    e.preventDefault();
    dispatch(getSlpAction(ronin)).catch((error) => setErrorMessageSLP(`SLP: ${error.message}`));
    dispatch(getMmrAction(ronin)).catch((error) => setErrorMessageMMR(`MMR: ${error.message}`));
    dispatch(getAxiesAction(ronin)).catch((error) => setErrorMessageAxies(`Axies data: ${error.message}`));
    localStorage.setItem(LOCAL_STORAGE_SCHOLAR_DETAILS, JSON.stringify(scholarDetails));
  };

  const handlePercentage = () => {
    const managerCurrentPer = 100 - (scholarPerRef.current.value);
    const button = document.getElementById('submitDetails');
    if (managerCurrentPer > 100 || managerCurrentPer < 0 || Number.isNaN(managerCurrentPer)) {
      setPercentage('Invalid format.');
      button.setAttribute('disabled', true);
    } else {
      setPercentage(managerCurrentPer);
      button.removeAttribute('disabled');
    }
  };

  useEffect(() => {
    if (storedDetails && storedDetails[0].data !== null) {
      dispatch(getSlpAction(storedDetails[0].data));
      dispatch(getMmrAction(storedDetails[0].data));
      dispatch(getAxiesAction(storedDetails[0].data));
    }
  }, []);

  return {
    slp,
    mmr,
    axies,
    roninRef,
    managerPerRef,
    scholarPerRef,
    errorMessageMMR,
    errorMessageSLP,
    errorMessageAxies,
    handleRonin,
    handlePercentage,
    percentage,
    storedDetails,
  };
};

export default useDatahooks;
