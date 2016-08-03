import DemoNavigation from './DemoNavigation';
import HomeBody from './modules/HomeBody';

var DemoApp = React.createClass({

    render: function() {

        return (

            <div>
                <div style={{float:'left', backgroundColor: 'grey'}}><DemoNavigation/></div>

                <div id="content-body">

                    <HomeBody/>

                </div>

            </div>

        );

    }
});

export default DemoApp;