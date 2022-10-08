import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Section from './components/Section';
import SideMenu from './components/SideMenu';
import MenuForm from './components/MenuForm';

function App() {
  return (
    <>
      <Section
        variant="blue"
        title='Concentre-se apenas no trabalho importante'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mi sit amet nisi volutpat facilisis.
                    Quisque et elit ut eros ultrices mollis. Donec non ullamcorper sem.
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
      />
      <Section
        variant="beige"
        title='Diga adeus ao trabalho maçante'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mi sit amet nisi volutpat facilisis.
                    Quisque et elit ut eros ultrices mollis. Donec non ullamcorper sem.
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
      />
      <Section
        variant="blue"
        title='Armazenamento e compartilhamento de arquivos são só o começo'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mi sit amet nisi volutpat facilisis.
                    Quisque et elit ut eros ultrices mollis. Donec non ullamcorper sem.
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
      />
      <Section
        variant="white"
        title='Para todos'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mi sit amet nisi volutpat facilisis.
                    Quisque et elit ut eros ultrices mollis. Donec non ullamcorper sem.
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
      />
      <Section
        variant="black"
        title='Parte inferior da página'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu mi sit amet nisi volutpat facilisis.
                    Quisque et elit ut eros ultrices mollis. Donec non ullamcorper sem.
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
      />

      <SideMenu>
        <MenuForm />
      </SideMenu>

      <GlobalStyles />
    </>
  );
}

export default App;