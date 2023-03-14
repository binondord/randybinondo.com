import Image from 'next/image'
import randy from '../../public/images/randybinondo.png'

import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('../hooks/userScrollSpy'),
  { ssr: false }
)

//import { useScrollspy } from '../hooks/userScrollSpy';

import { styled } from '@stitches/react';
import React from 'react';
//import './scene.css';

const Wrapper = styled('div', {
  display: 'flex',
  width: '300px',
  paddingTop: '56px',
});

const Content = styled('div', {
  height: '500px',
  overflowY: 'scroll',
  paddingRight: '8px',

  '&::-webkit-scrollbar': {
    WebkitAppearance: 'none',
    width: '8px',
  },

  '&::-webkit-scrollbar-track': {
    backgroundColor: 'hsla(222, 15%, 70%, 0.2)',
    borderRadius: '8px',
  },

  '&::-webkit-scrollbar-thumb': {
    borderRadius: '8px',
    backgroundColor: '#C4C9D4',
  },
});

const TableOfContent = styled('div', {
  width: '100px',
});

const List = styled('ul', {
  position: 'absolute',
});

const Section = styled('section', {
  height: '450px',
  width: '175px',
  display: 'block !important',
  background: '#16181D',
  borderRadius: '8px',
  color: '#C4C9D4',
  marginBottom: '24px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const Sample = () => {
  const ids = ['part1', 'part2', 'part3'];
  const [elements, setElements] = React.useState([]);
  /*const [currentActiveIndex] = DynamicComponentWithNoSSR(elements, {
    root: document.querySelector('#demo-root'),
    offset: 20,
  });*/

  /**
   You can ignore this, it's only here so it plays nicely with SSR :)
  */
  React.useEffect(() => {
    const widgetElements = ids.map((item) =>
      document.querySelector(`section[id="${item}"]`)
    );

    setElements(widgetElements);
  }, []);

  return (
    <Wrapper>
      <TableOfContent>
        <List>
          {ids.map((id, index) => (
            <li
              key={id}
              style={{
                color:
                  currentActiveIndex === index
                    ? '#5786F5'
                    : '#C4C9D4',
              }}
            >
              Part {index + 1}
            </li>
          ))}
        </List>
      </TableOfContent>
      <Content id="demo-root">
        {ids.map((id, index) => (
          <Section key={id} id={id}>
            <p>Part {index + 1}</p>
            <p>Some Content</p>
          </Section>
        ))}
      </Content>
    </Wrapper>
  );
};

export default Sample;