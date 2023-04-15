import React, {Component} from 'react'

class ContenidoClase extends Component{
    constructor(){
        super();
        this.state = {
            texto: '',
            titulo:'Clase React'
        };
    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    componentDidUpdate(prevProps,prevState){
        console.log("componentDidUpdate", prevProps,prevState,this.state);
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    
    render(){
        return(
            <div>
                <h1>{this.state.titulo}</h1>
                <p>Contenido Clase {this.state.texto}</p>
                
                <button onClick={()=>this.setState({texto:'HOLA'})}>Agregar hola</button>
                <button onClick={()=>this.setState({texto:''})}>Quitar hola</button>
            </div>
        )
    }    
}
/*
()=>this.setState({texto:'HOLA'}
function(){
    return this.setState({texto:'HOLA'})
}
*/
export default ContenidoClase

