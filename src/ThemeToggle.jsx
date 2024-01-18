import React from 'react';
// import styled from 'styled-components';

import { useGlobalContext } from './context';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    // <Wrapper>
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillMoonFill className="toggle-icon" />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </section>
    // </Wrapper>
  );
};

// const Wrapper = styled.section`
//   .toggle-icon {
//     color: red;
//   }
// `;
export default ThemeToggle;
