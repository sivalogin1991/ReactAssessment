import React,{ Component } from 'react';

class Children extends Component{
    constructor(props){
        super(props);
    }

    render(){
       const  {labelName,onChange,value,type} = this.props;
        return(
            <div className="pd-10">
            <label>
              {labelName}
            </label>
            {
              type !== "password" ?
              <input
               type={type} 
               onChange={onChange} 
              value={value}
               name={type}  />
               :
               <input
               type={type} 
               onChange={onChange} 
               name={type}  />
            }
          </div> 
        )
    }
}

export default Children;