import React from "react";
import Color from "./color";
import AddColorForm from './add-color-form';


export default function ColorList({ colors = [], onRemoveColor = f => f, onRateColor = f => f }) {
  if (!colors.length) return <div>No Colors Listed.</div>;

  return (
    <div>
      {
        colors.map(color =>
          <Color
            key={color.id}
            {...color}
            onRemove={onRemoveColor}
            onRate={onRateColor}
          />
        )
      }
      <AddColorForm />
    </div>
  );
}