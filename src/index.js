import _ from 'lodash'

console.log(_.join(['hello', 'world']))

import React from 'react'
import ReactDOM from 'react-dom'

const Index = () => {
    return <div>HelloReact</div>
}

ReactDOM.render(<Index/>, document.getElementById('app'))