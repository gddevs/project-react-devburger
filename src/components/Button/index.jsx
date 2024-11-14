import { ContainerButton } from "./styles";

import PropTypes from 'prop-types';



export function Button({children, ...props}) {
  console.log(props);
  return<ContainerButton {...props}>{children}</ContainerButton>;
}


Button.propTypes = {
  children: PropTypes.string,
};