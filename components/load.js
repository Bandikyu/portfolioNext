import React from 'react';
import '../styles/load.module.css'

class Load extends React.Component {
    constructor(props) {
        super(props);
        this.state = {style: 'display:block'}
    }
    


    // render() {
    //     window.onload = () => {
    //         this.setState({style: 'display:none'})
    //     }

    //     return (
    //         <div Style={this.state.style} className='load'>Aca toy</div>
    //     )
    // }
}

export default Load;