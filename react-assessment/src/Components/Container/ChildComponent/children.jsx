import React,{ Component } from 'react';

class Children extends Component{
    constructor(props){
        super(props);
    }

    render(){
       const  {labelName,onChange,value,type} = this.props
        return(
            <div className="pd-10">
            <label>
              {labelName}
            </label>
              <input type={type} onChange={onChange} value={value} name={labelName}/>
          </div> 
        )
    }
}

export default Children;