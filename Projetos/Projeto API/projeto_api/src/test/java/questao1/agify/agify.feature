Feature: Testando API Agify

Background: É executado antes de cada teste
    * def url_base = 'https://api.agify.io/'

Scenario: Teste 1: testando retorno name=Wiilliam.
    Given url url_base
    And path '/?name=William'
    When method get
    Then status 200

Scenario: Teste 2 (negativo): testando o JSON de um nome com retorno nulo.
    Given url url_base
    And path '/?name=???'
    When method get
    Then status 200
    And match response.age == null

Scenario: Teste 3 (negativo): testando uma contagem de nomes impossível.
    Given url url_base
    And path '/?name=Albert'
    When method get
    Then status 200
    And eval if (response.count < 1000000000000) karate.log('Não há um trilhão de Alberts.')

Scenario: Teste 4: testando a contagem conhecida do JSON do nome Chris.
    Given url url_base
    And path '/?name=Chris'
    When method get
    Then status 200
    And match response.count == 180578

Scenario: Teste 5: testando a idade prevista conhecida do JSON do nome Candance.
    Given url url_base
    And path '/?name=Candance'
    When method get
    Then status 200
    And match response.age == 53

Scenario: Teste 6: testando a equivalência entre o nome do teste e o nome da busca.
    Given url url_base
    And path '/?name=Robert'
    When method get
    Then status 200
    And match response.name == 'Robert'