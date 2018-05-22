/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Table from '../lib';
import {mockData} from './data.js';

const clone = o => JSON.parse(JSON.stringify(o));

class App extends Component {
    constructor() {
        super();
        this.state = {
            dataframe: clone(mockData.dataframe),
            n_fixed_columns: 0,
            n_fixed_rows: 0,
            merge_duplicate_headers: true,
            columns: clone(mockData.columns),

            sort: [
                {
                    column: 'Paris',
                    direction: 'desc',
                },
            ],

            selected_cell: [[1, 0], [1, 1], [1, 2], [1, 3], [1, 4]],

            editable: true,
            is_focused: false,
            collapsable: false,
            expanded_rows: [],
            sortable: true,

            display_row_count: 25,
            display_tail_count: 5,

            width: 400,
            height: 500,
            table_style: {
                tableLayout: 'inherit',
            },
        };
    }

    render() {
        return (
            <div>
                <label>test events:{'\u00A0\u00A0'}</label>
                <input type="text" />
                <br />
                <br />
                <Table
                    setProps={newProps => {
                        console.info('--->', newProps);
                        this.setState(newProps);
                    }}
                    {...this.state}
                />
            </div>
        );
    }
}

App.propTypes = {
    value: PropTypes.any,
};

export default App;
