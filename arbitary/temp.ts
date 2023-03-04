import fs from 'fs';
import path from 'path'
import {RAW_TLE} from '../db/tle'
const splitOnBreak = (str:string) => {
  return str.split('\n').map(str=>str.trim());
}
type tleSchema = {
  sat_name: string,
  tle: [string, string]
}
const makeTleObj = (arr: string[], temp: tleSchema[] = []) => {
	const totalLen = arr.length;
	const len = totalLen / 3;
	for (let i = 0; i < len; i++) {
		const idx = i * 3;
		const sat_name = arr[idx];
    temp.push({
      sat_name,
      tle:[arr[idx + 1], arr[idx + 2]]
    })
	}
  return temp
};

// const filePath = path.join(__dirname,"..", 'db','SAT_NAMES.ts');
// const data = `export const SAT_NAMES = ${JSON.stringify(makeTleObj(splitOnBreak(RAW_TLE)).map(d =>d.sat_name))}`;
// fs.writeFileSync(filePath, data);
