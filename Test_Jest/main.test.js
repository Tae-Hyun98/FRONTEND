const sum = require('./main')

test('adds 1+2 to equal 3', () => {
  expect(sum(1, 2)).toBe(4)
})

test('two plus two is four', () => {
  expect(2 + 2).toBe(4)
})

test('object assignment', () => {
  const data = {
    one: 1
  }
  data['two'] = 2
  expect(data).toEqual({ //toEqual은 배열안에 데이터의 값이 맞는지 확인하는 테스트
    one: 1,
    two: 2
  })

})

const memberList = [
  'gildong',
  'soonsin'
]

test('the memberList has soonsin on it',()=>{
  expect(memberList).toContain('soonsin') //toContain은 리스트안에 단어가 포함되어있나 확인하는 테스트
})