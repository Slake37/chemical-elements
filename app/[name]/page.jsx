import Link from "next/link";

async function fetchElements(){
const url = `https://periodictable.p.rapidapi.com/`;
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

const ElementDetailsPage = async ({params:{name}}) => {
     const elements = await fetchElements(name)
     const filtered = elements.filter(element => {
     return element.name === name;
  });
  console.log(filtered);

  return (
    <div className="mt-[10rem]">
     
       {filtered.map((details) => (
        <div className="max-w-[720px] m-auto p-3">
           <p className="px-5 py-1 bg-slate-800 text-slate-200 w-fit rounded-md mb-5 font-semibold drop-shadow-lg text-xl">
        <Link href={'/'}>Back</Link>
      </p>
            <h1 style={{ backgroundColor: `#${details.cpkHexColor}` }} className="border-2 w-fit py-3 px-5 rounded-md text-3xl font-semibold drop-shadow-md">{details.symbol}</h1>
            <h1 className="text-2xl font-bold mt-2">{details.name}</h1>
            <p className="text-md font-semibold mt-5">Atomic mass: <span className="font-normal">{details.atomicMass}</span></p>
            <p className="text-md font-semibold ">Atomic number: <span className="font-normal">{details.atomicNumber}</span></p>
            <p className="text-md font-semibold ">Atomic radius: <span className="font-normal">{details.atomicRadius}</span></p>
            <p className="text-md font-semibold ">Boiling point: <span className="font-normal">{details.boilingPoint}</span></p>
            <p className="text-md font-semibold ">Bonding type: <span className="font-normal capitalize">{details.bondingType}</span></p>
            <p className="text-md font-semibold ">Crystal strucure: <span className="font-normal capitalize">{details.crystalStructure}</span></p>
            <p className="text-md font-semibold ">Group block: <span className="font-normal capitalize">{details.groupBlock}</span></p>
            <hr className="mt-2"/>
            <p className="text-md font-semibold mt-5">History: <span className="font-normal">{details.history}</span></p>

        </div>
        
       ))}
    </div>
  )
}

export default ElementDetailsPage