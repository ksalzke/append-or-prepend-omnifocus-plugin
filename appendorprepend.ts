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
  const action: PlugIn.Action = new PlugIn.Action(async (selection: any) => {
    // build form
    const inputForm: any = new Form()
    inputForm.addField(new Form.Field.String('textInput', 'Text To Append/Prepend', null, null), null)
    inputForm.addField(new Form.Field.Checkbox('prependSwitch', 'Prepend', null), null)
    // show form
    await inputForm.show('', 'Continue')
    // get form values and adjust task name(s)
    const textValue: string = inputForm.values.textInput
    const prepend: boolean = inputForm.values.prependSwitch
    selection.tasks.forEach((task: Task) => task.name = prepend ? task.name = textValue + task.name : task.name + textValue)
  })

  action.validate = (selection: any) => {
    return selection.tasks.length > 0
  }

  return action
})()
