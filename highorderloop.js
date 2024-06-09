//for of loop on array;  this is same as we apply iterator on c++ on stl
const ar=["how", "r", "u"]
for(const it of ar)
    {
        console.log(it)
    }
const gr=" hello shahzad"
for(const it of gr)
    {
        if(it==" ")
            continue
        console.log(`each char is  + ${it}`)
    }

    // MAP IN js are object ( everything in js are basically object) hold key value pair
    // but unlike object map can have any datatype key not just string as in object
    const map=new Map()
    map.set('in', 'india')
    map.set('fr', 'france')
    console.log(map)
    // loop on map

    for(const i of map)
        {
            console.log(i)
        }
// loop on map by destructing map
for(const [i, j] of map)
    {
        console.log(i,"-",j)
    }