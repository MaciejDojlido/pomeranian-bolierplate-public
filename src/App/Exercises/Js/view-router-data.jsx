import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaArraysJavaScript } from './Exercise-js-arrays-basics/router-data';
import { blockRouterMetaData as blockRouterMetaMethodsOnArraysJavaScript } from './Exercise-js-arrays-methods/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaArraysJavaScript,
  blockRouterMetaMethodsOnArraysJavaScript
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
