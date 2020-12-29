import React, { Component } from "react";
import "./careerInform.css";
import * as actions from '../../actions'
import { connect } from 'react-redux';
import Loading from "../loading/loading";
import { Carousel } from 'react-bootstrap';

class CareerInformation extends Component {
  constructor() {
    super();
    this.state = {
      career_descriptions: 
        {
          "Software Development": "What They Do: Software developers create the applications or systems that run on a computer or another device.Work Environment: Many software developers work for firms that deal in computer systems design and related services, manufacturing, or for software publishers.How to Become One: Software developers usually have a bachelor’s degree in computer science and strong computer programming skills.",
          "Graphic Design": "What They Do: Graphic designers create visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, and captivate consumers.Work Environment: Many of these workers are employed in specialized design services, publishing, or advertising, public relations, and related services industries.How to Become One: Graphic designers usually need a bachelor’s degree in graphic design or a related field. Candidates for graphic design positions should have a portfolio that demonstrates their creativity and originality.",
          "Marketing": "Marketers are the brains behind getting the word out about their organization’s products or services. According to the Bureau of Labor Statistics (BLS), they monitor market trends, create advertising campaigns, develop pricing strategies and targeting strategies based on demographic data and work with the company to develop more awareness of what they offer."
        }
      ,
      // track_descriptions: [],
      logos: {
        "Software Development": [
          'https://cdn.vox-cdn.com/thumbor/T0r74loeMvtK93oAbHZBiAPit3I=/7x0:633x417/1400x788/filters:focal(7x0:633x417):format(jpeg)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg',
          "https://s3-eu-west-1.amazonaws.com/wuzzuf/files/company_logo/incorta-Egypt-31492-1554298428-og.png",
          "https://avatars3.githubusercontent.com/u/4802335?s=280&v=4",
          "https://media-exp1.licdn.com/dms/image/C560BAQH7wzBj4lTxdA/company-logo_200_200/0/1566071887842?e=2159024400&v=beta&t=O1KET3p9Y5J-BxakMIulmjhk7CTlv1k_kmlYtprwyiI"
        ],
        "Marketing": ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD///9ra2vi4uLPz8/29vbb29vm5uY5OTnu7u6lpaWenp60tLRLS0t6enphYWGFhYUkJCSrq6sQEBDt7e3Gxsa6urr09PTc3NzCwsKSkpJaWlplZWUfHx9/f38xMTFCQkJycnILCwuMjIwpKSlHR0cZGRmWlpbWlIZLAAAFvklEQVR4nO2a65aiOhCFAxKwuSgiF4FWvLT6/m84qZBAIt3nzJqx7dG1vx8uqBSXncRKJYExAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT01b5dX1p1/iW1k6jhN+7yO6haSTJ245E0/Mi9P6E8+Ppp5xURzU17ld4spbuPI4LXLh44fdULqKPHEZ97KbqyQPUHhwJAdxeKqcgexW49J3DDYLsyyQtlwcXUeXUt0hG03ex+TxD1DoaoVbS4KT702vY+3csDmPpTNpmbG1dYuAmnG1sa56/zmF7ja4kcCNCrdfXZFOFNpqnM1QNJL8nMKphtnoNGlBSXOjML51CFnxHzd9sEIuf4Oirr1pIy2VIcgObetGg0drKezxPW/sDU1/meeNHqn9+McpJOo+2K11bMi1j2qJnT7fhvK81Ofj+19leNmbHcLbk6nT3WBjP/6hCpeDLbXb6FJNar8TQ0IxnGmFfBgPxt6ZaVOoDEaEErTCEt1bk82gsDWMqh+qZGPen9nXBf54rBUakXLotBMvGpfKWENV4Q9n5W0gugdaodVV3lW37c/Onyn8uEze3TOKy6noU2+hFnO+4nBfcRIdaazBuOsDjwp8e2fSS22UQjMLWKjbGqZkrLYvFbr3EzbgTut/eGcVaj7U46PjF/dQCs1/mJJTGKYLH570E214k9/3Y/ebOtOhscqWk+sJVR9Gv9XtbvX9UWGiOe+EJd4P59v7CRtQCne21bcULsZK5kUzjQa9wsA0qehkhclR4cjjRouFbbUV3qQmvL6pjxdQyDznhsJsyVdQyE58onH8z7yEQqHxdprwNjTjiygU8XFXW1OsfKUKXkYhsT8YKmNlfCmFRKJTMq4WY15OodCo4o7KOv9CIWXAGftW/kihvkrN8v9C4TyKosnizX35PYWTfJGbAv5C4QP4LYXlJOnv31Zls8+vkFYgWqtcCVC6n13hpU/ZTma5yuLUqsWzK2x7D8cf/oxnJVC/7LMrZJGS6FR11JyacEjf7NXEJ1Y4SrQZxrHnV8gOk5mFYyyXvoJCtp2u6xuR599WeOhf5dNZu7lSdo6NvTenysy1uXF3bUAptFLO3uSzB/NxcAWHzra2ZHTtdOroRt4syIOZH7r27uJSelurVBd5W3dv2t6lyR5Y/z2Ol6+WFAEAf86aosaa1qu3K4E4oOWXLVlXg0+/DyOKhc+RHcnxQ3is+wuUk3Rfb/WdtuoKWXjpY9Nwx0cS0aZSKncTOOcU38nAC8YWeuhKcycXCcyaPjbhIldbSs+UvrPgvNKpTSN3HTY0xAg3TgNfQo41ifPl8Jk4n31x8t1ceczYjrZQ9P6Zl7DE3xxZrHabukoMfrnMCRZyq2WpN3Iz4XEMVPw/BSLLWQU08Dsq4CbkWNKClSfvVZbfvGLxKVHsJ7bCa8SaxtszT1V4x89iCN/ToWxrQyG1jJ5zNLF/EdfSwO+o8TKh/blLsNYKg0v+A4NNFK8CpbCqKpovdB7zzkLmkIadch73DdUrbMnzTTRsVu7SLFCL301YvzN/XolDUVzxVClktDcpFaYh875j/+x/iEqWXQ9S4WU+n1Ptb9Yea712TK3XyZXL+bxqw1knPEVrhLO6yHQ61GSHkvlrUsgT4bAdFK6UwlnWFA9P2qRCFjRmL2XxSQh5C3V1pyRVtvKkl5r7wk3GZtd0RQodlbVKhXP6IYX7Ko7j6vGxhhQu+71ndhQwmm+IsFJX2mMlOtwqkGJ0GyrPzFzaEAoLR4QlulPHZDkp7Ga05kgKZeSKHx9rGgp1JTUT15ObLX3Ulo7TnMRzeL+stpMfL7R6AhyabXgK2c5jHf175WRDBBjaCX6TtVCIyYv8Xyebz757BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcC9+AQ1JSVe6hTEAAAAAAElFTkSuQmCC",
        
        "https://media-exp1.licdn.com/dms/image/C4D0BAQHQjw7iZ10WHg/company-logo_200_200/0?e=2159024400&v=beta&t=ETHGu84m3VDENOSgPDJrDFUSrmsuNmF9AMZCjqrrndI"
      ],
        "Graphic Design": ["https://smhttp-ssl-62978.nexcesscdn.net/wp-content/uploads/2020/04/Dottopia-logo-agency_TIA.jpg", "https://s3-eu-west-1.amazonaws.com/wuzzuf/files/company_logo/Koiak-Egypt-52352-1581859613-og.png", "data:image/png;base64,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"]
      }
    }
  }
  renderTracks = ({ listOfTracks }) => {
    if (listOfTracks) {
      return listOfTracks.map((track, index) => {
        return (
          <Carousel.Item >
            <img
              className="d-block w-100"
              src={track.trackImage}
              alt={"track-" + index+1}
            />

            <Carousel.Caption>
              <h3>{track.trackName}</h3>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        )
      })
    }
    return <Loading />


  }
  render() {

    return (
      <div className='careerInfo-container'>
        <div className='bio-sec'>
          <h2>{this.props.match.params.career}</h2>
          <p>{this.state.career_descriptions[this.props.match.params.career]}</p>
        </div>
        <div className='tracks-carousal'>
          <h2>{this.props.match.params.career} Tracks</h2>
          <Carousel className='tracks'>
          {this.renderTracks(this.props)}
        </Carousel>
        </div>
        
        <div className='companies-logos'>
          <h3>Top Companies in {this.props.match.params.career}</h3>
          <div className='logos-container'>
            {
              this.state.logos[this.props.match.params.career].map( (logo) => {
                return <img src={logo} alt='logo'/>          
              })
            }
          </div>
          
        </div>
      </div>

    );

  }

  componentDidMount() {
    let careerName = this.props.match.params.career;
    this.props.getTracks(careerName);
    // console.log('hist', this.props.history.location.state.career_id)

  }
}

const mapStateToProps = (state) => {
  // console.log('Career', state.careers.tracks)
  return {
    listOfTracks: state.careers.tracks
  }
}
export default connect(mapStateToProps, actions)(CareerInformation);
