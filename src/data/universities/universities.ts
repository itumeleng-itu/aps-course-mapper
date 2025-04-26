import * as GautengUniversities from './gauteng';
import * as KZNUniversities from './kwazulu-natal';
import * as WesternCapeUniversities from './western-cape';
import * as FreeStateUniversities from './free-state';
import * as EasternCapeUniversities from './eastern-cape';


// Combine all universities into a single array
const universities = [
  ...Object.values(GautengUniversities),
  ...Object.values(KZNUniversities),
  ...Object.values(WesternCapeUniversities),
  ...Object.values(FreeStateUniversities),
  ...Object.values(EasternCapeUniversities),
  // Add other provinces here
];

export default universities;