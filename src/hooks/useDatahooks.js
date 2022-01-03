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
  let string = '';

  const handleRonin = (e, roninRef, managerPerRef, scholarPerRef) => {
    const ronin = roninRef.current.value;
    const manager = managerPerRef.current.value;
    const scholar = scholarPerRef.current.value;
    const scholarDetails = [];
    setPercentage(100);

    scholarDetails.push(
      {
        title: 'Player ronin',
        data: ronin,
        url: 'https://drive.google.com/uc?export=view&id=1n_wEUbLJolvO77H7KECKWCFdx8ztSAiW&rl',
      },
      {
        title: 'Manager SLP earned',
        data: manager,
        url: 'https://drive.google.com/uc?export=view&id=1eacnHT2KWC1YBkcPjNdT1ZsIDY8U6vHF&rl',
      },
      {
        title: 'Scholar SLP earned',
        data: scholar,
        url: 'https://drive.google.com/uc?export=view&id=16V_sm0rP5rdw_pRoCAY8mSpU0qEfQhYe&rl',
      },
    );
    e.preventDefault();
    string = ronin.replace(/ronin:/g, '0x');
    dispatch(getSlpAction(string)).catch((error) => setErrorMessageSLP(`SLP: ${error.message}`));
    dispatch(getMmrAction(string)).catch((error) => setErrorMessageMMR(`MMR: ${error.message}`));
    dispatch(getAxiesAction(string)).catch((error) => setErrorMessageAxies(`Axies data: ${error.message}`));
    localStorage.setItem(LOCAL_STORAGE_SCHOLAR_DETAILS, JSON.stringify(scholarDetails));
  };

  const handlePercentage = () => {
    const scholarValue = scholarPerRef.current.value;
    const managerCurrentPer = 100 - (scholarValue);
    const button = document.getElementById('submitDetails');
    if (managerCurrentPer >= 100 || managerCurrentPer <= 0 || Number.isNaN(managerCurrentPer)) {
      setPercentage('Invalid format.');
      button.setAttribute('disabled', true);
    } else {
      setPercentage(managerCurrentPer);
      button.removeAttribute('disabled');
    }
  };

  useEffect(() => {
    if (storedDetails && storedDetails[0].data !== null) {
      string = storedDetails[0].data.replace(/ronin:/g, '0x');
      dispatch(getSlpAction(string)).catch((error) => setErrorMessageSLP(`SLP: ${error.message}`));
      dispatch(getMmrAction(string)).catch((error) => setErrorMessageMMR(`MMR: ${error.message}`));
      dispatch(getAxiesAction(string)).catch((error) => setErrorMessageAxies(`Axies data: ${error.message}`));
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
