import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const Charts = (props) => (
    <div>
        <TradingViewWidget
            style={{ marginTop: '2em' }}
            symbol={props.companyName}
            theme={Themes.DARK}
        />
    </div>
);

export default Charts;