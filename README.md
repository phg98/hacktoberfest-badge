# 핵토버페스트 뱃지

![hacktoberfestStatus](http://badge.hacktoberfestkorea.com/?githubUserName=phg98)


핵토버페스트 참가자 개인 프로필 화면에 넣을 수 있도록 현재 인정된 PR개수를 표시하는 배지  
[resten님의 군복무 D-Day 배지](https://github.com/Resten1497/soldier_badge)를 기반으로 만들어 보았습니다.  
PR개수를 체크하는 서버는 [Hacktoberfest Checker](https://hacktoberfestchecker.jenko.me)를 그대로 사용해서 실행하였습니다.  

* 유의사항
  * Exclude된 PR은 확인되지 않으므로 정확하지는 않습니다. 정확한 확인은 [핵토버페스트 홈페이지](https://hacktoberfest.digitalocean.com/)에서 확인해주세요.
  * 행사 등록 여부는 확인되지 않습니다.


## Dependency
[Shield.io](https://shields.io/)


## Usage

```markdown
![hacktoberfestStatus](http://badge.hacktoberfestkorea.com/?githubUserName=MyGithubId)
```
> `MyGithubId`를 본인의 깃헙 ID로 변경해주세요. 

## Configuration & Setup

### Project Cloning

```sh
https://github.com/phg98/hacktoberfest-badge
cd hacktoberfest-badge
npm i
```

### Build

```sh
tsc
```

### Run

```sh
node dist/index.js # 서버 PORT 기본 값 = 3000
```

or

```sh
npm start # 서버 PORT 기본 값 = 3000
```
## Contribute  
Update Please  

## Questions

* GitHub - [open issue](https://github.com/phg98/hacktoberfest-badge/issues)

## License
Update Please
