import React, { Component } from 'react';
import { Container, Grid, Button } from 'semantic-ui-react'
import Menu from './Menu';
import MenuButton from './MenuButton';
import MenuItem from './MenuItem';
import './App.scss';

class MyHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen:false,
    }
  }

  handleMenuClick() {
    this.setState({menuOpen:!this.state.menuOpen});
  }

  handleLinkClick() {
    this.setState({menuOpen: false});
  }

  render() {

    const menu = ['HOME','WERK','OVER','DIENSTEN','PARTNERS','STORIES','VACATURES','EVENTS','CONTACT']
    const menuItems = menu.map((val,index)=>{
      return (
        <MenuItem
          key={index}
          delay={`${index * 0.1}s`}
          onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>)
    });


    return(
      <header className="app-header">
        <Container className="app-nav">
          <Grid>
            <Grid.Column floated='left' width={8}>
              <svg className="app-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173 46" width="173" height="46"> <path d="M147.9 46h12.6V10.8H173V0h-37.6v10.8h12.5V46zm-41.5-24.9V9.9h7.2c4.6 0 6.9 1.9 6.9 5.6 0 3.7-2.3 5.6-6.9 5.6h-7.2zM93.9 46h12.6V31h7.5c11.3 0 18.8-4.9 18.8-15.5S125.2 0 114 0H93.9v46zm-43.3 0h34.3V35.7H63.2v-7.8h21.5V18H63.2v-7.7h21.7V0H50.6v46zm-38-10.7V10.7h4c8.8 0 14.3 3.2 14.3 12.3 0 9.1-5.4 12.3-14.3 12.3h-4zM0 46h16.5c15.6 0 26.9-6.2 26.9-23C43.3 6.2 32 0 16.5 0H0v46z"></path> </svg>
            </Grid.Column>
            <Grid.Column floated='right' width={8} textAlign='right'>
              <h3 className='app-menu-title'>MENU</h3>
              <div className="app-menu-container">
                <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='black'/>
              </div>
              <Menu open={this.state.menuOpen}>
                {menuItems}
              </Menu>
            </Grid.Column>
          </Grid>
        </Container>
        <h1 className="header-title">work</h1>
        <Button className="header-button" secondary>View Case</Button>
      </header>
    )
  }
}

export default MyHeader;
