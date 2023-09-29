import React from 'react';

import ColorList from "./colors/color-list";
import AddColorForm from './colors/add-color-form';
import ColorProvider from './colors/color-provider';


export default function App() {
  return <ColorProvider>
    <AddColorForm />
    <ColorList />
  </ColorProvider>
}