var React = require('react')
var ReactDOM = require('react-dom')

if(document.getElementById('companycontainer')) {
var CompanyList = React.createClass({
  loadCompaniesFromServer: function(){
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
    this.loadCompaniesFromServer();
    setInterval(this.loadCompaniesFromServer,
                this.props.pollInterval)
  },
  render: function(){
    if (this.state.data){
      var companyNodes = this.state.data.map(function(company){
        return <li><a href={company.company_url}>{company.company_name}</a> </li>
      })
    }
    return (
      <div>
        <h1>Companies in the Lead Network</h1>
        <ul>
          {companyNodes}
        </ul>
      </div>
    )
  }
})
ReactDOM.render(<CompanyList url='/companies/api/' pollInterval={1000} />,
document.getElementById('companycontainer'))
}

if(document.getElementById('userscontainer')) {
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
        return (
          <div className="thumbnail" key={user.user}>
          <div className="caption post-detail-item">
            <div className="row">
            <div className="col-md-3">
              <img className="img-responsive" src={user.photo_url}/>
            </div>
              <div className="col-md-9">
              <h2>{user.first_name} {user.last_name}</h2>
              <h4>{user.job_title} @ {user.current_company}</h4>
              {user.is_facebook_connected ? <button className="btn btn-default">Facebook: Connected</button> :''}
              {user.is_linkedin_connected ? <button className="btn btn-default">LinkedIn: Connected</button> :''}
              <br /><br />
              <a className="btn btn-primary" href={"/"+user.user_profile_url}>View</a>
              </div>
            </div>
          </div>
        </div>)
      })
    }
    return (
      <div>
        <h1>Women in the Lead Network</h1>
          {userNodes}
      </div>
    )
  }
})


ReactDOM.render(<UserList url='/users/api/' pollInterval={1000} />,
document.getElementById('userscontainer'))

}

if(document.getElementById('usercontainer')) {
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
    const user = this.state.data
    var userProfileData = (
          <div className="thumbnail" key={user.user}>
          <div className="caption post-detail-item">
            <div className="row">
            <div className="col-md-3">
              <img className="img-responsive" src={user.photo_url}/>
            </div>
              <div className="col-md-9">
              <h2>{user.first_name} {user.last_name}</h2>
              <h4>{user.job_title} @ {user.current_company}</h4>
              {user.is_facebook_connected ? <button className="btn btn-default">Facebook: Connected</button> :''}
              {user.is_linkedin_connected ? <button className="btn btn-default">LinkedIn: Connected</button> :''}
              <br /><hr/>
              <p>{user.bio}</p>
              </div>
            </div>
          </div>
        </div>
      )

    return (
      <div>
        <h1>Women in the Lead Network</h1>
          {userProfileData}
      </div>
    )
  }
})

var current_user_url = window.location.href.split('/')
if (String(current_user_url.pop()) == String(0)) {
  var user_id = current_user_url[current_user_url.length - 2]
} else {
  var user_id = current_user_url[current_user_url.length - 1]
}

ReactDOM.render(<UserList url={'/users/' + String(user_id) + '/api'}  pollInterval={1000} />,
document.getElementById('usercontainer'))

}
