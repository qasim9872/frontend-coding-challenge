# Notes

- The local state of connectors is mounted from global state to be able to make edits when back button is clicked

- if API call fails, an alert is displayed and the full response can be viewed in the console logs. Based on the UX of Thriva, the correct approach would be to have an error page which should be used. Alternatively, we could use toast notifications.