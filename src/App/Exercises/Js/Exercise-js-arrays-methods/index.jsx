import './styles.css';

const arrayOfMultipleTypes = [
  true,
  1,
  'Cześć to Rock In It',
  { maciej: 'dojlido' },
];

export const objectOfMultipleTypes = {
  maciej: { daneOsobowe: 'Jestem z Gdańska' },
  kursFe: 'react',
  kursFe1: 1,
  kursFe2: true,
  kursFe3: [],
  kursFe4: () => 'Lubie Vanilla JS',
};

const array2d = [1, [2]];

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayOfNumbersOne = [1, 2, 3];
const arrayOfNumbersTwo = [4, 5, 6];

export function Exercise() {
  const { kursFe, kursFe3 } = objectOfMultipleTypes;
  const [ a, b, c, d ] = arrayOfMultipleTypes;


  function filterMethod(arrayOfNumbersParam) {
    const gratherThan5 = arrayOfNumbersParam.filter(function (arrayNumber) {
      return arrayNumber > 5;
    });
    return console.log('filterMethod', gratherThan5);
  }
  filterMethod(arrayOfNumbers);

  function getThisSameNumbers() {
    const arrOne = [1, 2, 3, 4, 5];
    const arrTwo = [3, 5, 7, 9];

    const result = arrOne.filter(function (numberElement) {
      return arrTwo.includes(numberElement);
    });

    return console.log('getThisSameNumbers', result);
  }
  getThisSameNumbers();

  function mergeObjects() {
    const object1 = { foo: 'bar' };
    const object2 = { name: 'Maciej' };
    const resultOfMerging = { ...object1, ...object2 };

    console.log('mergeObjects', resultOfMerging);
    return resultOfMerging.name;
  }

  return (
    <div>
      <p>Metody na tablicach:</p>
      {objectOfMultipleTypes.maciej.daneOsobowe}
      <br />
      {objectOfMultipleTypes.kursFe4()}
      <br />
      {objectOfMultipleTypes['maciej']['daneOsobowe']}
      <br />
      {/* {Object.values(objectOfMultipleTypes)} */}
      <br />
      {/* {Object.keys(objectOfMultipleTypes)} */}
      <br />
      {mergeObjects()}
      <br />
      {kursFe}
      <br />
      Destrukturyzacja tablicy : {d.maciej}
    </div>
  );
}
