//! FUNCTION COMPOSITION
import { compose, pipe } from 'lodash/fp';
const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();

const input = '   Javascript   ';

// USING COMPOSE FROM LODASH FOR MAKING THINGS CLEANER
const transform = compose(wrapInDiv, toLowerCase, trim);
const composeResult = transform(input);

//FUNCTION COMPOSITION
const result = wrapInDiv(toLowerCase(trim(input)));

console.log(composeResult, result);
