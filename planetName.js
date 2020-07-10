//행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요

//Map 이용
var planet = new Map()
planet.set('수성','Mercury')
planet.set('금성','Venus')
planet.set('지구','Earth')
planet.set('화성','Mars')
planet.set('목성','Jupiter')
planet.set('토성','Saturn')
planet.set('천왕성','Uranus')
planet.set('해왕성','Neptune')

console.log(planet.get('수성'))

//객체 이용
const planets = {
	'수성' : 'Mercury',
	'금성' : 'Venus',
	'지구' : 'Earth',
	'화성' : 'Mars',
	'목성' : 'Jupiter',
	'토성' : 'Saturn',
	'천왕성' : 'Uranus',
	'해왕성' : 'Neptune',
}

console.log(planets['수성'])