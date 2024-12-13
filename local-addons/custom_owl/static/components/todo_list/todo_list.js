/**odoo-module**/

import { registry } from '@web/core/registy';
import {useService} from '@web/core/utils/hooks';

const {Component, useState, onWillStart} = owl;
const{xml} owl.tag;

export class TodoList extends Component {
    setup(){
    }
}

TodoList.template = 'custom_owl.TodoList'