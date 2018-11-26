import React, { Component } from 'react';
import menuList from './menu.json';
import Header from './header';
import Table from './orderHistory';
import Menu from './menu';
import SignIn from './sign-in';
import SignUp from './sign-up';
import NodeEditor from './noteEditor';
import NodeList from './nodeList';
import FilterMenu from './filterMenu';

const filterMenu = filter =>
  menuList.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase()),
  );

class App extends Component {
  state = {
    notes: [],
    filter: '',
  };

  handleSubmitNodeEditor = (text, rate) => {
    this.setState(prevState => ({
      notes: [{ id: Date.now(), text, rate }, ...prevState.notes],
    }));
  };

  handleChangeFilter = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
  };

  render() {
    const { notes, filter } = this.state;

    const filteredMenu = filterMenu(filter);

    return (
      <div>
        <Header />
        <hr />
        <Table />
        <hr />
        <FilterMenu
          filter={filter}
          handleChangeFilter={this.handleChangeFilter}
        />
        <Menu menuList={filteredMenu} />
        <hr />
        <SignIn />
        <SignUp />
        <hr />
        <NodeEditor onSubmit={this.handleSubmitNodeEditor} />
        <NodeList notes={notes} />
      </div>
    );
  }
}

export default App;
