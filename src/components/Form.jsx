import React from 'react'

function Api() {

  const [formValues, setFormValues] = useState({});
  const handleInputChange=(e)=>{
    setFormValues({
      ...formValues,
      [e.target.name]:e.target.value
    })}
  return (
    <>
    <div>api</div>
    </>
    )
}

export default Api