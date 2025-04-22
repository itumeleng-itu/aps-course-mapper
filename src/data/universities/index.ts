
import { University } from '../types/university';
export * from './western-cape';
export * from './gauteng';
export * from './kwazulu-natal';
export * from './free-state';
export * from './eastern-cape';

import * as westernCape from './western-cape';
import * as gauteng from './gauteng';
import * as kwazuluNatal from './kwazulu-natal';
import * as freeState from './free-state';
import * as easternCape from './eastern-cape';

export const southAfricanUniversities: University[] = [
  westernCape.uct,
  westernCape.stellenbosch,
  westernCape.uwc,
  westernCape.cput,
  gauteng.wits,
  gauteng.uj,
  gauteng.tut,
  gauteng.up,
  kwazuluNatal.ukzn,
  freeState.ufs,
  easternCape.nmu,
  easternCape.ru,
  easternCape.ufh,
];
