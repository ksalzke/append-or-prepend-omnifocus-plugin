# About

This is an Omni Automation solitary plug-in for OmniFocus that allows the user to append or prepend text to the name of the selected task(s). Further details are provided below.

_Please note that all scripts on my GitHub account (or shared elsewhere) are works in progress. If you encounter any issues or have any suggestions please let me know--and do please make sure you backup your database before running scripts from a random amateur on the internet!_

## Known issues

None so far! 🤞

# Installation & Set-Up

(For instructions on getting started with Omni Automation, see [here](https://kaitlinsalzke.com/how-to/how-to-add-a-omnijs-plug-in-to-omnifocus-and-assign-a-keyboard-shortcut/).)

1. Click on the green `Clone or download` button above to download a `.zip` file of the file in this GitHub repository.
2. Unzip the downloaded file.
3. Move the `.omnifocusjs` file to your OmniFocus plug-in library folder (or open it to install).

# Actions

## Append or Prepend

This action can be run on one or more selected tasks. 

It shows a form prompting the user for some text, and a 'prepend' checkbox. 

Then, for each selected task, it appends or prepends the text entered by the user to the original name of the task. By default, the text is appended; if the 'prepend' checkbox is selected, the text is prepended.