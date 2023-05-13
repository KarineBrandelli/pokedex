import axios from "axios";




type dispatchLoadingType = React.Dispatch<React.SetStateAction<boolean>>;
type dispatchSetListType = React.Dispatch<React.SetStateAction<{
    name: string;
    url: string;
}[]>>


//function for the first useEffect in the home-page
export function initalLoad(offset : number, limit: number, setIsloading: dispatchLoadingType, setList : dispatchSetListType) {
    setIsloading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      .then((response) => {
        setTimeout(() => setIsloading(false), 500);
        setList(response.data.results);
      });
}


