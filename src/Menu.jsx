import React from 'react';
import './App.scss';

/* Menu.jsx */
class Menu extends React.Component {
  constructor(props){
    super(props);
    this.state={
      open: this.props.open? this.props.open:false,
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.open !== this.state.open){
      this.setState({open:nextProps.open});
    }
  }

  render(){
    const styles={
      container: {
        height: this.state.open? '100%': 0
      },
      menuList: {
        paddingTop: '3rem',
      }
    }
    return(
      <div class="app-menu" style={styles.container}>
        {
          this.state.open?
            <div style={styles.menuList}>
              {this.props.children}
            </div>:null
        }
      </div>
    )
  }
}

export default Menu;
