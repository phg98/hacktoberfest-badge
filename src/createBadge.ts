import axios from 'axios';

/**
 * Hacktoberfest에서 인정된 PR 갯수 Badge Image를 만들어주는 함수입니다.
 * @param githubUserName 유저이름을 인자로 받습니다.
 * @param color 색상을 인자로 받습니다.
 * @returns SVG String
 */
export async function createBadge(githubUserName:string, color:string = '00FFFF') {
	let prsUrl = `http://badge.hacktoberfestkorea.com:5000/prs?username=${githubUserName}`;
	console.log(prsUrl);
	let prsData = await axios.get(prsUrl);
	console.log(prsData.data.prs);
	let prs = prsData.data.prs.length;
	let url =  `https://img.shields.io/badge/HacktoberfestPRs- ${prs}/4 -${color}`;
	console.debug(url);
	let svg = await downloadSvg(url);
	
	return svg.data;
}


/**
 * URL 요청
 * @param url url을 인자로 받습니다
 * @returns 요청 data
 */

function downloadSvg(url : string) {
	return axios.get(url);
}
