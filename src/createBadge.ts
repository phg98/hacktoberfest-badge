import axios from 'axios';

/**
 * 남은 군 복무 D-Day Badge Image를 만들어주는 함수입니다.
 * @param leftDate 남은 군 복무 기간을 인자로 받습니다.
 * @returns SVG String
 */
export async function createBadge(githubUserName:string){

	let prsUrl = `https://badge.hacktoberfestkorea.com:5000/prs?username=${githubUserName}`
	console.log(prsUrl)
	let prsData = await axios.get(prsUrl)
	console.log(prsData.data.prs)
	let prs = prsData.data.prs.length
	let color = '00FFFF'
	let url = "";
	url =  `https://img.shields.io/badge/HacktoberfestPRs- ${prs}/4 -${color}`;
	console.debug(url)
	let svg = await downloadSvg(url)
	return svg.data;

}


/**
 * URL 요청
 * @param 요청 url을 인자로 받습니다
 * @returns 요청 data
 */

function downloadSvg(url : string) {
		return axios.get(url);
}
