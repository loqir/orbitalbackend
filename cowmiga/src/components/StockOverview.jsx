import React from 'react';

export default class StockOverview extends React.PureComponent {
    constructor(props) {
        super(props);
        this._ref = React.createRef();
    }
    render() {
        console.log(this.props)
        return (
            <div
                class="tradingview-widget-container"
                ref={this._ref}
                style={{ marginTop: '2em' }}
            >

            </div>
        );
    }

}
