import React,{Component} from 'react';


export class Home extends Component{
    render(){
        return(
            <div>
                <h1>Welcome to the home page of Person&Property Notebook</h1>
                <h>------------------------------------------------------------------------------------------------------------------</h>
                <div class="jumbotron text-center">
            <h1 style={{color: "red"}}>               
                Frontend: React JS
            </h1>
            <h1 style={{color: "blue"}}>
                Backend: .Net C#
            </h1>
            <h1 style={{color: "green"}}>
                Database: Postgresql
            </h1>
            <h>------------------------------------------------------------------------------------------------------------------</h>

        </div>
        <div class="container" >
            <div class="row" >
                <div class="col-md-4"  style={{backgroundColor: "#FF5722"}}>
                    
                    <h1>Paper Link</h1>
                    <h>------------------------------------</h>
                    <p><a href="https://www.sciencedirect.com/science/article/pii/S2214509522005046">Check out my latest academic paper!</a></p>
                    
                </div>
                <div class="col-md-4"  style={{backgroundColor: "#8BC34A"}}>
                    <h1>Linkedin</h1>
                    <h>------------------------------------</h>
                    <p><a href="https://www.linkedin.com/in/bahad%C4%B1r-tatar-b2895b176/">Visit my linkedin profile!</a></p>
                </div>
                <div class="col-md-4"  style={{backgroundColor: "#9FA8DA"}}>
                    <h1>Recent News</h1>
                    <h>------------------------------------</h>
                    <p><a href="https://www.bloomberg.com/europe">World Agenda!</a></p>
                    
                </div>
            </div>
            
        </div>
            </div>
            
            
        )
    }
}