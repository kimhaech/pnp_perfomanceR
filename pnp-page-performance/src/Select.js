import ResultData from "./ResultData"

function Select() {
  const years = []
  let i
  // year option출력을 위한 list
  for(i=2000; i<2022; i++){ 
    years.push(i)
  }
  // function for show result data
  const ShowData = (event) => {
    const yearvalue = event.target.value
    if(ResultData[yearvalue]){
      // console.log(ResultData[yearvalue][1])
      document.getElementById('result').innerText = yearvalue
      document.getElementById('result').style.fontSize = "30px"
      document.getElementById('detail').innerText = ResultData[yearvalue]
    }
  }

  return (
    <body>
      <select name="year" class="absolute left-0" onChange={ShowData}>
        <option value="select year">Select Year</option>
        {
          years.map((v) => {
            return(
              <option value={v}>{v}</option>
            )
          }
        )
      }
      </select>
      <p id="result"></p>
      <span id='detail'></span> 
    </body>
  )
}

export default Select
