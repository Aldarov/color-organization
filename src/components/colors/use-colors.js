import React, { createContext, useContext } from "react";

import { ColorContext } from './color-provider';

export const useColors = () => useContext(ColorContext);