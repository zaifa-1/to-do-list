import _ from 'lodash';
import './style.css';

import deleteBtn from './assets/delete.svg'
import logo from '../src/assets/todo-logo.png'
import xSign from './assets/x-symbol-svgrepo-com.svg'


import { Projects, Overlay, TodoCard, ManageTasks, onPageLoad } from "./blueprints";

let newProject= new Projects

const overlay= new Overlay

const todoCard= new TodoCard

const tasks= new ManageTasks

window.onload = onPageLoad;
