import allTricks from "../resources/AllTricks.json"

/*
This will eventually come from a database instead of from json
*/


exports.getAll = () => {
    return allTricks
}

exports.getTrickById = (id: number) => {
   return allTricks.filter(trick => trick.id == id)[0]
}