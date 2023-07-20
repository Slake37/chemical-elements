import AllElements from './components/AllElements'

async function fetchElements(){
const url = 'https://periodictable.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '16b56c0dc1mshce58309168f30e5p187be3jsn9505927722f0',
		'X-RapidAPI-Host': 'periodictable.p.rapidapi.com'
	}
};

const response = await fetch(url, options)
const elements = await response.json()
return elements}

const HomePage = async () => {
  const elements = await fetchElements()
  return (
    <div>
      <AllElements elements={elements}/>
    </div>
  )
}

export default HomePage