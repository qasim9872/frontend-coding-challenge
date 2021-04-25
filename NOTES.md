# Notes

- The local state of connectors is mounted from global state to be able to make edits when back button is clicked

- The  progress bar is controlled based on the state of the survey (i.e. count of filled properties make up the current step). We can unset the property when back is clicked to keep the progress bar in sync with the page as this approach will display incorrect progress when back is clicked

- if API call fails, an alert is displayed and the full response can be viewed in the console logs. Based on the UX of Thriva, the correct approach would be to have an error page which should be used. Alternatively, we could use toast notifications.

- No top padding/margin has been added at the start of the success page. This is because the .survey-questions and .content classes have already added spacing in excess of 80px.

- #3d4250 lightened by 18% => #d9dbe2

- the survey results can be dynamically built using a for loop. 