function Select() {
  const years = []
  let i
  for(i=2000; i<2022; i++){
    years.push(i)
  }

  return (
    <body>
      <select name="year">
        <option value="select year">Select Year</option>
        {
          years.map((v) => {
            return(
              <option value="{v}">{v}</option>
            )
          }
        )
      }
      </select>
      {/* <select name="year">
        <option value="select year">Select Year</option>
        <option value="">2021</option>
        <option value="">2020</option>
        <option value="">2019</option>
        <option value="">2018</option>
        <option value="">2017</option>
        <option value="">2016</option>
        <option value="">2015</option>
        <option value="">2014</option>
        <option value="">2013</option>
        <option value="">2012</option>
        <option value="">2011</option>
        <option value="">2010</option>
        <option value="">2009</option>
        <option value="">2008</option>
      </select> */}
    </body>
  )
}

export default Select
