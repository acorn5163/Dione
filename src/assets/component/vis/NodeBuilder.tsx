import React from 'react'
import { Network, DataSet } from "vis-network/standalone";
import type { Node, Edge, Options } from "vis-network";
import PathData from "../../../../public/config.json"
import Card from '../Article_List/Card';

type Article = {
    "ID":string,
    "Name":string,
    "Description":string,
    "Source":Array<string>,
    "Utilization":Array<string>
}

type RawArticle = {
    "ArticleName":string,
    "Description":string,
    "Source":{
        "ArticleID":string,
        "Priority":number
    }[],
    "Utilization":{
        "ArticleID":string,
        "Priority":number
    }[]
}

type RawData = {
    [key:string]:RawArticle
}

type Relation = {"Nodes":Array<string>,"Priority":number}
function NodeBuilder(){
    let Relations:Array<Relation> = []
    Object.entries(PathData["Articles"]).map(([key, value]) => {
        value["Source"].map(({"ArticleID":ChildID, "priority":Priority}) => {
            Relations.push({"Nodes":[key,ChildID],"Priority":Priority})
        })

        value["Utilization"].map(({"ArticleID":ParentID, "priority":Priority}) => {
            Relations.push({"Nodes":[key,ParentID],"Priority":Priority})
        })
    })

    Relations = Relations.sort((a,b) => b.Priority - a.Priority)
    let sortedRelations : Array<Relation> = []
    Relations.map(({"Nodes":[NodeA,NodeB],"Priority":priority}) => {sortedRelations.push({"Nodes":[NodeA,NodeB].sort(),"Priority":priority})})
    

    let usedpair : Array<Array<string>> = []
    let RawEdge :Array<Relation> = []
    sortedRelations.map((element) =>{
        if(!usedpair.some(target => target.toString() === element.Nodes.toString())){
            usedpair.push(element.Nodes)
            RawEdge.push(element)
        }
    })

    let Nodes = new Array<Node>
    Object.entries(PathData["Articles"]).map(([key, value]) => {
        Nodes.push({"id":key,"label":value.ArticleName})
    })
    let nodes = new DataSet<Node>(Nodes)

    let Edges = new Array<Edge>
    RawEdge.map(({"Nodes":[NodeA,NodeB],"Priority":priority}) =>{
        Edges.push({"from":NodeA, "to":NodeB, "width":priority*1.5})
    })
    console.log(Nodes)
    console.log(Edges)
    let edges = new DataSet<Edge>(Edges)
    const data = {nodes,edges}
    return data
}

export default NodeBuilder