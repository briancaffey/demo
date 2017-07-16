var React = require('react')
var ReactDOM = require('react-dom')

var UserList = React.createClass({
  loadUsersFromServer: function(){
    console.log('something')
    $.ajax({
      url: this.props.url,
      datatype: 'json',
      cache: false,
      success: function(data){
        this.setState({data:data});
      }.bind(this)
    })
  },

  getInitialState: function(){
    return {data: []};
  },

  componentDidMount: function(){
    this.loadUsersFromServer();
    setInterval(this.loadUsersFromServer,
                this.props.pollInterval)
  },
  render: function(){
    if (this.state.data){
      var userNodes = this.state.data.map(function(user){
        return <li><a href={user.first_name}>{user.last_name}</a> </li>
      })
    }
    return (
      <div>
        <h1>Women in the Lead Network</h1>
        <ul>
          {userNodes}
        </ul>
      </div>
    )
  }
})

ReactDOM.render(<UserList url='/users/api/' pollInterval={1000} />,
document.getElementById('container'))
