var React = require('react')
var ReactDOM = require('react-dom')

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
      console.log('DATA!')
      var companyNodes = this.state.data.map(function(company){
        return <li>{company.company_name} </li>
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
document.getElementById('container'))
