import { Link, IndexLink } from 'react-router';
import HomeBody from './HomeBody';

var App = React.createClass({

    render: function(){

        return (

            <div>
                <div style={{float: 'left'}}>
                    <h1>Navigation</h1>
                    <ul role="nav">
                        <li><IndexLink to="/" activeClassName="active" onlyActiveOnIndex="true">Home</IndexLink></li>
                        <li><Link to="/about" activeClassName="active" >About</Link></li>
                        <li><Link to="/contact" activeClassName="active">Contact</Link></li>
                    </ul>

                </div>

                {this.props.children }

            </div>

        )

    }

});

module.exports = App;