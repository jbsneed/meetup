Feature: Show/hide an event details

    Scenario: An event element is collapsed by default
        Given the user has selected a city
        When the user is viewing the events of selected city
        Then the event name will be shown and the details will be collapsed

    Scenario: User can expand an event to see its details
        Given the list of events has been loaded
        When user clicks on “Show Details” button for an event
        Then the event element will be expanded to show the event details

    Scenario: User can collapse an event to hide its details
        Given the user opens the app
        And the event details are showing
        When the user clicks on event details button again
        Then the event details should collapse
