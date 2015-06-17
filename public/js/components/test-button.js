import React from 'react'

export default React.createClass({
    displayName: 'Test'

  , count: 0
  , getInitialState: function() {
      return {
        buttonText: this.getButtonText(this.count)
      }
    }
  , getButtonText: function(count) {
      return `You Click Me ${count} times!`
    }
  , onClickHandler: function() {
      this.count++
      this.setState({
        buttonText: this.getButtonText(this.count)
      })
    }
  , render: function () {
      return (
        <button onClick={this.onClickHandler}>{this.state.buttonText}</button>
      )
    }
})
