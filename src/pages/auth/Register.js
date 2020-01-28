import React from 'react';
import Layout from '../../layout/Layout';
import Card from '../../components/Card';

const Register = () => {
    return (
        <>  
            <Layout>
                <div className="container mt-5">
                    <h1 className="text-center">Register</h1>
                    <Card className="col-md-5 m-auto">
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password"/>
                            </div>
                            <button className="btn btn-app-primary btn-block">Register</button>
                            <p className="py-3">
                                <a className="txt-primary anchor" href="/login">Back to login.</a>
                            </p>
                        </form>
                    </Card>
                </div>
            </Layout>
        </>
    );
}

export default Register;
