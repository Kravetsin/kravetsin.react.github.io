import { Component } from "react";


export default class Comptest extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         visibility: false
      };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state => ({
            visibility: !state.visibility
        }));
    }


    render(){
        if (this.state.visibility){
            return(
                <div>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolor cum commodi quisquam ipsum temporibus amet porro quia corrupti quaerat natus dignissimos enim culpa labore, reprehenderit voluptas eius in? Quam!</h1>
                    <div className="col">
                        <button onClick={this.handleClick}>Close</button>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div className="col">
                    <button onClick={this.handleClick}>Open</button>
                </div>
            );
        }
    }
}
