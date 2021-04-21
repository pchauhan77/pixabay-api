import React from "react"

import { Link } from "react-router-dom"

import "./ImageView.css"

const ImageView = (props) => {
  console.log(props.location.state.image)
  const { largeImageURL: image, user: owner, tags, downloads, views, imageSize} = props.location.state.image
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="imageView__container">
            <img src={image} loading="lazy" alt={tags} className="imageView__img img-responsive" />
            <div className="imageView__copyright">
              <p>&copy;Pixabay</p>
            </div>
            <div className="imageView__text">
              <h4>Photographer: <span>{owner}</span></h4>
              <h4>Tags: <span>{tags}</span></h4>
              <h4>Views: <span>{views}</span></h4>
              <h4>Downloads: <span>{downloads}</span></h4>
              <h4>Size: <span>{imageSize}</span></h4>
              <button className="active-recipe__button">
                <Link to="/">Home</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageView