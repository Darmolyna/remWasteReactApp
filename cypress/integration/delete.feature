Feature: MARMELAB Delete Customer validation

    Application regression

    @deleteCustomer
    Scenario: Delete a customer
    Given I navigate to base URL
    When I enter valid username and password
    When I click login Button
    Then I click Customer button
    When I select a Customer    
    Then I click delete button
    When i confirm customer was successfully deleted