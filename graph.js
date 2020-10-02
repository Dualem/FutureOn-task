class Graph{
    constructor(){
        this.adjList = new Map();
    }
    addNode(v){
        this.adjList.set(v,[]);
    }
    addEdge(v, w){
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    }
    printGraph(){
        let get_keys = this.adjList.keys();
        for(let i of get_keys){
            let get_values = this.adjList.get(i);
            let conc = "";
  
            for(let j of get_values){
                conc += "> "+ j + " ";
  
            }
            console.log(i + " -" + conc);
        }
    }
}
module.exports.Graph = Graph;