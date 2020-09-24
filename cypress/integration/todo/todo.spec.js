context('화면 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  })

  it('.sc-AxgMl', () => {
    cy.get('.sc-AxgMl').should('be.visible');
  })

  it('Add Todo 영역이 잘 보이는지', () => {
    // Add Todo 텍스트와 input, 그리고 add 버튼이 보여야한다.
    cy.get('.add-todo-title').should('be.visible');
    cy.get('.add-todo-title').should('contain.text', 'Add Todo');
    cy.get('#make-todo-card > input').should('be.visible');
    cy.get('#make-todo-card > button').should('be.visible');
  })
  it('Todo List 영역이 잘 보이는지', () => {
    // 기본적으로 `일기 쓰기`, `낮잠 자기 `항목이 보여야 한다.
    cy.get('.todo-list-item').should('contain.text', '일기 쓰기');
    cy.get('.todo-list-item').should('contain.text', '낮잠 자기');
  })
})

context('ui 조작 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  })

  it('Todo 추가 기능 테스트', () => {
    // input에 빨래하기를 넣고 add 버튼을 클릭하면
    cy.get('#make-todo-card > input').type('빨래 하기');
    cy.get('#make-todo-card > button').click().then(() => {
      // Todo List에 빨래하기 항목이 추가되서 보여야한다.
      cy.get('.todo-list-item').should('contain.text', '빨래 하기');
    })
  })
  it('Todo 완료 기능 테스트', () => {
    // 낮잠 자기의 완료 버튼 클릭시 
    cy.get('.todo-list-item').eq(1).find('>span:last-of-type').click().then(() => {
      // 낮잠 자기에 줄이 그어지는지
      cy.get('.todo-list-item').eq(1).find('>p').should('have.css', 'text-decoration', 'line-through solid rgb(0, 0, 0)');
    })
  })
  it('Todo 삭제 기능 테스트', () => {
    // 일기 쓰기의 삭제 버튼 클릭시 TodoList에서 더이상 안보이는지
    cy.get('.todo-list-item').eq(0).find('>span:first-of-type').click().then(() => {
      // 낮잠 자기에 줄이 그어지는지
      cy.get('.todo-list-item').should('not.contain.text', '일기 쓰기');
    })
  })
})
