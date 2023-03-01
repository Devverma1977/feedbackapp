// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {list: this.props}

  click = () => {
    console.log('jhhh')
    return (
      <div>
        <h1>heuighiughuihi</h1>
      </div>
    )
  }

  render() {
    const {list} = this.state
    const {resources} = list
    const {emojis, loveEmojiUrl} = resources

    return (
      <div>
        <div>
          <h1>How satisfied are you with our customer support performance</h1>
          <ul>
            {emojis.map(each => (
              <li key={each.id}>
                <button type="button" onClick={this.click}>
                  <img src={each.imageUrl} alt={each.name} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Feedback
