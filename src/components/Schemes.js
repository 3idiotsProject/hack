import "animate.css";
import React from "react";
import bg from '../assets/bg.jpg'

const PostsData = [
    {
      "category": "Aajeevika",
      "title": "CNN Acquire BEME",
      "text": "CNN purchased Casey Neistat's Beme app for $25million.",
      "image": "https://source.unsplash.com/user/erondu/600x400"
    },
    {
      "category": "PM Krishi Sinchayee Yojna",
      "title": "Nomad Lifestyle",
      "text": "Learn our tips and tricks on living a nomadic lifestyle",
      "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    },
    {
      "category": "Soil Health Card",
      "title": "React and the WP-API",
      "text": "The first ever decoupled starter theme for React & the WP-API",
      "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
    },
    {
      "category": "Nabard",
      "title": "CNN Acquire BEME",
      "text": "CNN purchased Casey Neistat's Beme app for $25million.",
      "image": "https://source.unsplash.com/user/erondu/600x400"
    },
    {
      "category": "PM Fasal Bima Yojna",
      "title": "Nomad Lifestyle",
      "text": "Learn our tips and tricks on living a nomadic lifestyle",
      "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    },
    {
      "category": "Vikaspedia",
      "title": "React and the WP-API",
      "text": "The first ever decoupled starter theme for React & the WP-API",
      "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
    },
    {
      "category": "National Hoticulture Board",
      "title": "Nomad Lifestyle",
      "text": "Learn our tips and tricks on living a nomadic lifestyle",
      "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    },
    {
      "category": "eNam",
      "title": "Nomad Lifestyle",
      "text": "Learn our tips and tricks on living a nomadic lifestyle",
      "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    },
    {
      "category": "Farmer Portal",
      "title": "Nomad Lifestyle",
      "text": "Learn our tips and tricks on living a nomadic lifestyle",
      "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    }
  ]
  
  
  // Start App
  
  class Schemes extends React.Component { 
    constructor() {
      super();
      
      this.state = {
        posts: {}
      }
    }
    componentWillMount() {
      this.setState({
        posts: PostsData
      });
    }
   
  
    render() {
      return <div style={{backgroundImage: `url(${bg})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat', }}>
        <header className="app-header"></header>
        <Title />
        <div className="app-card-list" id="app-card-list">
          {
            Object
            .keys(this.state.posts)
            .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
          }
      </div>
      </div>
    }
  }
  
  
  class Title extends React.Component {
    render() {
      return <section className="app-title">
        <div className="app-title-content" style={{color:'#0000'}}>
          <h1>Government Schemes</h1>
          <p>for Indian Farmers</p>
        </div>
      </section>
    }
  }
  
  
  class Button extends React.Component {
    render() {
      return (
        <button className="button button-primary">
          <i className="fa fa-chevron-right"></i> Find out more
        </button>
      )
    }
  }
  
  
  class CardHeader extends React.Component {
    render() {
      const { image, category } = this.props;
      var style = { 
          backgroundImage: 'url(' + image + ')',
      };
      return (
        <header style={style} className="card-header">
          <h4 className="card-header--title">{category}</h4>
        </header>
      )
    }
  }
  
  
  class CardBody extends React.Component {
    render() {
      return (
        <div className="card-body">
          <p className="date">March 20 2015</p>
          
          <h2>{this.props.title}</h2>
          
          <p className="body-content">{this.props.text}</p>
          
          <Button />
        </div>
      )
    }
  }
  
  
  class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader category={this.props.details.category} image={this.props.details.image}/>
          <CardBody title={this.props.details.title} text={this.props.details.text}/>
        </article>
      )
    }
  }
  export default Schemes;