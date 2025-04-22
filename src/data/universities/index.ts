
import { University } from '../types/university';
export type { University, Course } from '../types/university';

// Import from provinces
export * from './provinces/western-cape';
export * from './provinces/gauteng';
export * from './provinces/kwazulu-natal';
export * from './provinces/free-state';
export * from './provinces/eastern-cape';

import * as westernCape from './provinces/western-cape';
import * as gauteng from './provinces/gauteng';
import * as kwazuluNatal from './provinces/kwazulu-natal';
import * as freeState from './provinces/free-state';
import * as easternCape from './provinces/eastern-cape';

export const southAfricanUniversities: University[] = [
  ...Object.values(westernCape).flat(),
  ...Object.values(gauteng).flat(),
  ...Object.values(kwazuluNatal).flat(), 
  ...Object.values(freeState).flat(),
  ...Object.values(easternCape).flat(),
];
