import * as migration_20241023_012507 from './20241023_012507';
import * as migration_20241023_022921 from './20241023_022921';

export const migrations = [
  {
    up: migration_20241023_012507.up,
    down: migration_20241023_012507.down,
    name: '20241023_012507',
  },
  {
    up: migration_20241023_022921.up,
    down: migration_20241023_022921.down,
    name: '20241023_022921'
  },
];
