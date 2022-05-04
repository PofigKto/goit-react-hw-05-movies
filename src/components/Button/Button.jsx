import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './Button.styled.js';
import { GoBackButton, SpanLabel } from './Button.styled';
import { ImArrowLeft } from 'react-icons/im';

export default function ButtonGoBack({ onClick }) {
  const navigate = useNavigate();
  console.log(navigate);
  return (
    //   <GoBackButton type="button" onClick={() => navigate('/')}>
    <GoBackButton type="button" onClick={() => navigate(-1)}>
      <ImArrowLeft fill="darkblue" size="32" /> <SpanLabel> GO BACK</SpanLabel>
    </GoBackButton>
    // </GoBackButton>
  );
}

ButtonGoBack.propTypes = {
  onClick: PropTypes.func.isRequired,
};
