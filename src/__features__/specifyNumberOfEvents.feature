Feature: Specify number of events

    Scenario: When user has not specified a number, 32 is the default number
        Given the user has not specified the number of events they want shown
        When user opens the app
        Then 32 events will be shown

    Scenario: User can change the number of events they want to see
        Given user opens the app
        When the user specifies the number of events shown
        Then the number specified by user will be shown

