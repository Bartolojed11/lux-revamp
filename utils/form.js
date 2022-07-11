export function stateSetter(event, setter) {
    // name, value and type this are attributes of input field
    const {name, value, type, checked} = event.target

    setter(prevFormData => {
      return {
        ...prevFormData,
        [name] : type === 'checkbox' ? checked : value
      }
    })
}