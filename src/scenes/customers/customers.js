import React, { Component } from 'react';
import '../../App.css';
import './styles/customers.css';
import ItemDetails from './components/detail-item';
import NewItem from './components/add-item';
import EditItem from './components/edit-item';
import HttpCustomers from './services/http-customers';

class Customers extends Component {

    constructor(props) {
        super(props);

        this.onSelect = this.onSelect.bind(this);
        this.onNewItem = this.onNewItem.bind(this);
        this.onEditItem = this.onEditItem.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onCancelEdit = this.onCancelEdit.bind(this);
        this.onCreateItem = this.onCreateItem.bind(this);
        this.onUpdateItem = this.onUpdateItem.bind(this);
        this.onDeleteItem = this.onDeleteItem.bind(this);
        
        this.service = HttpCustomers;

        this.state = {
            showDetails: false,
            editItem: false,
            selectedItem: null,
            newItem: null
        }

    }

    componentDidMount() {
        this.getCostumers();
    }

    render() {

        const items = this.state.items;
        console.log("paso 1:");
        console.log(items);
        if (!items) return null;

        const showDetails = this.state.showDetails;

        const selectedItem = this.state.selectedItem;

        const newItem = this.state.newItem;

        const editItem = this.state.editItem;

        const listItems = items.map((item) =>
            <li key={item.documentNumber} onClick={() => this.onSelect(item)}>
                <span className="item-list">{item.documentNumber} | {item.names} {item.lastNames} </span>
            </li>
        );

        return (
            <div className="Customers">
                <header className="App-header">
                    <h1>Customers</h1>
                </header>
                <ul className="items">
                    {listItems}
                </ul>
                <br />
                <button type="button" name="button" onClick={() => this.onNewItem()}>New Customer</button>
                <br />
                {newItem && <NewItem onSubmit={this.onCreateItem} onCancel={this.onCancel} />}
                {showDetails && selectedItem && <ItemDetails item={selectedItem} onEdit={this.onEditItem} onDelete={this.onDeleteItem} />}
                {editItem && selectedItem && <EditItem onSubmit={this.onUpdateItem} onCancel={this.onCancelEdit} item={selectedItem} />}
            </div>
        );

    }

    async getCostumers() {
        var items = await this.service.getCustomers([]);
        this.setState({items: items});
        
    }

    onSelect(item) {
        this.clearState();
        this.setState({
            showDetails: true,
            selectedItem: item
        });
    }

    onCancel() {
        this.clearState();
    }

    onNewItem() {
        this.clearState();
        this.setState({
            newItem: true
        });
    }

    onEditItem() {
        this.setState({
            showDetails: false,
            editItem: true,
            newItem: null
        });
    }

    onCancelEdit() {
        this.setState({
            showDetails: true,
            editItem: false,
            newItem: null
        });
    }

    async onUpdateItem(item) {
        this.clearState();
        var now = new Date(item.birthDate);
        item.birthDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString();
        await this.service.updateCustomer({'params':item});
    }

    async onCreateItem(newItem) {
        this.clearState();
        var now = new Date(newItem.birthDate);
        newItem.birthDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString();
        await this.service.createCustomer({'params':newItem});
    }

    async onDeleteItem(costumerId) {
        this.clearState();
        await this.service.deleteCustomer(costumerId,[]);
        this.getCostumers();

    }

    clearState() {
        this.setState({
            showDetails: false,
            selectedItem: null,
            editItem: false,
            newItem: null
        });
    }

}

export default Customers;