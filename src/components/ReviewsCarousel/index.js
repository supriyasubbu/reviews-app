// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReview: 0}

  getReview = reviewsList => {
    const {activeReview} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      activeReview
    ]
    return (
      <div className="review-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} />
        <p className="name">{username}</p>
        <p className="company-name">{companyName}</p>
        <p classNme="description">{description}</p>
      </div>
    )
  }

  OnleftArrow = () => {
    const {activeReview} = this.state
    if (activeReview > 0) {
      this.setState(prevState => ({
        activeReview: prevState.activeReview - 1,
      }))
    }
  }

  onRighrArrow = () => {
    const {reviewsList} = this.props
    const {activeReview} = this.state
    if (activeReview < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReview: prevState.activeReview + 1,
      }))
    }
  }

  render() {
    const {activeReview} = this.state
    const {reviewsList} = this.props
    return (
      <div className="app-container">
        <button
          data-testid="leftArrow"
          type="button"
          className="arrow"
          onClick={this.OnleftArrow}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            className="arrow-btn"
          />
        </button>
        {this.getReview(reviewsList)}
        <button
          data-testid="rightArrow"
          type="button"
          className="arrow"
          onClick={this.onRighrArrow}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
            className="arrow-btn"
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel
