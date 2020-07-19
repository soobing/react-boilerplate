context('화면 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  })

  it('Add Todo 영역이 잘 보이는지', () => {
    // Add Todo 텍스트와 input, 그리고 add 버튼이 보여야한다.
  })
  it('Todo List 영역이 잘 보이는지', () => {
    // 기본적으로 `일기 쓰기`, `낮잠 자기 `항목이 보여야 한다.
  })
})