import React from 'react';
import Layout from '../layout/Layout';
import Card from '../components/Card';
import { sampleImge } from '../util/imgAssets';

const Home = () => {
    const SERVICE_DATA = [
        {'description': 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'},
        {'description': 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'},
        {'description': 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'},
        {'description': 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'},
        {'description': 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'},
        {'description': 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'},
        {'description': 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'},
        {'description': 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'},
    ];
    return (
        <>
            <Layout>
                <div className="jumbotron jumbotron-fluid hero-section">
                    <div className="container">
                        <div className="title-section">
                            <h1 className="txt-lg txt-uppercase txt-white display-4">
                                All their equipment and instruments are alive.
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h1 className="display-4 txt-lg">
                        Services
                        <span className="underline"></span>
                    </h1>
                    <div className="row">
                        {
                            SERVICE_DATA.map( (item, i) => (
                                <div className="col-md-3 col-sm-3 mb-4">
                                    <Card imgUrl={sampleImge} > 
                                    <p class="card-text">{item.description}</p>
                                    </Card>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </Layout>
        </>
    );
}

export default Home;
