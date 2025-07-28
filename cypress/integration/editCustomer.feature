Feature: MARMELAB Edit Customer validation

    Application regression

    @editCustomer
    Scenario: SignUp With Valid Credential
    Given I navigate to base URL
    When I enter valid username and password
    When I click login Button
    Then I click Customer button
    When I select a Customer
    Then I edit the customer
   When I click save button
    Then I validate successfull customer edit 