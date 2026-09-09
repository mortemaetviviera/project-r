/**
 * modulesData.js
 * Static data for the Modules learning page.
 * Extracted from ModulesPage.jsx for separation of concerns.
 */

/** Google Drive links for each module (material + submission folder). */
export const linksData = {
  1:  { module: 'https://drive.google.com/drive/folders/1Kw2ZScwOXzsJOFSq-8HxrKynFN3EtT3R',                            submission: 'https://drive.google.com/drive/folders/1h8Cr3hRUJHkyM0kkmywVL_qsolyo2cel' },
  2:  { module: 'https://drive.google.com/drive/folders/19soTOKpdoPQe21JMeql5vgfNSoMGUN73',                            submission: 'https://drive.google.com/drive/folders/1AzL6ut9VJmGm2XmgjZT8hk39zwhdBrun' },
  3:  { module: 'https://drive.google.com/drive/folders/1wSDpkxCf7S0AgMkEninl8UfHA_DMrdNx',                            submission: 'https://drive.google.com/drive/folders/1QCxz9VKfil0DfHX_qV7EEHxAIadW9kQi' },
  4:  { module: 'https://drive.google.com/drive/folders/1xJ4nexeOSCpU6P4tqwKF1d-3A6U0sZw6',                            submission: 'https://drive.google.com/drive/folders/12auas7v3BnwCuPaPCx-PwDKC4MfnxB5u' },
  5:  { module: 'https://drive.google.com/drive/folders/1lhQcseZCYk0W4QFvTGo7eR0LtonhYRlj?usp=drive_link',            submission: 'https://drive.google.com/drive/folders/12pYflk_9pFUuWb4HlgmxVYwoGwSbUAKY?usp=drive_link' },
  6:  { module: 'https://drive.google.com/drive/folders/1-HFdsn_nDl8jESynlZEo9lZ0h2g8jG1Z?usp=drive_link',            submission: 'https://drive.google.com/drive/folders/1yOkUUhEmuiOgeLlzR00dj57Ub7g-pvsy' },
  7:  { module: 'https://drive.google.com/drive/folders/1UndNOx78eFKRnCV0RlF5lxM1eg1iUjet',                            submission: 'https://drive.google.com/drive/folders/1IzDn7jnwQd8kMTWWBzBLZeufKMaoVBda' },
  8:  { module: 'https://drive.google.com/drive/folders/1GMGHdh97VbZkU7BTyFtlxnW68brD4w3Y',                            submission: 'https://drive.google.com/drive/folders/1KwmeakJG9E1Vn-tlUq0p-wBk9KW0OCva' },
  9:  { module: 'https://drive.google.com/drive/folders/1oltkzC44zytX3ppqKJhM1iUvxz2baVj5',                            submission: 'https://drive.google.com/drive/folders/1gUBW4fbcEuyQZP4Po89fEgIVMOlUUeLG' },
  10: { module: 'https://drive.google.com/drive/folders/1OUrrDTnquCO277hJMQTGhD-OJk1zmBzK',                            submission: 'https://drive.google.com/drive/folders/1C57ikqhh95zAWqhWKx4_WXF7aQGgJpvu' },
};

/** localStorage key for persisting module completion state. */
export const STORAGE_KEY = 'lycoris_modules_progress';

/** Module numbers belonging to the Figma track. */
export const figmaModules = [1, 2, 3, 4, 5];

/** Module numbers belonging to the Photoshop track. */
export const psModules = [6, 7, 8, 9, 10];
