import React, {Component} from 'react';

import Wrapper from './components/Wrapper';
import Link from './components/Link';
import Button from './components/Button';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import SecondButton from './components/SecondButton';


class App extends  Component {

  render() {

    return (
      <Wrapper>
        <Link>Dropdown</Link>
        <Link>Left Sidebar</Link>
        <Button>TELEPHASIC</Button>
        <Link>Right Sidebar</Link>
        <Link>No Sidebar</Link>
        <Title>Telephasic is a responsive 
        site template by HTML5 UP</Title>
        <Subtitle>Designed and built by AJ. and released for free under 
        the Creative Commons Attribution 3.0 license.</Subtitle>
        <SecondButton>Get this party started</SecondButton>
      </Wrapper>
    );
  }
}

export default App;
