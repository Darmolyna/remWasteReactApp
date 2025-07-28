Feature: MARMELAB Create Customer validation

    Application regression

    @CreateCustomer
    Scenario: SignUp With Valid Credential
    Given I navigate to base URL
    When I enter valid username and password
    When I click login Button
    Then I click Customer
    When I click Create button
    Then I enter Customer details
    When i click save button
    Then I validate that customer was created successfully