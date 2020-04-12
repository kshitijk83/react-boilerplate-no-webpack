import React, { lazy } from 'react';
import pet from '@frontendmasters/pet';
import { navigate } from '@reach/router';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import ThemeContext from './ThemeContext';

const Modal = lazy(() => import('./Modal'));

class Details extends React.Component {
  state = {
    loading: true,
    showModal: false,
  };

  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        url: animal.url,
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.photos,
        loading: false,
      });
    }, console.error);
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  adopt = () => navigate(this.state.url);

  render() {
    if (this.state.loading) {
      return <h1>loading...</h1>;
    }
    const { animal, breed, description, name, media, showModal } = this.state;
    return (
      //   <pre>
      //     <code>{JSON.stringify(this.props, null, 4)}</code>
      //   </pre>
      <div className="details">
        <Carousel media={media} />
        <div className="">
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${description}`}</h2>
          <ThemeContext.Consumer>
            {(themeHook) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: themeHook[0] }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div className="">
                <h1>Would you to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
