'use strict';
/* eslint-disable no-unused-vars */
const v1 = { value: 'Something' };
const v2 = '';
const v3 = undefined;
const v4 = [3, 5, 7, 9];
const v5 = {
  name: 'Carl',
  details: {
    age: 82,
  },
};
console.log(v1 && 'v1 is truthy');
console.log(v2 && 'v2 is truthy');
const config1 = v1 || 'default-value';
const config2 = v2 || 'default-value';
console.log('config1 and config2: ', config1, config2);
const cfg1 = v1 ?? 'default-value';
const cfg2 = v2 ?? 'default-value';
const cfg3 = v3 ?? 'default-value';
console.log('cfg1, cfg2, cfg3: ', cfg1, cfg2, cfg3);
const tern1 = v1 ? 'truthy' : 'falsy';
const tern2 = v2 ? 'truthy' : 'falsy';
console.log('tern1, tern2: ', tern1, tern2);
const oc1 = v1?.value;
const oc2 = v5.details?.address?.city;
console.log('oc1, oc2: ', oc1, oc2);
const sObj = { ...v1, Foo: 'Bar' };
console.log('sObj: ', sObj);
const sArr = [100, ...v4];
console.log('aArr: ', sArr);
