context('api mocking', () => {
  beforeEach(() => {
    // nasa 페이지 접속
    cy.visit('http://localhost:8080/nasa')
  })

  function setTodaySpaceApi() {
    cy.server()
    cy.fixture('space.json').as('spaceData')
    cy.route({
      method: 'GET',
      url: `https://api.nasa.gov/planetary/apod?api_key=fpM0K7ecLamWrtaEoif2ipn4HJXv57CsGMdTCEta`,
      response: '@spaceData'
    }).as('getTodaySpace')
  }

  it('화면에 오늘의 우주 영상이 보여지는지 테스트', () => {
    setTodaySpaceApi()
    // api 요청이 완료되었다고 가정하고
    cy.wait('@getTodaySpace');

    // 오늘의 우주 비디오가 화면에 보여야 함.
    cy.get('#nasa > iframe').should('be.visible');
  })
})