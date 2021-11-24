import * as React from "react"

class TopicSelection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTopics: [],
      topicList: this.props.topicList,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    let topics = [...this.props.selectedTopics];
    if(e.target.checked)
    {
      topics.push(e.target.value);
    }
    else
    {
      topics = topics.filter((elem) => {return elem !== e.target.value});
    }
    this.props.setSelectedTopics(topics);
  }

  render() {
    return (
      <div className='topic-selection'>
      <ol>
        {this.state.topicList.map((topic, index) => {
          return (
            <li key={index} className='filter-item'>
              <input type="checkbox" value={topic} id={index} className="filter-checkbox" onChange={this.handleChange} />
              <label className="unselectable">{topic[0].toUpperCase() + topic.substring(1)}</label>
            </li>
          )
        })}
      </ol>
      </div>
    );
  }
}

export default TopicSelection
