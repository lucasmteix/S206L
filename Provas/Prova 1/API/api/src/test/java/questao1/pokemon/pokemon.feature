Feature: Testando API Pokemon

Background: É executado antes de cada teste
    * def url_base = 'https://pokeapi.co/api/v2/'

Scenario: Teste 1: testando retorno pokemon/bulbasaur.
    Given url url_base
    And path '/pokemon/bulbasaur'
    When method get
    Then status 200

Scenario: Teste 2 (negativo): testando retorno com informações inválidas.
    Given url url_base
    And path '/pokemon/hulk'
    When method get
    Then status 404

Scenario: Teste 3: testando retorno pokemon/squirtle e verificando o JSON.
    Given url url_base
    And path '/pokemon/squirtle'
    When method get
    Then status 200
    And match response.name == "squirtle"
    And match response.id == 7

Scenario: Teste 4: testando retorno version/3 entrando em um dos elementos do array de idiomas e testando retorno JSON.
    Given url url_base
    And path '/version/3/'
    When method get
    Then status 200
    And def idioma = $.names[7].language.url
    And url idioma
    When method get
    Then status 200
    And match response.name == "en"
    And match response.id == 9

Scenario: Teste 5: testando o retorno de type/13 e verificando o JSON.
    Given url url_base
    And path '/type/13'
    When method get
    Then status 200
    And match response.name == "electric"