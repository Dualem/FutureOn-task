//use fetch to retreive data from API and sort it into a graph data structure
const fetch = require("node-fetch");
let graph = require("./graph");
const url = 'https://backend.qa.fieldap.com/API/v1.8/-MA1551S-odms4rVbJ8A/subProject/-MA1551S-odms4rVbJ8B'

const getDataNames = async () =>{
    let gr = new graph.Graph();
    try{
        const response = await fetch(url,{
            method:'GET',
            headers:{
                'token': '10941392-a080-44c4-8cf2-a97011bc6b81'
            }
        }).then(response => response.json())
        .then(data=>{
            
            let obj = data.stagedAssets
            for (let key in obj){
                if(obj.hasOwnProperty(key)){
                    let val = obj[key];
                    // add nodes to graph 
                    gr.addNode(key);
                }
            }
            let connections = data.connections;
            for (let key in connections){
                if(connections.hasOwnProperty(key)){
                    let val = connections[key]
                    //add connections to graph
                    gr.addEdge(val.from, val.to)
                }
            }

        });
        gr.printGraph();
        return response;
    }catch(e){
        console.log(e);
    }
    
    
    
}
getDataNames();

