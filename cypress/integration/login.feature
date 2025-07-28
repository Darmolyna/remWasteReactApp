Feature: MARMELAB Login validation

    Application regression

    @signUp
    Scenario: SignUp With Valid Credential
    Given I navigate to base URL
    When I enter valid username and password
    When I click login Button
    Then I validate successfull login