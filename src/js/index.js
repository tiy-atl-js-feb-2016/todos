// Javascript Entry Point
import React from 'react';
import { render } from 'react-dom';
import todoData from './todo_data';
import ListView from './list_view';
import DetailsView from './details_view';
import FormView from './form_view';

function renderList() {
  render(
    <ListView items={todoData} onSelect={renderDetails} onNew={renderForm}/>
    , document.querySelector('.app')
  );
}

function renderDetails(itemObj) {
  render(
    <DetailsView item={itemObj} onBack={renderList}/>
    , document.querySelector('.app')
  );
}

function addItemAndRenderList(newItem) {
  newItem.due = new Date();
  newItem.completed = false;
  todoData.push(newItem);
  renderList();
}

function renderForm() {
  render(
    <FormView onAdd={addItemAndRenderList}/>
    , document.querySelector('.app')
  );
}

renderList();
