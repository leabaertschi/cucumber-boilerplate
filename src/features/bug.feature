Feature: Test button press
    I want to reproduce a bug

    Background:
        Given I open the site "/"

    Scenario: Chained element selections behave unexpectedly
        Given there is an element ".foo" inside an element "#formSubmitTest"
