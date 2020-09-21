import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

  render() {

    const {filter} = this.props;

    return (
      <div className="btn-group">
        <button type="button"
                className="btn btn-info"
                onClick={() => filter('all')}>All</button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick={() => filter('active')}
                >
                  Active
        </button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick={() => filter('done')}>Done</button>
      </div>
    );
  };
}