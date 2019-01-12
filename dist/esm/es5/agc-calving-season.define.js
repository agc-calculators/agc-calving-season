
// AgcCalvingSeason: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './agc-calving-season.core.js';
import {
  AgcCalvingSeason,
  AgcCalvingSeasonInputs,
  AgcCalvingSeasonProgress,
  AgcCalvingSeasonResults,
  AgcCalvingSeasonResultsPlaceholder
} from './agc-calving-season.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    AgcCalvingSeason,
    AgcCalvingSeasonInputs,
    AgcCalvingSeasonProgress,
    AgcCalvingSeasonResults,
    AgcCalvingSeasonResultsPlaceholder
  ], opts);
}
