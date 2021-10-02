/*{
"type": "action",
"targets": ["omnifocus"],
"author": "Kaitlin Salzke",
"identifier": "com.KaitlinSalzke.AppendOrPrepend",
"version": "1.1",
"description": "Append or prepend text to the name of the selected task(s)",
"label": "Append or Prepend",
"shortLabel": "Append or Prepend"
}*/
(() => {
  const action: PlugIn.Action = new PlugIn.Action((selection: any) => {
    // create and show form to decide append or prepend
    const inputForm: Form = new Form()
    const textField: Form.Field.String = new Form.Field.String(
      'textInput',
      'Text To Append/Prepend',
      null,
      null
    )
    inputForm.addField(textField, null)

    const checkSwitchField: Form.Field.Checkbox = new Form.Field.Checkbox(
      'prependSwitch',
      'Prepend',
      null
    )
    inputForm.addField(checkSwitchField, null)

    interface PromptForm extends Form {
      values: {
        textInput: string,
        prependSwitch: boolean
      }
    }

    const formPrompt: string = ''
    const formPromise: Promise<Form> = inputForm.show(formPrompt, 'Continue')

    // Append/prepend text
    formPromise.then((formObject: any) => { //TODO: Fix 'any'
      const textValue: string = formObject.values.textInput
      const prepend: boolean = formObject.values.prependSwitch

      selection.tasks.forEach((task: Task) => {
        if (prepend) {
          task.name = textValue + task.name
        } else {
          task.name = task.name + textValue
        }
      })
    })
  })

  action.validate = (selection: any) => {
    return selection.tasks.length > 0
  }

  return action
})()
