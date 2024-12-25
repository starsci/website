import * as migration_20241023_012507 from './20241023_012507';
import * as migration_20241023_022921 from './20241023_022921';
import * as migration_20241224_094703 from './20241224_094703';

export const migrations = [
  {
    up: migration_20241023_012507.up,
    down: migration_20241023_012507.down,
    name: '20241023_012507',
  },
  {
    up: migration_20241023_022921.up,
    down: migration_20241023_022921.down,
    name: '20241023_022921',
  },
  {
    up: migration_20241224_094703.up,
    down: migration_20241224_094703.down,
    name: '20241224_094703'
  },
];
